import React from 'react';

function Logo({ textColor }) {
    const logoLeft = '<';
    const logoRigth = '/>';

    return (
        <a className="flex items-center text-2xl font-bold leading-none" href="#home">
            <span className="text-emerald-400">{logoLeft} </span>
            <span className={`font-medium ${textColor}`}>lukedev</span>
            <span className="text-emerald-400"> {logoRigth}</span>
        </a>
    );
}

export default Logo;
