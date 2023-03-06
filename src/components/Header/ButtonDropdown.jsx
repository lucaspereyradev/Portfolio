import React from 'react';

function ButtonDropdown({ lang }) {
    const handleDropdown = () => {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('hidden');
    };

    return (
        <button
            className="relative w-[13rem] rounded-md bg-emerald-500 px-4 py-2 text-white shadow-lg shadow-emerald-700/60 transition hover:bg-emerald-700"
            onClick={handleDropdown}
        >
            <span>{lang.textBtnDownload}</span> <i className="fa-solid fa-chevron-down"></i>
            <div
                id="dropdown"
                className="absolute mt-2 hidden w-max min-w-full -translate-x-4 rounded-sm bg-white shadow-md"
            >
                <ul className="rounded-md text-left text-CustomBlack">
                    <li
                        className="border-b px-5 py-2"
                        onClick={() => (window.location.href = './es-cv-lucaspereyra.pdf')}
                    >
                        <div className="w-full cursor-pointer">{lang.textSpanish}</div>
                    </li>
                    <li
                        className="border-b px-5 py-2"
                        onClick={() => (window.location.href = './en-resume-lucaspereyra.pdf')}
                    >
                        <div className="w-full cursor-pointer">{lang.textEnglish}</div>
                    </li>
                    <li
                        className="border-b px-5 py-2"
                        onClick={() => (window.location.href = './pt-cv-lucaspereyra.pdf')}
                    >
                        <div className="w-full cursor-pointer">{lang.textPortuguese}</div>
                    </li>
                </ul>
            </div>
        </button>
    );
}

export default ButtonDropdown;
