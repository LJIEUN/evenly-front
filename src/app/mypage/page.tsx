"use client";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";

export default function MyPage() {
    const [user, setUser] = useState<{ userId: string; name: string } | null>(null);
    const [view, setView] = useState<"main" | "edit">("main");


    useEffect(() => {
        async function fetchUser() {
            try {
                const token = localStorage.getItem("access_token");
                if (!token) throw new Error("로그인 토큰이 없습니다.");

                const res = await fetch("/api/mypage", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, // 토큰 헤더로 전달
                    },
                });
                if (!res.ok) throw new Error("사용자 정보를 불러오지 못했습니다.");
                const data = await res.json();
                setUser(data);

            } catch (error) {
                console.error(error);
            }

        }
        fetchUser();
    }, []);

    // 회원 정보 수정 클릭 시 EditForm 표시
    if (view === "edit") {
        return <EditForm user={user} onCancel={() => setView("main")} />;
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <div className="w-[250px] mt-[20px] tracking-[2px]">
                <p><strong>아이디:</strong> {user?.userId || "userId"}</p>
                <p><strong>이름:</strong> {user?.name || "name"}</p>
                <div className="mt-[40px] flex flex-col gap-3">
                    <button className="h-[40px] bg-[var(--soft-black)] text-[#fff] font-bold px-4 py-1 rounded w-full hover:bg-black" onClick={() => setView("edit")}>회원 정보 수정</button>
                    <button className="h-[40px] bg-[var(--soft-black)] text-[#fff] font-bold px-4 py-1 rounded w-full hover:bg-black" onClick={() => alert("배송 조회 기능은 추후 추가 예정입니다!")}>배송 조회</button>
                </div>
            </div>
        </div>
    );
}