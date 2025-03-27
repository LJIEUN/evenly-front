import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/users/my`);
        if (!res.ok) throw new Error("사용자 정보를 불러오지 못했습니다.");
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "사용자 정보를 불러오지 못했습니다." }, { status: 500 });
    }

}

// 마이페이지 비밀번호 수정 api 연동
export async function PATCH(req: Request) {
    return await requestUpdatePassword(req); // 실제 처리 함수
}

async function requestUpdatePassword(req: Request) {
    const { password } = await req.json();

    if (!password) {
        return NextResponse.json({ error: "비밀번호가 필요합니다." }, { status: 400 });
    }

    try {
        const res = await fetch(`${API_BASE_URL}/users/my`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (!res.ok) throw new Error("비밀번호 변경 실패");

        return NextResponse.json({ message: "비밀번호가 변경되었습니다." });
    } catch (error) {
        return NextResponse.json({ error: "비밀번호 변경에 실패했습니다." }, { status: 500 });
    }
}

// 마이페이지 회원 탈퇴 api 연동 (Soft Delete)
export async function DELETE() {
    return await requestSoftDeleteUser();
}

async function requestSoftDeleteUser() {
    try {
        const res = await fetch(`${API_BASE_URL}/users/my`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "DELETED" }),
        });

        if (!res.ok) throw new Error("탈퇴 요청 실패");

        return NextResponse.json({ message: "회원 탈퇴 처리 완료" });
    } catch (error) {
        return NextResponse.json({ error: "서버 오류로 탈퇴 실패" }, { status: 500 });
    }
}