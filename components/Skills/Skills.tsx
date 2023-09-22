'use client'
import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion, useAnimation } from 'framer-motion'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
}

export default function Skills() {
	const { ref } = useSectionInView('Skills')
	const controls = useAnimation()

	const handleHover = async () => {
		await controls.start({ opacity: 1 })
	}

	const handleHoverExit = async () => {
		await controls.start({ opacity: 0 })
	}

	return (
		<section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
			<SectionHeading>My skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="relative group bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						onHoverStart={handleHover}
						onHoverEnd={handleHoverExit}
						custom={index}
					>
						{skill.icon}
						<motion.div
							className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white px-2 py-1 rounded-md text-sm z-10"
							initial={{ opacity: 0, y: 8 }}
							animate={controls}
							exit={{ opacity: 0, y: 8 }}
							transition={{ duration: 0.3 }}
						>
							{skill.label}
						</motion.div>
					</motion.li>
				))}
			</ul>
		</section>
	)
}
