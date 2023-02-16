import React, { useState, useContext } from 'react';
import { LangContext } from '../../App';
import AboutImage from '../../assets/images/AboutImage';
import { AppWrap, MotionWrap } from '../../wrapper';

import emailjs from 'emailjs-com';

const Footer = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.contact;

    const [message, setMessage] = useState(null);

    const input = lang.input;

    const handleSubmitEmail = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE,
                import.meta.env.VITE_EMAILJS_TEMPLATE,
                event.target,
                import.meta.env.VITE_EMAILJS_PUBLICKEY
            )
            .then(() => {
                setMessage('Se envio correctamente. Te respondere dentro de poco!');
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            });
    };

    return (
        <>
            <div className="app__container">
                <h2 className="head-text">{lang.title}</h2>

                <div className="mt-16 flex w-full flex-row gap-4 max-lg:flex-col max-lg:gap-y-12 lg:gap-0 2xl:gap-4">
                    <div className="h-[180px] min-h-[100px] w-full min-w-[200px] lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[700px]">
                        <AboutImage />
                    </div>
                    <div className="h-[400px] w-full md:w-[500px] 2xl:w-[700px]">
                        <form
                            className="ml-16 flex flex-col gap-y-4 max-lg:ml-0 xl:ml-0"
                            onSubmit={handleSubmitEmail}
                        >
                            {message && (
                                <p className="-mb-2 rounded-md bg-emerald-400 py-2 text-center text-white">
                                    {message}
                                </p>
                            )}
                            <input
                                className="rounded-md px-6 py-3 transition-all hover:shadow-md focus:shadow-lg focus:outline-none"
                                type="text"
                                id="name"
                                name="name"
                                placeholder={input.namePlaceholder}
                                required
                            />
                            <input
                                className="rounded-md px-6 py-3 transition-all hover:shadow-md focus:shadow-md focus:outline-none"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <textarea
                                className="h-[200px] resize-none rounded-md px-6 py-3 transition-all hover:shadow-md focus:shadow-md focus:outline-none"
                                name="message"
                                id="message"
                                placeholder={input.descriptionPlaceholder}
                                required
                            ></textarea>
                            <button className="mx-auto w-[50%] rounded-md bg-emerald-500 py-2 text-white transition-colors hover:bg-emerald-700/90 lg:w-[35%] 2xl:w-[25%]">
                                {lang.btn}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="my-16 text-center lg:mt-16">
                    <p>{lang.autorText} &copy;</p>
                </div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Footer), 'contact', '', 'overflow-x-hidden overflow-y-hidden');
