import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// ✅ [1] 마이페이지 사용자 정보 조회 (GET)
export async function GET(req: NextRequest) {
    try {
        const token = getAccessTokenFromHeader(req);
        if (!token) {
            return NextResponse.json({ error: "토큰이 없습니다." }, { status: 401 });
        }

        const res = await fetch(`${API_BASE_URL}/users/my`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) throw new Error("사용자 정보를 불러오지 못했습니다.");
        const data = await res.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json(
            { error: "사용자 정보를 불러오지 못했습니다." },
            { status: 500 }
        );
    }
}

// ✅ [2] 마이페이지 비밀번호 변경 (PATCH)
export async function PATCH(req: NextRequest) {
    return await requestUpdatePassword(req);
}

async function requestUpdatePassword(req: NextRequest) {
    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
        return NextResponse.json(
            { error: "현재 비밀번호와 새 비밀번호가 필요합니다." },
            { status: 400 }
        );
    }

    try {
        const token = getAccessTokenFromHeader(req);
        if (!token) {
            return NextResponse.json({ error: "토큰이 없습니다." }, { status: 401 });
        }

        const res = await fetch(`${API_BASE_URL}/users/my`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ currentPassword, newPassword }),
        });

        if (!res.ok) throw new Error("비밀번호 변경 실패");

        return NextResponse.json({ message: "비밀번호가 변경되었습니다." });
    } catch {
        return NextResponse.json(
            { error: "비밀번호 변경에 실패했습니다." },
            { status: 500 }
        );
    }
}

// ✅ [3] 마이페이지 회원 탈퇴 (Soft Delete, PATCH로 처리)
export async function DELETE(req: NextRequest) {
    return await requestSoftDeleteUser(req);
}

async function requestSoftDeleteUser(req: NextRequest) {
    try {
        const token = getAccessTokenFromHeader(req);
        if (!token) {
            return NextResponse.json({ error: "토큰이 없습니다." }, { status: 401 });
        }

        const res = await fetch(`${API_BASE_URL}/users/my`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status: "DELETED" }),
        });

        const resultText = await res.text(); // 👈
        console.log("회원탈퇴 응답:", resultText);
        console.log("탈퇴 바디:", JSON.stringify({ status: "DELETED" }));

        if (!res.ok) throw new Error("탈퇴 요청 실패");

        return NextResponse.json({ message: "회원 탈퇴 처리 완료" });
    } catch {
        return NextResponse.json(
            { error: "서버 오류로 탈퇴 실패" },
            { status: 500 }
        );
    }
}

// ✅ [공통] Authorization 헤더에서 Bearer 토큰 추출
function getAccessTokenFromHeader(req: NextRequest): string | null {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) return null;
    const token = authHeader.split(" ")[1]; // "Bearer <token>"
    return token || null;
}
