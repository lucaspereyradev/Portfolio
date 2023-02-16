import { Fragment, useContext } from 'react';
import { LangContext } from '../../App';
import {
    BootstrapIcon,
    CssIcon,
    HtmlIcon,
    JSIcon,
    MySQLIcon,
    NodeJSIcon,
    ReactIcon,
    SassIcon,
    TailwindIcon,
} from '../../components';
import skills from '../../components/icons/icons.json';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

const icons = {
    BootstrapIcon,
    CssIcon,
    HtmlIcon,
    JSIcon,
    MySQLIcon,
    NodeJSIcon,
    ReactIcon,
    SassIcon,
    TailwindIcon,
};

const Skills = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.skills;

    const title = lang.title;
    const formation = lang.formation;

    return (
        <div className="app__container">
            <h2 className="head-text ">
                {title.text1} <span className="text-emerald-400">{title.text2}</span> {title.text3}{' '}
                <span className="text-emerald-400">{title.text4}</span>
            </h2>

            <div className="mx-auto mt-[3rem] flex w-[80%] flex-col gap-4 max-lg:w-full xl:flex-row">
                <motion.div className="mr-[5rem] flex flex-1 flex-wrap items-start justify-start max-xl:mr-0 max-xl:items-center max-xl:justify-center">
                    {skills.skills.map((item, index) => {
                        const IconComponent = icons[item.icon];
                        return (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="m-4 flex flex-col items-center justify-center text-center transition-all"
                                key={index}
                            >
                                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-[50%] bg-slate-100 transition-shadow hover:shadow-md hover:shadow-gray-300/90">
                                    <IconComponent />
                                </div>
                                <p className="mt-2">{item.name}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div className="max:xsm:pl-0 mx-auto flex flex-1 flex-col max-lg:mt-8 max-md:pl-8 max-1xsm:px-4 lg:items-start lg:justify-start">
                    {formation.map((item, index) => (
                        <Fragment key={index}>
                            <motion.div className="my-4 mx-0 flex w-full flex-row items-start justify-start">
                                <div className="mr-8">
                                    <p className="text-emerald-800 max-xsm:mr-4">{item.year}</p>
                                </div>
                                <motion.div className="flex-1">
                                    <motion.div
                                        whileInView={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-4 flex cursor-pointer flex-col items-start justify-start"
                                        data-tip
                                        data-for={item.name}
                                    >
                                        <h4 className="font-bold">{item.name}</h4>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-[5px] font-light text-gray-500"
                                        >
                                            {item.place}
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default AppWrap(MotionWrap(Skills), 'skills', 'bg-white', '');
