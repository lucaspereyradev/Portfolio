import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./modules/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            xs: '400px',
            sm: '876px',
            md: '1024px',
            lg: '1270px',
            xl: '1440px',
        },
        container: {
            center: true,
            screens: {
                xs: '100%',
                sm: '600px',
                md: '720px',
                lg: '900px',
                xl: '900px',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
export default config
