import React from 'react';
import { motion } from 'framer-motion';
import { CloseIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '../../';
import { Logo, LanguageButtons, SectionsLinks } from '../';

function ResposiveMenu({ lang, setToggle, setLanguage, linkedin }) {
    return (
        <motion.nav
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="fixed top-0 bottom-0 right-0 z-20 flex h-screen w-[80%] flex-col items-end justify-end bg-white/90 text-CustomBlack shadow-md sm:w-[40%]"
        >
            <div className="absolute top-0 left-0 px-4 pt-6">
                <Logo textColor="text-CustomBlack" />
            </div>
            <button className="absolute top-0 right-0 px-8 py-5" onClick={() => setToggle(false)}>
                <CloseIcon color="#34D399" />
            </button>
            <ul className="mt-[6rem] flex h-full w-full list-none flex-col items-start justify-start px-4">
                <SectionsLinks
                    lang={lang}
                    classNames="m-4 text-xl font-medium uppercase"
                    setToggle={setToggle}
                />
            </ul>

            <div className="mt-[6rem] flex w-full justify-center gap-x-5">
                <LanguageButtons setLanguage={setLanguage} lang={lang} />
            </div>

            <div className="flex h-full w-full items-center justify-center gap-8">
                <a href="https://github.com/lucaspereyradev" target="_blank" rel="noreferrer">
                    <GitHubIcon color="#34D399" width="2.1rem" height="2.1rem" />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon color="#34D399" width="2.1rem" height="2.1rem" />
                </a>
                <a href="https://www.instagram.com/lukehz_/" target="_blank" rel="noreferrer">
                    <InstagramIcon color="#34D399" width="2.1rem" height="2.1rem" />
                </a>
            </div>
        </motion.nav>
    );
}

export default ResposiveMenu;
