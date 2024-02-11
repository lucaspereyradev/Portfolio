'use client' 
import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { MdClose } from "react-icons/md";
import { INavigation } from '@/lib/interfaces'

const NavigationBars: React.FC<INavigation> = ({ navigationStatus, toggleNavigationStatus }) => {
    return (
        <button onClick={toggleNavigationStatus} className='sm:hidden'>
			{navigationStatus ? <MdClose color="#666666" size="22" /> : <FaBars color="#666666" size="22" /> }
        </button>
    )
}

export default NavigationBars
