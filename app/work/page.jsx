'use client'

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'E-Commerce App',
        description:
            'A responsive e-commerce platform built with Next.js and TypeScript, offering a smooth shopping experience and dynamic product listings.',
        stack: [
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
        ],
        image: '/assets/work/thumb1.png',
        live: 'https://ingady-ecommerce.com',
        github: 'https://github.com/inga-divra/nextjs-store-project',
    },

    {
        num: '02',
        category: 'fullstack',
        title: 'Personal Portfolio',
        description:
            'Built using React and Next.js, this is my personal portfolio showcasing my skills, projects, and resume in a dynamic way.',
        stack: [{ name: 'React.js' }, { name: 'Next.js' }, { name: 'Tailwind CSS' }],
        image: '/assets/work/thumb2.png',
        live: 'https://ingadi-portfolio.vercel.app/',
        github: 'https://github.com/inga-divra/ingadi-portfolio',
    },
    {
        num: '03',
        category: 'frontend',
        title: 'Pyrymedia Oy',
        description:
            'A website for a media production company in Helsinki, built using WordPress and designed to showcase their services.',
        stack: [{ name: 'WordPress' }, { name: 'CSS' }, { name: 'Elementor' }],
        image: '/assets/work/thumb3.png',
        live: 'https://pyrymedia.fi',
        github: '',
    },
    {
        num: '04',
        category: 'frontend',
        title: 'Klever Art Website',
        description:
            'A custom WordPress site for Klever Art, featuring a responsive design and gallery showcasing botanical bas-relief art.',
        stack: [{ name: 'WordPress' }, { name: 'Elementor' }, { name: 'CSS' }],
        image: '/assets/work/thumb1.png',
        live: 'https://klever-art.com',
        github: '',
    },

    {
        num: '05',
        category: 'frontend',
        title: 'Massage Therapist Website',
        description:
            'A custom WordPress site built for a massage therapist, providing information about services and booking options.',
        stack: [{ name: 'WordPress' }, { name: 'CSS' }, { name: 'HTML' }],
        image: '/assets/work/thumb2.png',
        live: 'https://hemmotteluhuone.fi',
        github: '',
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0])
    return (
        <motion.div>
            <div className='container mx-auto'>works</div>
        </motion.div>
    )
}

export default Work
