import dynamic from 'next/dynamic'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ThemeContextProvider from '@/context/ThemeContext'
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch'
// const Header = dynamic(() => import('@/components/Header/Header'))

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lucas Pereyra | Personal Portfolio',
    description: 'Lucas is a front-end developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
                <div className="bg-emerald-200 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-green-300/50"></div>
                <div className="bg-cyan-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-sky-600/50"></div>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />

                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
