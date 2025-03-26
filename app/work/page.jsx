'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import Link from 'next/link'
import Image from 'next/image'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import WorkSliderBtns from '@/components/WorkSliderBtns'


const projects = [
    {
        num: '01',
        category: 'fullstack',
        title: 'E-Commerce App',
        description:
            'A responsive e-commerce platform built with Next.js and TypeScript, offering a smooth shopping experience and dynamic product listings.',
        stack: [
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind' },
            { name: 'Prisma' },
            { name: 'Database' }
        ],
        image: '/assets/work/thumb1.png',
        live: 'https://nextjs-store-project-one.vercel.app/',
        github: 'https://github.com/inga-divra/nextjs-store-project',
    },
    {
        num: '02',
        category: 'frontend',
        title: 'Personal Portfolio',
        description:
            'An engaging and interactive personal portfolio developed with React and Next.js, highlighting my skills, projects, and resume in a modern and dynamic format.',
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

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    {/* PROJECT INFO */}
                    <div className='w-full xl:w-[50%] xl:min-h-[460px] flex-grow flex flex-col xl:justify-between order-2 xl:order-1'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className='text-[42px] font-bold leading-none group-hover:text-accent 
                        transition-all duration-500 capitalize'>
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className='text-white/80'>
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return <li
                                        className='text-xl text-accent'
                                        key={index}>
                                        {item.name}
                                        {/* remove the last comma */}
                                        {index !== project.stack.length - 1 && ','}
                                    </li>
                                })}
                            </ul>
                            {/* border */}
                            <div className='border border-white/20'></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* Live project btn */}
                                <Link href={project.live} target='_blank' rel='noopener noreferrer'  >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent className='bg-[#E7DAF5] text-[#2A2A33] p-2 rounded-md shadow-md'>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Github project btn */}
                                <Link href={project.github} target='_blank' rel='noopener noreferrer'  >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent className='bg-[#E7DAF5] text-[#2A2A33] p-2 rounded-md shadow-md'>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* SLIDER */}
                    <div className='w-full xl:w-[50%] order-1 xl:order-2'>
                        <Swiper
                            className='xl:h-[520px] mb-12'
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className='h-[460px]  relative group flex justify-center items-center bg-pink-50/20'>
                                        {/* overlay */}
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-primary/25 z-10'></div>
                                        {/* image */}
                                        <div className='relative w-full h-full'>
                                            <Image
                                                src={project.image}
                                                fill
                                                className='object-cover'
                                                alt={project.title}
                                                quality={100}
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* Slider btns */}
                            <WorkSliderBtns
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Work
