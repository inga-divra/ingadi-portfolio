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

// about data
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



const Resume = () => {
    return (
        <div>
            Resume page
        </div>
    )
}

export default Resume
