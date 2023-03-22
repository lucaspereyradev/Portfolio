import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../../App';
import skills from '../../components/icons/icons.json';
import { AppWrap, MotionWrap } from '../../wrapper';
import { AboutIcon, Formation, HatIcon, StarIcon, TemplateSkill } from '../../components';

const About = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.aboutme;

    const imageTexts = lang.imageTexts;
    const aboutme = lang.about;
    const formation = lang.formation;
    const titleSkills = lang.skills.title;

    return (
        <div className="app__container max-lg:mt-[100px] md:mb-12">
            <div className="flex w-full justify-center lg:ml-[1rem] lg:gap-x-[3rem] xl:ml-[4rem] xl:gap-x-[5rem]">
                <motion.div
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="sticky top-[5rem] -bottom-[4rem] hidden h-[30rem] flex-col gap-y-3 lg:flex"
                >
                    <div className="h-[20rem] w-[20rem] rounded-[50%] border-[4px] border-emerald-300">
                        <img src="./pictureofme.png" alt="" className="object-cover" />
                    </div>
                    <h3 className="text-center font-[Prompt] text-2xl font-bold uppercase italic">
                        Lucas Pereyra
                    </h3>
                    <div className="animation -mt-6 flex flex-col gap-y-1">
                        <span className=" text-center text-sm uppercase text-CustomBlack">
                            {imageTexts.text1}
                        </span>
                        <span className="text-center text-sm uppercase"> {imageTexts.text2}</span>
                    </div>
                </motion.div>
                <div className="mb-4 flex flex-col gap-y-[3rem] px-8 lg:w-[60%]">
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4 flex items-center gap-x-4">
                            <AboutIcon />
                            <h2 className="text-3xl font-bold text-emerald-500">{aboutme.title}</h2>
                        </div>
                        <div className="flex flex-col gap-y-[1.5rem] tracking-wide xl:w-[90%]">
                            <p>{aboutme.paragraph1}</p>
                            <p>{aboutme.paragraph2}</p>
                            <p>{aboutme.paragraph3}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4 flex items-center gap-x-4">
                            <HatIcon />
                            <h2 className="text-3xl font-bold text-emerald-500">
                                {formation.title}
                            </h2>
                        </div>
                        <div>
                            {formation.formationDetails.map((item, index) => (
                                <Formation item={item} key={index} />
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="mb-[4rem]"
                    >
                        <div className="mb-3 flex items-center gap-x-4">
                            <StarIcon />
                            <h2 className="text-3xl font-bold text-emerald-500">{titleSkills}</h2>
                        </div>
                        <motion.div className="flex flex-wrap justify-center lg:justify-start xl:w-[90%]">
                            {skills.skills.map((item, index) => {
                                return <TemplateSkill item={item} key={index} />;
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(MotionWrap(About), 'aboutme', 'bg-white', '');
