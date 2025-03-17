"use client";
import { useState } from "react";

export default function SignupForm() {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div id="contents" className="pt-[170px] pb-[80px] px-[25px] max-w-[400px] mr-[255px]">
            <form className="w-[400px]">
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
                <button type="submit" className="mt-[40px] mb-[5px] bg-black text-white font-bold px-4 py-2 rounded w-full">create account</button>
            </form>
        </div>
    );
}