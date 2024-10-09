'use client'

import CountUp from 'react-countup';

const stats = [
    {
        num: 24,
        text: 'Months of Experience',
    },
    {
        num: 5,
        text: 'Technologies Studied',
    },
    {
        num: 10,
        text: 'Projects Built',
    },
    {
        num: 300,
        text: 'Commits Made',
    },
];
const Stats = () => {
    return <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => {
                    return <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index}>
                        <CountUp
                            className='text-4xl xl:text-6xl font-extrabold'
                            end={item.num}
                            duration={5}
                            delay={2} />
                        <p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                            } leading-snug text-white/80`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Stats
