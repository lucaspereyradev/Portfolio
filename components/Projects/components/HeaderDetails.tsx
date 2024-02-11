import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const HeaderDetails = () => {
    return (
        <nav className="w-full py-4 px-2">
            <Link href={'/projects'} className="text-[14px] font-semibold flex items-center justify-start gap-2">
                <div className='dark:text-white/40 w-fit'><MdKeyboardArrowLeft size={20} /></div>
                Back to list
            </Link>
        </nav>
    )
}

export default HeaderDetails
