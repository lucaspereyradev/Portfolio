import React, { useContext } from 'react';
import { LangContext } from '../../App';
import AboutImage from '../../assets/images/AboutImage';
import { AppWrap, MotionWrap } from '../../wrapper';
import { ContactForm } from '../../components';

const Footer = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.contact;

    return (
        <div className="flex flex-col">
            <div className="app__container lg:mt-[10rem]">
                <h2 className="head-text">{lang.title}</h2>
                <p className="mt-2 text-center italic">lucaspereyra470@gmail.com</p>

                <div className="mt-[4rem] flex w-full flex-row gap-4 max-lg:flex-col max-lg:gap-y-12 lg:mt-[6rem] lg:gap-0 2xl:gap-4">
                    <div className="h-[180px] min-h-[100px] w-full min-w-[200px] lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[700px]">
                        <AboutImage />
                    </div>
                    <div className="h-[400px] w-full md:w-[500px] 2xl:w-[700px]">
                        <ContactForm lang={lang} />
                    </div>
                </div>
            </div>
            <div className="my-6 text-center lg:mt-[10rem]">
                <p>{lang.autorText} &copy;</p>
            </div>
        </div>
    );
};

export default AppWrap(
    MotionWrap(Footer),
    'contact',
    'bg-white',
    'overflow-x-hidden overflow-y-hidden'
);
