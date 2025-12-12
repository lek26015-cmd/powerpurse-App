/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-ocean': '#2C365A',
                'cream': '#EEE8DF',
                'beige': '#C4BCB0',
                'white': '#FFFFFF',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
}
