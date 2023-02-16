import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

const abouts = [
    {
        title: 'Inspiración',
        description: 'Cada proyecto es un mundo nuevo.',
        imageUrl: './about01.png',
    },
    {
        title: 'Desarrollo inteligente',
        description: 'Proyectos eficaces e intuitivos.',
        imageUrl: './about03.png',
    },
    {
        title: 'Diseño agradable',
        description: 'Lo agradable genera un ambiente distinto.',
        imageUrl: './about04.png',
    },
    {
        title: 'Desarrollo Full Stack',
        description: 'Cada tecnologia es importante.',
        imageUrl: './about02.png',
    },
];

const About = () => {
    return (
        <div className="app__container max-lg:mt-[100px] md:mb-12">
            <h2 className="head-text max-xsm:px-4">
                Siempre los
                <span className="text-emerald-500"> Buenos Desarrollos</span>
                <br />
                Son
                <span className="text-emerald-500"> Buenos Negocios</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 justify-items-center max-1xsm:px-2 1xsm:grid-cols-2 1xsm:gap-x-8 xsm:gap-x-0 lg:grid-cols-3 xl:grid-cols-4">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="m-8 flex w-[150px] flex-col items-start justify-start max-1xsm:w-full xsm:w-[190px] sm:w-[220px] 2xl:w-[300px]"
                        key={about.title + index}
                    >
                        <img
                            className="h-[130px] w-full rounded-lg object-cover max-1xsm:h-full xsm:h-[170px] sm:h-[200px] 2xl:h-[280px]"
                            src={about.imageUrl}
                            alt={about.title}
                        />
                        <h2 className="text-md mt-5 font-bold">{about.title}</h2>
                        <p className="mt-3 text-sm">{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AppWrap(MotionWrap(About), 'aboutme', 'bg-white', '');
