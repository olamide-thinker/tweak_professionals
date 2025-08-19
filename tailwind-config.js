// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            height: {
                dynamic: 'clamp(100vh, 20vh + 10vw, 150vh)',
            },
        },
    },
};
