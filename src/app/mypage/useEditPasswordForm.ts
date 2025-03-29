"use client";
import { useState } from "react";
import { validatePassword } from "@/utils/validate";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export function useEditPasswordForm(onSuccess: () => void) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { logout } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      setMessage(passwordError);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("로그인이 필요합니다.");

      const response = await fetch("/api/mypage", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: currentPassword, // 현재 비밀번호
          newPassword: newPassword,     // 새 비밀번호
        }),
      });

      if (!response.ok) throw new Error("비밀번호 변경 실패");

      setMessage("비밀번호가 성공적으로 변경되었습니다.");
      onSuccess(); // 변경 완료 시 콜백 호출 (닫기 처리 같은)
    } catch {
      setMessage("오류가 발생했습니다.");
    }
  };

  // 회원 탈퇴
  const handleDelete = async () => {
    if (!confirm("정말로 회원 탈퇴하시겠습니까?")) return;

    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("로그인이 필요합니다.");

      const res = await fetch("/api/mypage", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("회원 탈퇴 실패");

      logout(); // 로그아웃 처리

      alert("회원 탈퇴가 완료되었습니다.");
      router.push("/");
    } catch {
      alert("탈퇴 중 오류가 발생했습니다.");
    }
  };

  return {
		currentPassword,
		setCurrentPassword,
		newPassword,
		confirmPassword,
		setNewPassword,
		setConfirmPassword,
		handleSubmit,
		handleDelete,
		message,
  };
}
