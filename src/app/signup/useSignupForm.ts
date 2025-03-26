"use client";
import { useState } from "react";
import { validateId, validatePassword } from "@/utils/validate"; // 유효성 검사 함수 추가
import { useRouter } from "next/navigation";  // 페이지 전환을 위한 라우터

export function useSignupForm() {
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const router = useRouter();

    // 회원가입 처리
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // 폼 기본 제출 동작 방지

        if (!name || !userId || !password || !confirmPassword) {
            setMessage("모든 필드를 입력해주세요.");
            return;
        }

        // 아이디 유효성 검사
        const idError = validateId(userId);
        if (idError) {
            setMessage(idError);
            return;
        }

        // 비밀번호 유효성 검사
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
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, userId, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "회원가입 실패");
            }

            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            router.push("/login");

        } catch (error) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage("알 수 없는 오류가 발생했습니다.");
            }
        }
    };

    return {
        name, setName,
        userId, setUserId,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        handleSubmit,
        message,
    };
}