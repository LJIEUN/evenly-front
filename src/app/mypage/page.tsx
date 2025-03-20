"use client";
import { useEffect, useState } from "react";

export default function MyPage() {
    const [user, setUser] = useState<{ userId: string; name: string } | null>(null);
    const [view, setView] = useState<"main" | "edit">("main");


    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch("/api/mypage");
                if (!res.ok) throw new Error("사용자 정보를 불러오지 못했습니다.");
                const data = await res.json();
                setUser(data);

            } catch (error) {
                console.error(error);
            }

        }
        fetchUser();
    }, []);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <div>
                <p><strong>아이디:</strong> {user?.userId || "userId"}</p>
                <p><strong>이름:</strong> {user?.name || "name"}</p>
                <div className="mt-4 flex flex-col gap-3">
                    <label className="block text-gray-700 mt-[25px] mb-[5px]">회원 정보 수정</label>
                    <button className="mb-[5px] bg-[#000000] text-[#fff] font-bold px-4 py-2 rounded w-[200px]" onClick={() => setView("edit")}>회원 정보 수정</button>
                    <label className="block text-gray-700 mt-[25px] mb-[5px]">배송 정보 조회</label>
                    <button className="mb-[5px] bg-[#000000] text-[#fff] font-bold px-4 py-2 rounded w-full" onClick={() => alert("배송 조회 기능은 추후 추가 예정입니다!")}>배송 조회</button>
                </div>
            </div>
        </div>
    );
}