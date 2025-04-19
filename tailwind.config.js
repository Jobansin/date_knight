/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'gradient-flow': 'gradient-flow 5s ease-in-out infinite',
            },
            keyframes: {
                'gradient-flow': {
                    '0%, 100%': {
                        'background-position': '0% 0%',
                    },
                    '50%':{
                        'background-position': '100% 100%',
                    },
                },
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
        },
    },
    plugins: [],
}
