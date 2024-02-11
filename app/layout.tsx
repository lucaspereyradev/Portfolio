import dynamic from 'next/dynamic'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import ThemeContextProvider from '@/context/ThemeContext'
import Sidebar from '@/components/Sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lucas Pereyra | Personal Portfolio',
    description: 'Lucas is a front-end developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-full relative bg-[#f4f5f5] dark:bg-[#141414] sm:flex sm:overflow-y-scroll`}>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Sidebar />

                        <main className="main">
                            <section className="container">
                                {children}
                                <Footer />
                            </section>
                        </main>
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
