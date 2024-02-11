import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const CURRENT_YEAR = new Date().getFullYear()
    return (
        <footer className="w-full mt-20">
            <div className="w-full h-[1px] dark:bg-gray-500" />

            <div className="py-4 text-[14px] leading-[1.8em] tracking-[0em] text-[#999999] dark:text-white/40 flex justify-between items-center">
                <p>
                    Built in <span className="text-black dark:text-white">Next.js 13</span> - Made by{' '}
                    <Link
                        href={'https://www.linkedin.com/in/lucaspereyradev/?locale=en_US'}
                        target="_blank"
                        className="text-black border-black hover:border-b dark:text-white dark:border-white"
                    >
                        Lucas Pereyra
                    </Link>
                    - &copy;
                    {CURRENT_YEAR}
                </p>

                <Link href={'/contact'} className="text-black border-black hover:border-b dark:text-white dark:border-white">
                    Chat with me!
                </Link>
            </div>
        </footer>
    )
}

export default Footer
