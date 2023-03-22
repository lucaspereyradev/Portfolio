import React from 'react';
import { motion } from 'framer-motion';
import {
    BootstrapIcon,
    CssIcon,
    HtmlIcon,
    JSIcon,
    TypeScriptIcon,
    NodeJSIcon,
    ExpressIcon,
    MySQLIcon,
    MongoDBIcon,
    JQueryIcon,
    ReactIcon,
    SassIcon,
    TailwindIcon,
    MaterialUIIcon,
    GitHubIcon,
    GitIcon,
    PythonIcon,
    FlaskIcon,
    SequelizeIcon,
    PostmanIcon,
} from '../../components';

function TemplateSkill({ item }) {
    const icons = {
        BootstrapIcon,
        CssIcon,
        HtmlIcon,
        JSIcon,
        TypeScriptIcon,
        NodeJSIcon,
        ExpressIcon,
        MySQLIcon,
        MongoDBIcon,
        JQueryIcon,
        ReactIcon,
        SassIcon,
        TailwindIcon,
        MaterialUIIcon,
        GitHubIcon,
        GitIcon,
        PythonIcon,
        FlaskIcon,
        SequelizeIcon,
        PostmanIcon,
    };
    const IconComponent = icons[item.icon];

    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="m-4 flex flex-col items-center justify-center text-center transition-all"
        >
            <div className="flex h-[90px] w-[90px] items-center justify-center rounded-[50%] bg-slate-100 transition-shadow hover:shadow-md hover:shadow-gray-300/90">
                <IconComponent />
            </div>
            <p className="mt-2">{item.name}</p>
        </motion.div>
    );
}

export default TemplateSkill;
