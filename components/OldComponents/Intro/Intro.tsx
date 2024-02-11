'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import photo from '@/public/pictureofme.png'

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section ref={ref} id="home" className="mb-28 max-w-[60rem] flex flex-col gap-8 text-center sm:mb-0 scroll-mt-[100rem]">
			<div className="flex flex-col items-center justify-center flex-1">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'tween',
						duration: 0.2,
					}}
					className="relative flex flex-1 justify-center"
				>
					<Image
						src={photo}
						alt="Ricardo portrait"
						width="250"
						height="250"
						quality="95"
						priority={true}
						className="h-[250px] w-[250px] rounded-full object-cover border-[0.40rem] border-white shadow-xl"
					/>
				</motion.div>

				<motion.h1
					className="mb-10 mt-4 px-4 text-4xl font-light !leading-[1.5] sm:text-4xl flex-1 text-center"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<span className="font-semibold text-6xl">Hi, I&apos;m Lucas!</span>
					<p>I&apos;m Frontend Developer.</p>
				</motion.h1>
			</div>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-opacity-80 hover:bg-gray-950 transition "
					onClick={() => {
						setActiveSection('Contact')
						setTimeOfLastClick(Date.now())
					}}
				>
					Contact me here <BsArrowRight className="opacity-70 transition" />
				</Link>

				<a
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none text-gray-700 hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
					href="/CV.pdf"
					download
				>
					Download CV <HiDownload className="opacity-60 transition" />
				</a>

				<div className='flex gap-4 items-center justify-center'>
					<a
						className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.25rem] max-sm:text-[1.5rem] rounded-full transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20 dark:hover:text-white"
						href="https://www.linkedin.com/in/lucaspereyradev/"
						target="_blank"
					>
						<BsLinkedin />
					</a>

					<a
						className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] max-sm:text-[1.65rem] rounded-full hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20 dark:hover:text-white"
						href="https://github.com/lucaspereyradev"
						target="_blank"
					>
						<FaGithubSquare />
					</a>
				</div>
			</motion.div>
		</section>
	)
}
