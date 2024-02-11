import React from 'react'

interface IButton {
    children: React.ReactNode
    icon?: React.ReactNode
    type?: 'button' | 'submit' | 'reset' | undefined
    disabled?: boolean
    styleType?: 'primary' | 'secondary'
    className?: string
	size?: 'medium' | 'full'
}

const Button: React.FC<IButton> = ({ children, icon, type, disabled, styleType = 'primary', className = '', size = 'medium' }) => {
    const buttonStyleType = {
        primary: 'bg-[#303236] dark:bg-white/10',
        secondary: 'bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white',
    }

    const buttonSize = {
        medium: 'w-fit',
        full: 'w-full',
    }

    return (
        <button className={`button ${buttonStyleType[styleType]} ${buttonSize[size]} ${className} ${icon && 'gap-3'} `} type={type} disabled={disabled}>
            <div className="text-black/40 dark:text-white/40">{icon}</div> {children}
        </button>
    )
}

export default Button
