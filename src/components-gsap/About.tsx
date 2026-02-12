'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import LogoCarousel from './LogoCarousel';
import StarBorder from '../components/StarBorder';
import StarBorderSustitute from '../components/StarBorderSustitute';

gsap.registerPlugin(SplitText);

const About = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!titleRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const split = new SplitText(titleRef.current!, { type: 'chars' });

                        gsap.from(split.chars, {
                            duration: 0.8,
                            opacity: 0,
                            y: -20,
                            stagger: 0.05,
                            ease: 'power2.out'
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(titleRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <section className="panel h-dvh relative snap-start" id="about">

                {/* <div className='shape absolute w-full h-[60vh] left-0 right-0 rotate-180'></div> */}
                <div className="relative z-20 h-full w-full flex flex-col justify-start">
                    <div className='h-40 sm:h-40 md:h-48 lg:h-70 flex flex-col justify-center text-center items-center z-20 pt-20 sm:pt-24 md:pt-28 px-4 gap-1'>
                        <h4 ref={titleRef} className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-70'>
                            About me</h4>
                        <span className="text-black dark:text-white font-google font-bold text-base sm:text-xl cursor-default min-w-70">
                            Brief reasons why i'm the best option to work with you.
                        </span>
                    </div>
                    <div className="flex-1 relative z-20 flex flex-col">
                        <section className="relative z-30 py-4 sm:py-8 h-full flex flex-col justify-start md:justify-around items-center text-center">
                            <div className='flex flex-col md:flex-row gap-4 md:gap-12 lg:px-12 sm:px-4 max-w-[80%] lg:max-w-[90%]'>
                                <p className='text-sm sm:text-base lg:text-lg 2xl:text-xl text-black dark:text-white text-center md:text-left'>
                                    Hi, I'm a software developer specializing in building dynamic web and mobile applications that solve real-world problems. With expertise in JavaScript, React, Flutter, Java, and Node.js, I craft responsive, user-friendly interfaces and robust backend solutions. My experience spans from creating interactive landing pages to developing RESTful APIs and cross-platform mobile apps.
                                </p>
                                <p className='hidden sm:flex text-base lg:text-lg 2xl:text-xl text-black dark:text-white text-center md:text-left'>
                                    I prioritize code quality through rigorous testing with Jest, ensuring reliability and performance. Whether you need a modern web app, a native-feeling mobile application, API integration, or custom software solutions, I bring technical skills and creative problem-solving to every project. Let's collaborate to turn your ideas into digital reality!
                                </p>
                            </div>
                            <div className='flex flex-row my-4 gap-2 sm:gap-4 md:gap-12 lg:gap-24 justify-center items-center overflow-visible z-30'>
                                <StarBorderSustitute textSize='text-sm' width='w-28 xs:w-32 sm:w-36 md:w-40 lg:w-48' height='h-12'>
                                    Contact me
                                </StarBorderSustitute>
                                <StarBorder textSize='text-sm' width='w-28 xs:w-32 sm:w-36 md:w-40 lg:w-48' height='h-12'>
                                    Discover more
                                </StarBorder>
                            </div>
                            <div className='relative w-full mt-4'>
                                <div className='relative z-30 flex flex-col gap-0'>
                                    <LogoCarousel direction="ltr" />
                                    <LogoCarousel direction="rtl" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='shape-variant absolute w-full h-[33%] left-0 right-0 bottom-0 rotate-0 z-0' />

            </section>
        </>
    )
}

export default About