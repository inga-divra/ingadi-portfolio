import { Button } from "@/components/ui/button";
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center xl:justify-between xl:gap-12 xl:pt-8 xl:pb-24'>
          {/* HERO INFO */}
          <div className='text-center xl:text-left flex-1'>
            <span className='capitalize text-xl'>software developer</span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br /> <span className='capitalize text-accent'>inga divra</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I build responsive, efficient, and visually appealing web applications
              using modern technologies like React, Next.js, and Node.js.
              My focus is on delivering clean, user-friendly digital solutions that enhance user experiences.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Link href='/work'>
                <Button
                  variant='outline'
                  size='lg'
                  className='flex items-center gap-2'
                >
                  <span>See My Works</span>
                  <FiArrowRight className='text-xl' />
                </Button>
              </Link>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center 
              items-center text-accent text-base hover:bg-accent hover:text-primary 
              hover:transition-all duration-500' />
              </div>
            </div>
          </div>
          {/* HERO IMG */}
          <div className='flex-1 flex justify-center'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
