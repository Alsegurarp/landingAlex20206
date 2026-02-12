'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import CardsMovibles2 from './CardMovibles2';

gsap.registerPlugin(SplitText);


const cardData: [CardData, CardData] = [
    {
        title: 'Full-Stack & Mobile Expertise',
        description: 'I build web apps with React/Node.js and cross-platform mobile apps with Flutter, giving you complete solutions across all platforms.',
        buttonText: '1',
        buttonLink: 'https://www.youtube.com/',
    },
    {
        title: 'Quality-Driven Development',
        description: 'I use Jest testing to ensure your software is reliable, maintainable, and bug-free from day one.',
        buttonText: '2',
        buttonLink: 'https://www.youtube.com/',
    },
];

const cardData2: [CardData, CardData] = [
    {
        title: 'Cross-Platform Efficiency',
        description: 'One developer who delivers both web and mobile solutions means faster development and consistent quality across your products.',
        buttonText: '3',
        buttonLink: 'https://www.youtube.com/',
    },
    {
        title: 'Modern Tech Stack',
        description: 'JavaScript, React, Flutter, Java, Node.js—I use industry-standard technologies that scale with your business growth.',
        buttonText: '4',
        buttonLink: 'https://www.youtube.com/',
    },
];

interface CardData {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function WhyUs() {
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
        <section className='flex flex-col panel h-dvh relative snap-start w-full top-0 lg:overflow-hidden' id='why'>
            {/* Header Section */}
            <div className='flex flex-col justify-center items-center z-20 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-10 px-4'>
                <h4 ref={titleRef} className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-70'>
                    Why to hire me?
                </h4>
                <span className="text-black dark:text-white font-google text-sm sm:text-lg md:text-xl cursor-default mt-2 sm:mt-3">
                    More reasons to work with me
                </span>
            </div>

            {/* Cards Section */}
            <div className='flex-1 flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-12 lg:px-18 2xl:px-24 gap-2 sm:gap-3 md:gap-2 overflow-y-auto pb-4'>
                <CardsMovibles2 cards={cardData} instanceId="set1" />
                <CardsMovibles2 cards={cardData2} instanceId="set2" />
            </div>
        </section>
    );
}

