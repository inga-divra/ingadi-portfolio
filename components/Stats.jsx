'use client'

import CountUp from 'react-countup';

const stats = [
    {
        num: 3,
        suffix: '+',
        text: 'Years of Coding',
    },
    {
        num: 3,
        text: 'Client Websites Delivered',
    },
    {
        num: 54,
        text: 'GitHub Repositories',
    },
    {
        num: 1200,
        suffix: '+',
        separator: ',',
        text: 'Commits Pushed',
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
                            suffix={item.suffix ?? ''}
                            separator={item.separator ?? ''}
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
