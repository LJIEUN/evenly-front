"use client";
import { useState } from "react";
import { validatePassword } from "@/utils/validate";

export function useEditPasswordForm(onSuccess: () => void) {
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
          onSuccess(); // 변경 완료 시 콜백 호출 (닫기 처리 같은)
        } catch (error) {
          setMessage("오류가 발생했습니다.");
        }
      };
    
      return {
        password,
        confirmPassword,
        setPassword,
        setConfirmPassword,
        handleSubmit,
        message,
      };
    }