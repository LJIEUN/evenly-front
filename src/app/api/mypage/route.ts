import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/mock/users/my`);
        if (!res.ok) throw new Error("사용자 정보를 불러오지 못했습니다.");
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "사용자 정보를 불러오지 못했습니다." }, { status: 500});
    }
    
}