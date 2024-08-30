/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#bff500',
                background: '#121212',
                black: '#000000',
                onyx: '#3f3f40',
            },
        },
    },
    plugins: [],
};
