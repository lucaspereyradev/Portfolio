import React from 'react'
import dynamic from 'next/dynamic'
import { projectsData } from './utils/data'
import Link from 'next/link'
const Image = dynamic(() => import('next/image'))

const Projects = () => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projectsData?.map(project => (
                <Link href={`/projects/${project.name}`} className="flex flex-col gap-5 cursor-pointer" key={project.title}>
                    <Image src={project.imageUrl} alt={project.description} className="rounded-xl" objectFit="contain" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-[16px] leading-[1.5em] tracking-[-0.01em] font-medium">{project.title}</h3>
                        <span className="text-[14px] leading-[1.8em] tracking-[0em] dark:text-white/60">{project.property}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Projects
