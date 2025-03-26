"use client";
import { useSignupForm } from "./useSignupForm";

export default function SignupForm() {

    const {
        name, setName,
        userId, setUserId,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        handleSubmit,
        message,
      } = useSignupForm();

    return (
        <div id="contents" className="pt-[30px] pb-[30px] px-[25px] max-w-[400px] mr-[255px]">
            <form className="w-[400px]" onSubmit={handleSubmit}>
                <h3 className="text-xl mb-[15px] pb-[30px]">create account</h3>
                {message && <p className="text-red-500">{message}</p>}
                <label className="block text-gray-700 mt-[25px] mb-[5px]">ID*</label>
                <input type="email" value={userId} onChange={(e) => setUserId(e.target.value)} className="border bg-white p-2 w-full" required />
                <label className="block text-gray-700 mt-[25px] mb-[5px]">Password*</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border bg-white p-2 w-full" required />
                <span className="text-[11px]">(영문 대문자/소문자/숫자/특수문자를 모두 포함, 8자 이상)</span>
                <label className="block text-gray-700 mt-[25px] mb-[5px]">Password check*</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border bg-white p-2 w-full" required />
                <label className="block text-gray-700 mt-[25px] mb-[5px]">Name*</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border bg-white p-2 w-full" required />
                <button type="submit" className="mt-[40px] mb-[5px] bg-black text-white font-bold px-4 py-2 rounded w-full">create account</button>
            </form>
        </div>
    );
}