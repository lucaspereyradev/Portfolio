import React, { useContext, useState } from 'react';
import { LangContext } from '../../App';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { ProjectCard } from '../../components';

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
                    <ProjectCard work={work} titlesBtnCards={titlesBtnCards} key={index} />
                ))}
            </motion.div>
        </div>
    );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'projects', '', '');
