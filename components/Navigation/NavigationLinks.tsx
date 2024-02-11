'use client'
import React from 'react'
import Link from 'next/link'
import { INavigation } from '@/lib/interfaces'
import { usePathname } from 'next/navigation'
import { links, linksSocial } from '@/components/Navigation/utils/data'

const NavigationLinks: React.FC<INavigation> = ({ navigationStatus }) => {
    const pathname = usePathname()
    return (
        <div
            className={`relative w-full bg-[#f4f5f5] dark:bg-[#141414] transition-all duration-300 text-black/60 dark:text-white/50 ${
                navigationStatus ? 'h-[320px]' : 'h-0'
            } sm:h-fit sm:mt-5 sm:transition-none`}
        >
            <div className={`px-8 py-4 ${navigationStatus ? '' : 'hidden'} sm:flex sm:flex-col sm:px-0 xl:flex-col-reverse`}>
                <div className="flex flex-col gap-4 xl:gap-2">
                    {links.map(link => (
                        <Link
                            href={link.path}
                            key={link.label}
                            className={`px-4 py-2 rounded-xl flex gap-3 items-center font-semibold ${
                                link.path === pathname && 'text-[#111111] bg-[#aeb1b7]/30 dark:text-white dark:bg-white/10'
                            } xl:w-full xl:font-medium xl:text-sm`}
                        >
                            {link.icon} <span className="sm:hidden xl:block xl:whitespace-nowrap">{link.label}</span>
                        </Link>
                    ))}
                </div>

                <div className="w-full h-[1px] dark:bg-gray-500 my-6 sm:mt-10 xl:hidden" />

                <div className="flex justify-center items-center gap-4 sm:flex-col xl:flex-row xl:mb-10">
                    {linksSocial.map(link => (
                        <Link href={link.path} key={link.path} className="hover:text-white" target="_blank">
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavigationLinks
