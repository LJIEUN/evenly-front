import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, password } = await req.json();

    // 입력값 검증
    if (!userId || !password) {
      return NextResponse.json({ success: false, error: "필수 입력값이 없습니다." }, { status: 400 });
    }

    // 백엔드 API 호출
    const response = await fetch("http://dev-apne2-kr-evenly-app-lb-1348251896.ap-northeast-2.elb.amazonaws.com/mock/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ success: false, error: errorData.message || "회원가입 실패" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ success: false, error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
