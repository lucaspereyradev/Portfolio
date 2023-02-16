import { motion } from 'framer-motion';
import { useState, useContext, useEffect } from 'react';
import { BarsIcon, CloseIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '../';
import { LangContext } from '../../App';

const Navbar = ({ setLanguage }) => {
    const langContext = useContext(LangContext);
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const lang = langContext.navbar;

    const logoLeft = '<';
    const logoRigth = '/>';

    const onScroll = () => {
        if (window.scrollY > 808) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            {!toggle && (
                <nav
                    className={`fixed z-20 w-full overflow-hidden bg-transparent px-4 py-5 backdrop-blur-sm ${
                        scroll ? 'text-black' : 'text-white'
                    }`}
                >
                    <div className="container mx-auto flex items-center justify-between">
                        <div>
                            <a
                                className="flex items-center text-2xl font-bold leading-none"
                                href={lang.redirect}
                            >
                                <span className="text-emerald-400">{logoLeft} </span>
                                <span
                                    className={`font-medium ${
                                        scroll ? 'text-black' : 'text-white'
                                    }`}
                                >
                                    lukedev
                                </span>
                                <span className="text-emerald-400"> {logoRigth}</span>
                            </a>
                        </div>

                        <ul className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform gap-x-4 md:mx-auto md:flex md:w-auto md:items-center lg:gap-x-6">
                            {lang.titles.map((text) => (
                                <li
                                    key={`link-${text}`}
                                    className="whitespace-nowrap transition-colors hover:text-emerald-400"
                                >
                                    <div />
                                    <a href={`#${text}`}>{text}</a>
                                </li>
                            ))}
                        </ul>

                        {!toggle && (
                            <button
                                className="relative flex items-center justify-center md:hidden"
                                onClick={() => setToggle(true)}
                            >
                                <BarsIcon color="#34D399" />
                            </button>
                        )}
                        <div className="hidden gap-x-2 md:flex">
                            <button onClick={() => setLanguage('es')}>
                                <img
                                    src="/spain-flag.webp"
                                    width={45}
                                    className="h-full rounded-[4px]"
                                    alt={lang.languages.es}
                                    title={lang.languages.es}
                                />
                            </button>
                            <button onClick={() => setLanguage('en')}>
                                <img
                                    src="/usa-flag.webp"
                                    width={45}
                                    className="h-full rounded-[4px]"
                                    alt={lang.languages.en}
                                    title={lang.languages.en}
                                />
                            </button>
                            <button onClick={() => setLanguage('pt')}>
                                <img
                                    src="/brazil-flag.webp"
                                    width={45}
                                    className="h-full rounded-[4px]"
                                    alt={lang.languages.pt}
                                    title={lang.languages.pt}
                                />
                            </button>
                        </div>
                    </div>
                </nav>
            )}

            {toggle && (
                <motion.nav
                    whileInView={{ x: [200, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="fixed top-0 bottom-0 right-0 z-20 flex h-screen w-[80%] flex-col items-end justify-end bg-white/90 text-CustomBlack shadow-md sm:w-[40%]"
                >
                    <div className="absolute top-0 left-0 px-4 pt-6">
                        <a className="flex items-center text-2xl font-bold leading-none" href="/">
                            <span className="text-emerald-400">{logoLeft} </span>
                            <span className="font-medium text-CustomBlack">lukedev</span>
                            <span className="text-emerald-400"> {logoRigth}</span>
                        </a>
                    </div>
                    <button
                        className="absolute top-0 right-0 px-8 py-5"
                        onClick={() => setToggle(false)}
                    >
                        <CloseIcon color="#34D399" />
                    </button>
                    <ul className="mt-[6rem] flex h-full w-full list-none flex-col items-start justify-start px-4">
                        {lang.titles.map((text) => (
                            <li
                                key={text}
                                className="m-4 text-xl font-medium uppercase transition-colors hover:text-emerald-400"
                            >
                                <a href={`#${text}`} onClick={() => setToggle(false)}>
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-[6rem] flex w-full justify-center gap-x-5">
                        <button onClick={() => setLanguage('es')}>
                            <img
                                src="/spain-flag.webp"
                                width={45}
                                className="h-full rounded-[4px]"
                                alt={lang.languages.es}
                                title={lang.languages.es}
                            />
                        </button>
                        <button onClick={() => setLanguage('en')}>
                            <img
                                src="/usa-flag.webp"
                                width={45}
                                className="h-full rounded-[4px]"
                                alt={lang.languages.en}
                                title={lang.languages.en}
                            />
                        </button>
                        <button onClick={() => setLanguage('pt')}>
                            <img
                                src="/brazil-flag.webp"
                                width={45}
                                className="h-full rounded-[4px]"
                                alt={lang.languages.pt}
                                title={lang.languages.pt}
                            />
                        </button>
                    </div>

                    <div className="flex h-full w-full items-center justify-center gap-8">
                        <a
                            href="https://github.com/lucaspereyradev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon color="#34D399" width="2.1rem" height="2.1rem" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lucaspereyradev/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon color="#34D399" width="2.1rem" height="2.1rem" />
                        </a>
                        <a
                            href="https://www.instagram.com/lukehz_/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <InstagramIcon color="#34D399" width="2.1rem" height="2.1rem" />
                        </a>
                    </div>
                </motion.nav>
            )}
        </>
    );
};

export default Navbar;
