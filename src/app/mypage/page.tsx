"use client";
import { useEffect, useState } from "react";

export default function MyPage() {
    const [user, setUser] = useState<{ userId: string; name: string } | null>(null);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">마이페이지</h2>
          <div>
            <p><strong>아이디:</strong> {user?.userId || "userId"}</p>
            <p><strong>이름:</strong> {user?.name || "name"}</p>
            <div className="mt-4 flex flex-col gap-3">
              <button className="mt-[40px] mb-[5px] bg-[#000000] text-[#fff] font-bold px-4 py-2 rounded w-[200px]" onClick={() => setView("edit")}>회원 정보 수정</button>
              <button className="mt-[40px] mb-[5px] bg-[#000000] text-[#fff] font-bold px-4 py-2 rounded w-full" onClick={() => alert("배송 조회 기능은 추후 추가 예정입니다!")}>배송 조회</button>
            </div>
          </div>
        </div>
      );
}