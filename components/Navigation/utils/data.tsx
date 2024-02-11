import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { PiBriefcase } from 'react-icons/pi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const links = [
    {
        path: '/',
        label: 'Home',
        icon: <BiHomeAlt size="22" />,
    },
    {
        path: '/projects',
        label: 'Projects',
        icon: <PiBriefcase size="22" />,
    },
    {
        path: '/about',
        label: 'About me',
        icon: <FiUser size="22" />,
    },
    {
        path: '/contact',
        label: 'Contact',
        icon: <MdOutlineMailOutline size="22" />,
    },
]

export const linksSocial = [
    {
        path: 'https://github.com/lucaspereyradev',
        icon: <FaGithub size="22" />,
    },
    {
        path: 'https://www.linkedin.com/in/lucaspereyradev/?locale=en_US',
        icon: <FaLinkedin size="22" />,
    },
]