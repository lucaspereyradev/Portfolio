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

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Fragment } from 'react';

const skills = [
    {
        name: 'HTML',
        image: <HtmlIcon />,
    },
    {
        name: 'CSS',
        image: <CssIcon />,
    },
    {
        name: 'Javascript',
        image: <JSIcon />,
    },
    {
        name: 'React',
        image: <ReactIcon />,
    },
    {
        name: 'Nodejs',
        image: <NodeJSIcon />,
    },
    {
        name: 'MySQL',
        image: <MySQLIcon />,
    },
    {
        name: 'SASS',
        image: <SassIcon />,
    },
    {
        name: 'Bootstrap',
        image: <BootstrapIcon />,
    },
    {
        name: 'TailwindCSS',
        image: <TailwindIcon />,
    },
];

const formation = [
    {
        name: 'Bootcamp Full Stack en Javascript',
        place: 'Dev Place',
        description: 'Estudie y creé proyectos Full Stack',
        year: 'Oct. 2022 - Feb. 2023',
        link: 'https://www.devplace.com.ar/',
    },
    {
        name: 'Técnico Informatico personal y profesional',
        place: 'Escuela de Educación Secundaria Técnica n°5 "Amancio Williams"',
        description: 'Adquiri conocimientos de programación, sistemas, redes y más.',
        year: 'Mar. 2015 - Feb. 2022',
        link: 'https://cutt.ly/o91aLxz',
    },
];

const Skills = () => {
    return (
        <div className="app__container">
            <h2 className="head-text ">
                Mis <span className="text-emerald-400">Habilidades</span> y{' '}
                <span className="text-emerald-400">Formación</span>
            </h2>

            <div className="mx-auto mt-[3rem] flex w-[80%] flex-col gap-4 max-lg:w-full xl:flex-row">
                <motion.div className="mr-[5rem] flex flex-1 flex-wrap items-start justify-start max-xl:mr-0 max-xl:items-center max-xl:justify-center">
                    {skills.map((item, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="m-4 flex flex-col items-center justify-center text-center transition-all"
                            key={index}
                        >
                            <div className="flex h-[90px] w-[90px] items-center justify-center rounded-[50%] bg-slate-100 transition-shadow hover:shadow-md hover:shadow-gray-300/90">
                                {item.image}
                            </div>
                            <p className="mt-2">{item.name}</p>
                        </motion.div>
                    ))}
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
