'use client';

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
        <motion.section
            className='flex justify-center items-center min-h-screen'
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
        >
            <div className='container mx-auto flex flex-col xl:flex-row items-center gap-[30px]'>
                {/* Form */}
                <div className='xl:w-[54%] order-2 xl:order-1'>
                    <form className='flex flex-col gap-6 p-10 bg-[#2A2A33] rounded-xl'>
                        <h3 className='text-4xl text-accent'>
                            Let&apos;s work together
                        </h3>
                        <p className='text-white/80'>
                            I&apos;m excited to collaborate with you on your next project. Fill out the form below, and let&apos;s start building something amazing together.
                        </p>
                        {/* Input fields */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input type='text' placeholder='First Name' required />
                            <Input type='text' placeholder='Last Name' required />
                            <Input type='email' placeholder='Email Address' required />
                            <Input type='tel' placeholder='Phone Number' required />
                        </div>
                        {/* Textarea */}
                        <Textarea
                            className='h-[200px]'
                            placeholder='Type your message here'
                            required
                        />
                        {/* Button */}
                        <Button size='md' className='max-w-40'>
                            Send message
                        </Button>
                    </form>
                </div>

                {/* Info */}
                <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-2 mb-8 xl:mb-0'>
                    <ul className='flex flex-col gap-10'>
                        {info.map((item, index) => {
                            return (
                                <li key={index} className='flex items-center gap-6'>
                                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2A2A33] text-accent rounded-md flex items-center justify-center'>
                                        <div className='text-[28px]'>{item.icon}</div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white/80'>{item.title}</p>
                                        <h3 className='text-xl'>{item.description}</h3>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
