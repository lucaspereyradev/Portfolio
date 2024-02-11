'use client'
import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { PiSunFill } from 'react-icons/pi'

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? (
                <PiSunFill color="#666666" size="22px" />
            ) : (
                <BsFillMoonStarsFill color="#666666" size="22px" />
            )}
        </button>
    )
}
