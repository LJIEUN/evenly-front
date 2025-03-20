"use client";
import { useState } from "react";

export default function SignupForm() {

    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    // 회원가입 처리 함수
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // 폼 기본 제출 동작 방지

        if (!name || !userId || !password || !confirmPassword) {
            setMessage("모든 필드를 입력해주세요.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, userId, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "회원가입 실패");
            }

            setMessage("회원가입 성공! 로그인 페이지로 이동하세요.");
        } catch (error) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage("알 수 없는 오류가 발생했습니다.");
            }
        }
    };

    return (
        <div id="contents" className="pt-[170px] pb-[80px] px-[25px] max-w-[400px] mr-[255px]">
            <form className="w-[400px]" onSubmit={handleSubmit}>
                <h3 className="mb-[15px] pb-[30px]">create account</h3>
                {message && <p className="text-red-500">{message}</p>}
                <label className="block text-gray-700 mt-[25px] mb-[5px]">userId</label>
                <input type="email" value={userId} onChange={(e) => setUserId(e.target.value)} className="border bg-white p-2 w-full" required />
                <span className="text-[11px]">아이디를 입력해 주세요.</span>
                <label className="block text-gray-700 mt-[25px] mb-[5px]">Password*</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border bg-white p-2 w-full" required />
                <span className="text-[11px]">(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)</span>
                <label className="block text-gray-700 mt-[25px] mb-[5px]">Password check*</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border bg-white p-2 w-full" required />
                <label className="block text-gray-700 mt-[25px] mb-[5px]">Name*</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border bg-white p-2 w-full" required />
                <button type="submit" className="mt-[40px] mb-[5px] bg-black text-white font-bold px-4 py-2 rounded w-full">create account</button>
            </form>
        </div>
    );
}