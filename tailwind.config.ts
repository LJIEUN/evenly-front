import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        // 1안 (기본 배경색)
        backgroundMain: "#EDEDED", // 배경 (Background)
        backgroundAlt: "#F5F5F5", // 배경 (Alternative)

        // 🌿 Warm Beige 버전
        warmBeige: "#F5F1EB",
        softSand: "#F2E8DA",
        dustyBlue: "#AFC8D9", // 포인트 컬러 (Secondary)
        softKhaki: "#C2B59B", // 포인트 컬러 (Secondary Alt)
        softBlack: "#333333", // 기본 텍스트
        darkGray: "#555555", // 서브 텍스트
        mutedClay: "#D3A489", // CTA 버튼 (주요 액션, 강한 강조)

        // ❄️ Off White 버전
        offWhite: "#FAFAFA",
        lightGray: "#F5F5F5",
        mutedBlue: "#91A8B6",
        warmKhaki: "#A8A18D",
        softGold: "#D6B675",
      },
    },
  },
};

export default config;