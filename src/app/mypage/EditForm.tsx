"use client";
import { useEditPasswordForm } from "./useEditPasswordForm";

export default function EditForm({ user, onCancel }: { user: { userId: string; name: string } | null; onCancel: () => void }) {
    const {
        password,
        confirmPassword,
        setPassword,
        setConfirmPassword,
        handleSubmit,
        message
    } = useEditPasswordForm(onCancel);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-[25px]">회원 정보 수정</h3>
            {message && <p className="text-red-500">{message}</p>}
            <form className="w-[300px] tracking-[2px]" onSubmit={handleSubmit}>
                <p><strong>아이디:</strong> {user?.userId || "userId"}</p>
                <p><strong>이름:</strong> {user?.name || "name"}</p>
                <label className="block text-gray-700 mt-[25px] mb-[5px]">새 비밀번호</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border bg-white p-2 w-full h-[36px]" required />
                <label className="block text-gray-700 mt-[10px] mb-[5px]">비밀번호 확인</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border bg-white p-2 w-full h-[36px]" required />
                <div className="flex gap-3 mt-[20px]">
                    <button type="submit" className="w-full bg-[var(--soft-black)] text-white py-2 rounded hover:bg-black">변경하기</button>
                    <button type="button" className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-800" onClick={onCancel}>취소</button>
                </div>
                <p className="text-[12px] text-gray-500 text-center mt-[20px] cursor-pointer hover:underline" >
                    회원 탈퇴
                </p>
            </form>
        </div>
    );
}