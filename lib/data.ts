import React from 'react'
import { DiCss3, DiGit, DiGithubBadge, DiHtml5, DiJavascript1, DiMongodb, DiMysql, DiPython, DiReact, DiSass } from 'react-icons/di'
import { SiNextdotjs, SiPostman } from 'react-icons/si'
import { BiLogoNodejs, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { LuGraduationCap } from 'react-icons/lu'
import devcoinImg from '@/public/logo-devcoin.png'
import weathermeImg from '@/public/logo-weatherme.png'
import portfolioImg from '@/public/logo-portfolio.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Frontend Developer',
		location: 'CABA, Buenos Aires, AR',
		description: "I'm now a Frontend developer. My stack includes React, Next.js, TypeScript, Sass, SEO.",
		icon: React.createElement(SiNextdotjs),
		date: '2023 - Present',
	},
	{
		title: 'Fullstack in JavaScript Bootcamp',
		location: 'Buenos Aires, AR',
		description: 'I graduated after 6 months of studying. I immediately found a job as a Frontend developer.',
		icon: React.createElement(LuGraduationCap),
		date: '2022 - 2023',
	},
	{
		title: 'Computer Technician',
		location: 'Mar del Plata, Buenos Aires, AR',
		description: 'I graduated after 7 years of studying in a Technical School.',
		icon: React.createElement(LuGraduationCap),
		date: '2015 - 2022',
	},
] as const

export const projectsData = [
	{
		title: 'DevCoin',
		description: 'I worked as a full-stack developer on this bootcamp project for 1 month. Users can give public feedback to companies.',
		tags: ['React', 'Node', 'MySql', 'Tailwind', 'API'],
		imageUrl: devcoinImg,
	},
	{
		title: 'WeatherMe',
		description: 'I worked on a friends project for 1 month. I was the front-end developer. It has features like searching.',
		tags: ['React', 'Tailwind', 'API'],
		imageUrl: weathermeImg,
	},
	{
		title: 'Portfolio',
		description: 'My personal and profesional portfolio.',
		tags: ['Next 13', 'TypeScript', 'Tailwind'],
		imageUrl: portfolioImg,
	},
] as const

export const skillsData = [
	{
		label: 'HTML',
		icon: React.createElement(DiHtml5, { size: 56 }),
	},
	{
		label: 'CSS',
		icon: React.createElement(DiCss3, { size: 56 }),
	},
	{
		label: 'JavaScript',
		icon: React.createElement(DiJavascript1, { size: 56 }),
	},
	{
		label: 'TypeScript',
		icon: React.createElement(BiLogoTypescript, { size: 56 }),
	},
	{
		label: 'React.js',
		icon: React.createElement(DiReact, { size: 56 }),
	},
	{
		label: 'Next.js',
		icon: React.createElement(SiNextdotjs, { size: 56 }),
	},
	{
		label: 'Node.js',
		icon: React.createElement(BiLogoNodejs, { size: 56 }),
	},
	{
		label: 'Python',
		icon: React.createElement(DiPython, { size: 56 }),
	},
	{
		label: 'MongoDB',
		icon: React.createElement(DiMongodb, { size: 56 }),
	},
	{
		label: 'MySQL',
		icon: React.createElement(DiMysql, { size: 56 }),
	},
	{
		label: 'Postman',
		icon: React.createElement(SiPostman, { size: 56 }),
	},
	{
		label: 'Git',
		icon: React.createElement(DiGit, { size: 56 }),
	},
	{
		label: 'GitHub',
		icon: React.createElement(DiGithubBadge, { size: 56 }),
	},
	{
		label: 'SASS',
		icon: React.createElement(DiSass, { size: 56 }),
	},
	{
		label: 'TailwindCSS',
		icon: React.createElement(BiLogoTailwindCss, { size: 56 }),
	},
] as const
