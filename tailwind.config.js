export default {
    content: ["./dist/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
