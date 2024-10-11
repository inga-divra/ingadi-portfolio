'use client';

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+358) 44 959 7074',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'inga.divra@gmail.com',
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Helsinki, Finland',
    },
];

const Contact = () => {
    return (
        <div>
            Contact page
        </div>
    );
};

export default Contact;
