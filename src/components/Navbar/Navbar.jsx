import { useState, useContext, useEffect } from 'react';
import { LangContext } from '../../App';
import { BarsIcon } from '../';
import { LanguageButtons, Logo, ResponsiveMenu, SectionsLinks } from '.';

const Navbar = ({ setLanguage }) => {
    const langContext = useContext(LangContext);
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const lang = langContext.navbar;
    const linkedin = langContext.linkLinkedin;

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
                    className={`fixed z-20 w-full overflow-hidden bg-transparent px-4 py-5 text-white backdrop-blur-sm ${
                        scroll ? 'bg-CustomBlack/75' : ''
                    }`}
                >
                    <div className="container mx-auto flex items-center justify-between">
                        <div>
                            <Logo textColor="text-white" />
                        </div>

                        <ul className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform gap-x-4 md:mx-auto md:flex md:w-auto md:items-center lg:gap-x-6">
                            <SectionsLinks lang={lang} setToggle="" classNames="" />
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
                            <LanguageButtons setLanguage={setLanguage} lang={lang} />
                        </div>
                    </div>
                </nav>
            )}
            {toggle && (
                <ResponsiveMenu
                    lang={lang}
                    setToggle={setToggle}
                    setLanguage={setLanguage}
                    linkedin={linkedin}
                />
            )}
        </>
    );
};

export default Navbar;
