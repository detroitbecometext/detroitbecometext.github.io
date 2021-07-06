module.exports = {
    purge: ['./src/**/*.{html,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: true,
};
