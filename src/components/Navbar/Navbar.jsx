import { motion } from 'framer-motion';
import { useState } from 'react';
import { BarsIcon, CloseIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '../';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const logoLeft = '<';
    const logoRigth = '/>';

    const onScroll = () => {
        if (window.scrollY > 808) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    window.addEventListener('scroll', onScroll);

    return (
        <>
            {!toggle && (
                <nav
                    className={`fixed z-[2] w-full overflow-hidden bg-transparent px-4 py-5 backdrop-blur-sm ${
                        scroll ? 'text-black' : 'text-white'
                    }`}
                >
                    <div className="container mx-auto flex items-center justify-between">
                        <div>
                            <a
                                className="flex items-center text-2xl font-bold leading-none"
                                href="/"
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

                        <ul className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
                            {['Inicio', 'Sobre mí', 'Proyectos', 'Skills', 'Contacto'].map(
                                (text) => (
                                    <li
                                        key={`link-${text}`}
                                        className="transition-colors hover:text-emerald-400"
                                    >
                                        <div />
                                        <a href={`#${text}`}>{text}</a>
                                    </li>
                                )
                            )}
                        </ul>

                        <div className="relative flex items-center justify-center lg:hidden">
                            {!toggle && (
                                <button onClick={() => setToggle(true)}>
                                    <BarsIcon color="#34D399" />
                                </button>
                            )}
                        </div>
                    </div>
                </nav>
            )}

            {toggle && (
                <motion.nav
                    whileInView={{ x: [200, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="fixed top-0 bottom-0 right-0 z-10 flex h-screen w-[80%] flex-col items-end justify-end bg-white/90 text-CustomBlack shadow-md sm:w-[40%]"
                >
                    <div className="flex w-full justify-between px-4 pt-3">
                        <a className="flex items-center text-2xl font-bold leading-none" href="/">
                            <span className="text-emerald-400">{logoLeft} </span>
                            <span className="font-medium text-CustomBlack">lukedev</span>
                            <span className="text-emerald-400"> {logoRigth}</span>
                        </a>

                        <button onClick={() => setToggle(false)} className="my-2 mx-6">
                            <CloseIcon color="#34D399" />
                        </button>
                    </div>
                    <ul className="m-0 mt-4 flex h-full w-full list-none flex-col items-start justify-start px-4">
                        {['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'].map((text) => (
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

                    <div className="mt-[400px] flex h-full w-full items-center justify-center gap-8">
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
