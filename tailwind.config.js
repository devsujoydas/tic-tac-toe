/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
module.exports = {
    theme: {
        extend: {
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(6.4px)',
            },
        },
    },
    variants: {
        backdropFilter: ['responsive'],
    },
    plugins: [
        require('tailwindcss-filters'),
    ],
}
