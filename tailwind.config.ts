import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // 1안 (기본 배경색)
                backgroundMain: "var(--background-main)",
                backgroundAlt: "var(--background-alt)",

                // 🌿 Warm Beige 버전
                warmBeige: "var(--warm-beige)",
                softSand: "var(--soft-sand)",
                dustyBlue: "var(--dusty-blue)",
                softKhaki: "var(--soft-khaki)",
                softBlack: "var(--soft-black)",
                darkGray: "var(--dark-gray)",
                mutedClay: "var(--muted-clay)",

                // ❄️ Off White 버전
                offWhite: "var(--off-white)",
                lightGray: "var(--light-gray)",
                mutedBlue: "var(--muted-blue)",
                warmKhaki: "var(--warm-khaki)",
                softGold: "var(--soft-gold)",
            },
        },
    },
};

export default config;