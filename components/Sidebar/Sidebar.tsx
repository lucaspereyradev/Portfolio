'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import img from '@/assets/photo.png'
import ThemeSwitch from '../OldComponents/ThemeSwitch/ThemeSwitch'
import NavigationBars from '../Navigation/NavigationBars'
import NavigationLinks from '../Navigation/NavigationLinks'
import useNavigationStatus from '@/hooks/useNavigationStatus'

const Image = dynamic(() => import('next/image'))

const Sidebar = () => {
    const { navigationStatus, toggleNavigationStatus } = useNavigationStatus()

    return (
        <>
            <div className={`sticky top-0 h-fit bg-[#f4f5f5] dark:bg-[#141414] sm:h-screen sm:left-0 sm:w-fit sm:z-10`}>
                <div
                    className={`flex justify-between items-center px-6 py-4 ${
                        navigationStatus && 'border-b border-gray-500'
                    } sm:flex-col sm:px-4 sm:py-11 sm:h-full sm:justify-start xl:w-[280px] xl:py-[40px] xl:px-[24px]`}
                >
                    <div className="w-full flex gap-4 xl:flex-col xl:text-center xl:justify-center xl:items-center">
                        <Image src={img} alt="" className="w-[48px] h-[48px] rounded-lg object-contain sm:object-cover sm:w-full xl:object-contain xl:w-[56px] xl:h-[56px]" />

                        <div className="flex flex-col dark:text-white sm:hidden xl:flex">
                            <span className='font-semibold'>Lucas Pereyra</span>
                            <span className="text-[#666666] text-md">Frontend Developer</span>
                        </div>
                    </div>

                    <div className="hidden w-full sm:block">
                        <NavigationLinks navigationStatus={navigationStatus} />
                    </div>

                    <div className="flex gap-8 items-center sm:mt-auto">
                        <ThemeSwitch />
                        <NavigationBars navigationStatus={navigationStatus} toggleNavigationStatus={toggleNavigationStatus} />
                    </div>
                </div>
                <div className="sm:hidden">
                    <NavigationLinks navigationStatus={navigationStatus} />
                </div>
            </div>
        </>
    )
}

export default Sidebar
