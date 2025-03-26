'use client';

import React, { useState } from 'react';
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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setResponseMessage('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            setResponseMessage('Error sending message.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <form
                        className='flex flex-col gap-6 p-10 bg-[#2A2A33] rounded-xl'
                        onSubmit={handleSubmit}
                    >
                        <h3 className='text-4xl text-accent'>
                            Let&apos;s work together
                        </h3>
                        <p className='text-white/80'>
                            I&apos;m excited to collaborate with you on your next project. Fill out the form below, and let&apos;s start building something amazing together.
                        </p>
                        {/* Input fields */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input
                                type='text'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder='First Name'
                                required
                            />
                            <Input
                                type='text'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder='Last Name'
                                required
                            />
                            <Input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email Address'
                                required
                            />
                            <Input
                                type='tel'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Phone Number'
                                required
                            />
                        </div>
                        {/* Textarea */}
                        <Textarea
                            className='h-[200px]'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Type your message here'
                            required
                        />
                        {/* Button */}
                        <Button size='md' className='max-w-40' disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send message'}
                        </Button>

                        {responseMessage && (
                            <p className='text-white/80 mt-4'>{responseMessage}</p>
                        )}
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
