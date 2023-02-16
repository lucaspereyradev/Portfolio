import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className="z-10 ml-auto flex flex-col items-center justify-center p-4 max-sm:hidden">
            {['home', 'aboutme', 'projects', 'skills', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className={`m-2 h-[10px] w-[10px] rounded-[50%] bg-[#cbcbcb] transition-colors hover:bg-emerald-400/50 ${
                        active === item ? 'bg-emerald-400' : ''
                    }`}
                />
            ))}
        </div>
    );
};

export default NavigationDots;
