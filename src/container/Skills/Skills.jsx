import { useContext } from 'react';
import { LangContext } from '../../App';
import skills from '../../components/icons/icons.json';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Formation, TemplateSkill } from '../../components';

const Skills = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.skills;

    const title = lang.title;
    const formation = lang.formation;

    return (
        <div className="app__container">
            <h2 className="head-text">
                {title.text1} <span className="text-emerald-400">{title.text2}</span> {title.text3}{' '}
                <span className="text-emerald-400">{title.text4}</span>
            </h2>

            <div className="mx-auto mt-[3rem] flex w-[80%] flex-col gap-4 max-lg:w-full xl:flex-row">
                <motion.div className="mr-[5rem] flex flex-1 flex-wrap items-start justify-start max-xl:mr-0 max-xl:items-center max-xl:justify-center">
                    {skills.skills.map((item, index) => {
                        return <TemplateSkill item={item} key={index} />;
                    })}
                </motion.div>

                <motion.div className="mx-auto flex flex-1 flex-col max-lg:mt-8 max-md:pl-8 max-xsm:pl-0 max-1xsm:px-[2.5rem] lg:items-start lg:justify-start">
                    {formation.map((item, index) => (
                        <Formation item={item} key={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default AppWrap(MotionWrap(Skills), 'skills', 'bg-white', '');
