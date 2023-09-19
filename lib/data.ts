import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { SiNextdotjs } from 'react-icons/si'
import { LuGraduationCap } from 'react-icons/lu'
import devcoinImg from '@/public/logo-devcoin.jpg'
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
        title: 'Full-stack in JavaScript Bootcamp',
        location: 'Buenos Aires, AR',
        description: 'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
        icon: React.createElement(LuGraduationCap),
        date: '2022 - 2023',
    },
    {
        title: 'Front-end Developer',
        location: 'CABA, AR',
        description:
            "I'm now a front-end developer. My stack includes React, Next.js, TypeScript, Sass, SEO.",
        icon: React.createElement(SiNextdotjs),
        date: '2023 - Present',
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
        tags: ['React', 'Next 13', 'TypeScript', 'Tailwind'],
        imageUrl: portfolioImg,
    },
] as const

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Git',
    'Tailwind',
    'MongoDB',
    'Redux',
    'Express',
    'Python',
] as const
