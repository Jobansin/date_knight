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
                'slow-bounce': 'slow-bounce 4s ease-in-out infinite',
                'slower-bounce': 'slow-bounce 6s ease-in-out infinite',
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
                'slow-bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'slower-bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
        },
    },
    plugins: [],
}
