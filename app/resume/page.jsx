'use client';

// External libraries
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiWordpress } from 'react-icons/si';
import { motion } from 'framer-motion';

// Custom components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

// about me data
export const about = {
    title: 'About Me',
    description:
        'I am a passionate developer focused on building responsive, dynamic web applications using modern JavaScript frameworks and technologies.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Inga Divra',
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+358) 44 959 7074',
        },
        {
            fieldName: 'Experience',
            fieldValue: '2+ Years',
        },
        {
            fieldName: 'Email',
            fieldValue: 'inga.divra@gmail.com',
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available',
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English, Finnish, Russian, Estonian',
        },
    ],
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description:
        'I have experience in building and customizing WordPress websites for small businesses and providing responsive web solutions.',
    items: [
        {
            company: 'Pyrymedia Oy (Media Production Company in Helsinki)',
            role: 'Freelance WordPress Developer',
            duration: '2024 - Present',
        },
        {
            company: 'Massage Therapist (Hierontaja)',
            role: 'Freelance WordPress Developer',
            duration: '2024 - Present',
        },
        {
            company: 'Klever Art',
            role: 'Freelance WordPress Developer',
            duration: '2018 - Present',
        },
        {
            company: 'Personal Portfolio',
            role: 'React & Next.js Developer',
            duration: '2023 - 2024',
        },
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description:
        'I have a diverse background in media, design, and IT, which has helped me transition into web development.',
    items: [
        {
            institution: 'University of Helsinki (Open University)',
            degree: 'Computer Science (Tietojenkäsittelytiede)',
            duration: '2023 - Present',
        },
        {
            institution: 'Omnia Vocational College',
            degree: 'Media and Visual Expression',
            duration: '2020 - 2023',
        },
        {
            institution: 'Tallinn University',
            degree: "Bachelor's Degree in Advertising and Image",
            duration: '2004 - 2008',
        },
        {
            institution: 'Various Online Courses (Fullstack Open, Next.js, React)',
            degree: 'Web Development Courses',
            duration: '2022 - Present',
        },
    ],
};

// skills data
const skills = {
    title: 'My Skills',
    description:
        'I am proficient in various web development technologies, focusing on building dynamic and responsive applications.',
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
            icon: <FaReact />,
            name: 'React.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
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
            icon: <SiWordpress />,
            name: 'WordPress',
        },
        {
            icon: <FaFigma />,
            name: 'Figma',
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
            <div className='container mx-auto'>
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
                            experience
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
