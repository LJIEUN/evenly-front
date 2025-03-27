import { NextResponse } from "next/server"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

// ✅ 공통 fetch 로직 분리
async function requestSignup({ name, userId, password }: { name: string; userId: string; password: string }) {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, userId, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "회원가입 실패")
  }

  return data
}

// ✅ 실제 API 핸들러
export async function POST(req: Request) {
  try {
    const { name, userId, password } = await req.json()

    if (!name || !userId || !password) {
      return NextResponse.json({ success: false, error: "필수 입력값이 없습니다." }, { status: 400 })
    }

    const data = await requestSignup({ name, userId, password })
    return NextResponse.json({ success: true, data }, { status: 201 })

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "서버 오류가 발생했습니다." }, { status: 500 })
  }
}
