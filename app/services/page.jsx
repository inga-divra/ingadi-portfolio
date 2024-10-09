'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        num: '01',
        title: 'React & Next.js Development',
        description:
            'Building dynamic, responsive web applications with modern JavaScript frameworks.',
        href: '',
    },
    {
        num: '02',
        title: 'WordPress Development',
        description:
            'Creating and customizing WordPress websites for small businesses and individuals.',
        href: '',
    },
    {
        num: '03',
        title: 'E-commerce Solutions',
        description:
            'Developing e-commerce websites with features like product listings, shopping carts, and payment integration.',
        href: '',
    },
    {
        num: '04',
        title: 'UI/UX Design Assistance',
        description:
            'Assisting with designing user-friendly interfaces and improving the user experience for websites and applications.',
        href: '',
    },
];

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 mb-12 xl:py-0'>
            <div className='container mx-auto'>
                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
                    }}
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                className='flex-1 flex flex-col justify-between gap-6 group h-full'
                                key={index}
                            >
                                {/* Top */}
                                <div className='w-full flex justify-between items-center'>
                                    <div
                                        className='text-5xl font-extrabold text-outline text-transparent 
                                        group-hover:text-outline-hover transition-all duration-500'
                                    >
                                        {service.num}
                                    </div>
                                    <Link
                                        className='w-[70px] h-[70px] rounded-full bg-[#E7DAF5] group-hover:bg-accent 
                                        transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                                        href={service.href}
                                    >
                                        <BsArrowDownRight className='text-primary text-3xl' />
                                    </Link>
                                </div>
                                {/* Content Wrapper */}
                                <div className='flex-1 flex flex-col justify-between'>
                                    {/* Title */}
                                    <h2 className='text-[42px] font-bold leading-none mb-3 group-hover:text-accent transition-all duration-500'>
                                        {service.title}
                                    </h2>
                                    {/* Description */}
                                    <p className='text-white/80'>{service.description}</p>
                                </div>
                                {/* Border */}
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
