'use client';

// External libraries
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
    SiTailwindcss,
    SiNextdotjs,
    SiWordpress,
    SiTypescript,
    SiElementor,
    SiFramer,
    SiRedux,
    SiExpress,
    SiGraphql,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiDocker,
    SiJest,
    SiGutenberg,
} from 'react-icons/si';
import { TbBrandReactNative, TbForms } from 'react-icons/tb';
import { motion } from 'framer-motion';

// Custom components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

// about me data
export const about = {
    title: 'About Me',
    description:
        'I design and build websites: WordPress sites for real clients, and applications with React and Next.js. My background in media and advertising shapes how I work — typography, spacing and hierarchy are part of the build, not decoration added at the end. I have been writing code almost every day since 2022, and I am currently studying Computer Science at the University of Helsinki, which keeps the technical side growing alongside the visual one.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Inga Divra',
        },
        {
            fieldName: 'Experience',
            fieldValue: '3+ Years',
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+358) 44 959 7074',
        },
        {
            fieldName: 'Email',
            fieldValue: 'inga.divra@gmail.com',
        },
        {
            fieldName: 'Location',
            fieldValue: 'Helsinki, Finland',
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Eng, Fin, Rus, Est',
        },
        {
            fieldName: 'Status',
            fieldValue: 'Open to work',
        },
    ],
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description:
        'I have built WordPress sites for real clients from the first conversation through to launch, and I design and develop interfaces with React and Next.js. Everything I have built since 2022 is documented publicly on GitHub.',
    items: [
        {
            company: 'Oh My Cut Productions Oy, Helsinki',
            role: 'Freelance Web Developer — WordPress',
            duration: '2025',
        },
        {
            company: 'Hemmotteluhuone Kuopio',
            role: 'Freelance Web Developer — WordPress',
            duration: '2024',
        },
        {
            company: 'Klever Art, Espoo',
            role: 'Freelance Web Developer — WordPress',
            duration: '2024',
        },
        {
            company: '54 repositories, 1,200+ commits',
            role: 'Self-Directed Development',
            duration: '2022 - Present',
        },
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description:
        'I am studying Computer Science at the University of Helsinki, with an earlier background in media, visual expression and advertising. Alongside the degree I take practical courses that go straight into the work I build.',
    items: [
        {
            institution: 'University of Helsinki',
            degree: 'Bachelor of Science in Computer Science',
            duration: '2025 - 2028 (2nd year)',
        },
        {
            institution: 'University of Helsinki',
            degree: 'Full Stack Open — completed in full',
            duration: '2024 - 2025',
        },
        {
            institution: 'University of Helsinki',
            degree: 'DevOps with Docker',
            duration: '2026',
        },
        {
            institution: 'Omnia Vocational College',
            degree: 'Media and Visual Expression',
            duration: '2020 - 2024',
        },
        {
            institution: 'Tallinn University',
            degree: "Bachelor's Degree in Advertising and Image",
            duration: '2004 - 2008',
        },
    ],
};

// skills data
const skills = {
    title: 'My Skills',
    description:
        'I work across the whole build: WordPress and design tools on one side, React, Next.js and Node.js on the other.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'HTML 5',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <SiTypescript />,
            name: 'TypeScript',
        },
        {
            icon: <SiWordpress />,
            name: 'WordPress',
        },
        {
            icon: <SiGutenberg />,
            name: 'Gutenberg',
        },
        {
            icon: <TbForms />,
            name: 'ACF',
        },
        {
            icon: <SiElementor />,
            name: 'Elementor',
        },
        {
            icon: <FaFigma />,
            name: 'Figma',
        },
        {
            icon: <SiFramer />,
            name: 'Framer',
        },
        {
            icon: <FaReact />,
            name: 'React.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
        },
        {
            icon: <TbBrandReactNative />,
            name: 'React Native',
        },
        {
            icon: <SiRedux />,
            name: 'Redux',
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
        },
        {
            icon: <FaNodeJs />,
            name: 'Node.js',
        },
        {
            icon: <SiExpress />,
            name: 'Express',
        },
        {
            icon: <SiGraphql />,
            name: 'GraphQL',
        },
        {
            icon: <SiMongodb />,
            name: 'MongoDB',
        },
        {
            icon: <SiPostgresql />,
            name: 'PostgreSQL',
        },
        {
            icon: <SiPrisma />,
            name: 'Prisma',
        },
        {
            icon: <SiDocker />,
            name: 'Docker',
        },
        {
            icon: <FaGitAlt />,
            name: 'Git',
        },
        {
            icon: <SiJest />,
            name: 'Jest',
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}

        >
            <div className='container mx-auto py-12'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return <li
                                                className='bg-[#2A2A33] h-[184px] py-6 px-10 rounded-xl 
                                                flex flex-col justify-center items-center lg:items-start gap-1'
                                                key={index}>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.role}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/80'>
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return <li
                                                className='bg-[#2A2A33] h-[184px] py-6 px-10 rounded-xl 
                                                flex flex-col justify-center items-center lg:items-start gap-1'
                                                key={index}>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/80'>
                                                        {item.institution}
                                                    </p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>
                                        {skills.title}
                                    </h3>
                                    <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#2A2A33] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className='bg-[#E7DAF5] text-[#2A2A33] p-2 rounded-md shadow-md'>
                                                        <p className='capitalize '>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return <li
                                            className='flex items-center justify-center xl:justify-start gap-4'
                                            key={index}>
                                            <span className='text-white/80'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
