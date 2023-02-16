import React, { useContext } from 'react';
import { LangContext } from '../App';
import { InstagramIcon, GitHubIcon, LinkedInIcon } from './';

const SocialMedia = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.linkLinkedin;

    return (
        <div className="z-10 flex flex-col items-center justify-end gap-y-2 p-4 max-sm:hidden">
            <a className="app__social-buttons" href={lang} target="_blank" rel="noreferrer">
                <LinkedInIcon height={'18px'} width={'18px'} color={'#fff'} />
            </a>
            <a
                className="app__social-buttons"
                href="https://github.com/lucaspereyradev"
                target="_blank"
                rel="noreferrer"
            >
                <GitHubIcon height={'18px'} width={'18px'} color={'#fff'} />
            </a>
            <a
                className="app__social-buttons"
                href="https://www.instagram.com/lukehz_/"
                target="_blank"
                rel="noreferrer"
            >
                <InstagramIcon height={'18px'} width={'18px'} color={'#fff'} />
            </a>
        </div>
    );
};

export default SocialMedia;
