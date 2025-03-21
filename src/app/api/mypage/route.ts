import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/mock/users/my`);
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
        const res = await fetch(`${API_BASE_URL}/mock/users/my`, {
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