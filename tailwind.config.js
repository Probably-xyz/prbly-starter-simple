/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
        Main: ['Space Grotesk', 'sans-serif'],
        Sub: ['Raleway', 'sans-serif'],
        },
        extend: {
        colors: {
        'prbly-pink': '#FF69B4',
        'prbly-blue': '#00FFFF',
        'prbly-yellow': '#FFEC51',
        'prbly-white': '#FAFAFA',
        },
        },
    },
    plugins: [],
}
