"use client";
import { useState } from "react";
import { validatePassword } from "@/utils/validate";

export default function EditForm({ user, onCancel }: { user: { userId: string; name: string } | null; onCancel: () => void }) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const passwordError = validatePassword(password);
        if (passwordError) {
            setMessage(passwordError);
            return;
        }

        if (password !== confirmPassword) {
            setMessage("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await fetch("/api/mypage", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) throw new Error("비밀번호 변경 실패");

            setMessage("비밀번호가 성공적으로 변경되었습니다.");
        } catch (error) {
            setMessage("오류가 발생했습니다.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-4">비밀번호 변경</h3>
            {message && <p className="text-red-500">{message}</p>}
            <form className="w-[300px] tracking-[2px]" onSubmit={handleSubmit}>
                <p><strong>아이디:</strong> {user?.userId || "userId"}</p>
                <p><strong>이름:</strong> {user?.name || "name"}</p>
                <label className="block text-gray-700 mt-[25px] mb-[5px]">새 비밀번호</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border bg-white p-2 w-full" required />
                <label className="block text-gray-700 mt-[10px] mb-[5px]">비밀번호 확인</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border bg-white p-2 w-full" required />
                <div className="flex gap-3 mt-[20px]">
                    <button type="submit" className="w-full bg-[var(--soft-black)] text-white py-2 rounded hover:bg-black">변경하기</button>
                    <button type="button" className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-800" onClick={onCancel}>취소</button>
                </div>
            </form>
        </div>
    );
}