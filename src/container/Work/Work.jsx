import React, { useContext, useState } from 'react';
import { LangContext } from '../../App';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { EyeIcon, GitHubIcon } from '../../components';

const Work = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.work;

    const title = lang.title;
    const btnTitles = lang.btnTitles;
    const works = lang.works;
    const titlesBtnCards = lang.titlesBtnCards;

    const [activeFilter, setActiveFilter] = useState(btnTitles[0]);
    const [filterWork, setFilterWork] = useState(works);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            if (item === btnTitles[0]) {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 200);
    };

    return (
        <div className="app__container">
            <h2 className="head-text">
                {title.text1} <span className="text-emerald-400">{title.text2}</span>
            </h2>

            <div className="mt-16 flex flex-row flex-wrap items-center justify-center">
                {btnTitles.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`m-2 flex cursor-pointer flex-row rounded-lg px-6 py-3 font-bold transition-all hover:bg-CustomBlack/70 hover:text-white ${
                            activeFilter === item
                                ? 'bg-CustomBlack text-white'
                                : 'bg-white text-CustomBlack'
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                trasition={{ duration: 0.5, delayChildren: 0.5 }}
                className="flex flex-wrap justify-center"
            >
                {filterWork.map((work, index) => (
                    <div
                        className="m-4 flex w-[200px] cursor-pointer flex-col justify-start rounded-lg bg-white p-4 text-CustomBlack transition-all hover:shadow-lg max-xsm:w-full max-1xsm:m-2 xsm:w-[350px] sm:w-[300px]"
                        key={index}
                    >
                        <div className="relative flex h-[160px] w-full items-center justify-center md:h-[230px]">
                            <img
                                className="h-full w-full rounded-lg object-cover"
                                src={work.imageUrl}
                                alt={work.title}
                            />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                    staggerChildren: 0.5,
                                }}
                                className="absolute top-0 left-0 bottom-0 right-0 flex h-full w-full items-center justify-center rounded-lg bg-CustomBlack/50 opacity-0 transition-all"
                            >
                                <a href={work.projectLinkDemo} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className="m-4 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] bg-CustomBlack/50 text-white transition-all"
                                    >
                                        <EyeIcon />
                                    </motion.div>
                                </a>

                                <a href={work.projectLinkGithub} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className="m-4 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] bg-CustomBlack/50 text-white transition-all"
                                    >
                                        <GitHubIcon width="25px" height="25px" color="#fff" />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="relative flex w-full flex-col items-center justify-center p-2">
                            <h4 className="mt-4 text-center text-lg font-bold">{work.title}</h4>
                            <p className="mt-[10px] text-center">{work.description}</p>

                            <div className="absolute -top-4 flex items-center justify-center">
                                <p className="flex gap-2">
                                    {work.tags.map((tags, index) => (
                                        <span
                                            key={index}
                                            className="rounded-xl bg-gray-200 px-2 py-1"
                                        >
                                            {tags}
                                        </span>
                                    ))}
                                </p>
                            </div>

                            <h6 className="mt-5 flex flex-wrap items-center justify-center gap-2">
                                {work.technologies.map((item, index) => (
                                    <span
                                        key={index}
                                        className="rounded-xl bg-slate-700 px-2 text-white"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </h6>

                            <div className="mt-6 flex w-full items-center justify-center gap-2 md:hidden">
                                <a
                                    href={work.projectLinkDemo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full rounded-lg bg-emerald-400 px-4 py-1 text-center text-white shadow-sm"
                                >
                                    {titlesBtnCards.text1}
                                </a>
                                <a
                                    href={work.projectLinkGithub}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full rounded-lg bg-emerald-400 px-4 py-1 text-center text-white shadow-sm"
                                >
                                    {titlesBtnCards.text2}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'projects', '', '');
