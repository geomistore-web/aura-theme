module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
    ],
    darkMode: 'class',
    theme   : {
        container : {
            center : true,
            padding: '16px',
            screens: {
                '2xl': "1240px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)",
            /* Aura: serif display face used for headlines & the logo lockup */
            display: [
                'var(--font-display)',
                'serif',
            ],
        },
        extend    : {
            colors: {
                'dark'            : 'var(--color-ink)',
                'darker'          : 'var(--color-ink-strong)',
                'danger'          : '#AE0A0A',
                'primary'         : 'var(--color-primary)',
                'primary-d'       : 'var(--color-primary-dark)',
                'primary-l'       : 'var(--color-primary-light)',
                'primary-reverse' : 'var(--color-primary-reverse)',
                'primary-dark'    : 'var(--color-primary-dark)',
                /* Aura palette tokens, usable as bg-aura-gold, text-aura-ink, etc. */
                'aura-bg'         : 'var(--aura-bg)',
                'aura-bg-soft'    : 'var(--aura-bg-soft)',
                'aura-surface'    : 'var(--aura-surface)',
                'aura-ink'        : 'var(--aura-ink)',
                'aura-ink-soft'   : 'var(--aura-ink-soft)',
                'aura-muted'      : 'var(--aura-muted)',
                'aura-line'       : 'var(--aura-line)',
                'aura-gold'       : 'var(--aura-gold)',
                'aura-gold-deep'  : 'var(--aura-gold-deep)',
                'aura-dark'       : 'var(--aura-dark)',
                'aura-dark-2'     : 'var(--aura-dark-2)',
            },
            borderRadius: {
                DEFAULT: '2px',
                'pill': '999px',
            },
            boxShadow: {
                'default': '0 10px 30px rgba(20,18,15,.06)',
            },
            screens: {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
