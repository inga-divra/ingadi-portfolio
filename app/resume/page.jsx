'use client';

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

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
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
        "I have experience in building and customizing WordPress websites for small businesses and providing responsive web solutions.",
    items: [
        {
            company: "Pyrymedia Oy",
            role: "Freelance WordPress Developer",
            duration: "2024 - Present",
        },
        {
            company: "Massage Therapist (Hierontaja)",
            role: "Freelance WordPress Developer",
            duration: "2024 - Present",
        },
        {
            company: "Klever Art",
            role: "Freelance WordPress Developer",
            duration: "2018 - Present",
        },
        {
            company: "Personal Portfolio",
            role: "React & Next.js Developer",
            duration: "2023 - 2024",
        },
    ],
};


// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
        "I have a diverse background in media, design, and IT, which has helped me transition into web development.",
    items: [
        {
            institution: "University of Helsinki (Open University)",
            degree: "Computer Science (Tietojenkäsittelytiede)",
            duration: "2023 - Present",
        },
        {
            institution: "Omnia Vocational School",
            degree: "Media and Visual Expression",
            duration: "2020 - 2023",
        },
        {
            institution: "Tallinn University",
            degree: "Bachelor's Degree in Advertising and Image",
            duration: "2004 - 2008",
        },
        {
            institution: "Various Online Courses (Fullstack Open, Next.js, React)",
            degree: "Web Development Courses",
            duration: "2022 - Present",
        },
    ],
};


const Resume = () => {
    return (
        <div>
            Resume page
        </div>
    )
}

export default Resume
