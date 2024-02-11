import React from 'react'
import Projects from '@/components/Projects/Projects'

const ProjectsView = () => {
    return (
        <>
            <div>
                <h1 className="font-semibold text-2xl leading-[1.5em] text-[#111111] dark:text-white tracking-[-0.01em] xs:text-[32px] sm:text-[40px]">
                    Projects
                </h1>

                <p className="text-[18px] leading-[1.8em] text-[#666666] tracking-[-0.01em] ">Showcase of innovative design solutions</p>
            </div>

            <Projects />
        </>
    )
}

export default ProjectsView
