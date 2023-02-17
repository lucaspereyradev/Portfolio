import React from 'react';

function SectionsLinks({ lang, classNames, setToggle }) {
    const titles = lang.navlinks.titles;
    const href = lang.navlinks.href;

    return titles.map((title, index) => (
        <li
            key={`link-${title}`}
            className={`whitespace-nowrap transition-colors hover:text-emerald-400 ${classNames}`}
        >
            <div />
            <a href={`#${href[index]}`} onClick={() => (setToggle == '' ? {} : setToggle(false))}>
                {title}
            </a>
        </li>
    ));
}

export default SectionsLinks;
