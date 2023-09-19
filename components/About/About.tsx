'use client'
import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView('About')

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I am passionate about development, a self-taught individual and a technology enthusiast. I love finding creative solutions to problems
                and get excited to work on challenging projects that allow me to apply my skills and knowledge. As a developer, I enjoy working as
                part of a team to create amazing products that improve people&apos;s lives, while constantly seeking out opportunities to learn something
                new and improve my skills. I am excited for the opportunities that the future holds for me!
            </p>

            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games and watching movies or series. I
                also enjoy <span className="font-medium">learning new things</span>.
            </p>
        </motion.section>
    )
}
