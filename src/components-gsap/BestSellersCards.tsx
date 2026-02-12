import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { bestSellersCards } from '../lib/BestSellersData';

gsap.registerPlugin(SplitText);

interface BestSellersCardsProps {
    cards?: CardData[];
    title?: string;
    subtitle?: string;
}

interface CardData {
    title: string;
    subtitulo?: string;
    category?: string;
    description: string;
    src?: string | { src: string };
    image?: string;
    link?: string;
    slug?: string | undefined;
}

const BestSellersCards = ({ cards: customCards, title = 'Best sellers', subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }: BestSellersCardsProps) => {
    const cardsToUse = customCards || bestSellersCards;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        if (!textRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const split = new SplitText(textRef.current!, { type: 'chars' });

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

        observer.observe(textRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handlePrevClick = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const handleNextClick = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };



    return (
        <>
            <section className="flex flex-col panel h-dvh relative snap-start w-full top-0 overflow-hidden">
                <div className="h-24 sm:h-28 md:h-32 flex flex-col justify-center text-center items-center z-20 pt-6 sm:pt-8 md:pt-10 px-4 flex-shrink-0 mt-12">
                    <h4 ref={textRef} className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-70' id='projects'>{title}</h4>
                    <span className="text-black dark:text-white font-google text-xs sm:text-sm md:text-base cursor-default mt-0.5 sm:mt-1 font-bold">
                        {subtitle}
                    </span>
                </div>

                {/* Navigation Buttons */}
                <div className="hidden md:flex absolute bottom-142 left-1/10 transform -translate-x-1/2 gap-2 z-30">
                    <button
                        onClick={handlePrevClick}
                        className="w-12 h-12 rounded-full bg-white dark:bg-black/40 dark:backdrop-blur-xl border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-black/60 transition-colors"
                        aria-label="Previous"
                    >
                        <FaChevronLeft className="text-black dark:text-white" />
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="w-12 h-12 rounded-full bg-white dark:bg-black/40 dark:backdrop-blur-xl border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-black/60 transition-colors"
                        aria-label="Next"
                    >
                        <FaChevronRight className="text-black dark:text-white" />
                    </button>
                </div>

                <div
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className='flex-1 flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-start justify-start overflow-x-auto overflow-y-hidden w-full lg:w-9/10 lg:mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 cursor-grab select-none py-3 sm:py-4 md:py-6'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: '-ms-autohiding-scrollbar' }}
                >
                    {
                        cardsToUse.map((card, index) => {
                            // Handle both bestSellersCards format and itinerary cards format
                            const extendedCard = card as CardData & { category?: string; slug?: string };
                            const cardData = {
                                title: card.title,
                                subtitulo: card.subtitulo || extendedCard.category || '',
                                description: card.description,
                                src: card.src || '',
                                link: card.link || (extendedCard.slug ? `/itinerarios/${extendedCard.slug}` : '#'),
                            };
                            return <div key={index} className="w-56 xs:w-64 sm:w-72 md:w-80 lg:w-84 shrink-0"><Card index={index} {...cardData} /></div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default BestSellersCards;


interface CardProps {
    title: string;
    subtitulo: string;
    description: string;
    src: string | { src: string };
    link: string;
    index: number;
}
// title, subtitulo, description, src, link, color

function Card({ title, subtitulo, description, src, link }: CardProps) {
    const imageSrc = typeof src === 'string' ? src : (src as CardData & { src: string })?.src || '';

    return (
        <div className={`flex flex-col relative shrink-0 aspect-260/420 md:aspect-260/360 w-full rounded-2xl origin-top shadow-[4px_4px_4px_2px_rgba(0,0,0,0.1)] cursor-default select-none z-20 h-full`}>
            {/* Image Section - 60% of card height */}
            <div className="flex flex-[0.6] items-start justify-center rounded-t-2xl shrink-0 overflow-hidden relative">
                <div className="w-full h-full rounded-t-2xl bg-gray-200 flex items-center justify-center text-gray-500 relative">
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className="w-full h-full object-cover rounded-t-2xl" 
                    />
                </div>
            </div>

            {/* Content Section - 40% of card height */}
            <div className="w-full relative flex flex-col flex-[0.4] px-3 py-2 sm:py-3 text-start overflow-hidden bg-white dark:bg-primary-600/20 rounded-b-2xl">
                {/* Header with title and button */}
                <div className='flex flex-row justify-around gap-1.5 shrink-0 mb-1'>
                    <div className='flex flex-row flex-1 text-center align-center justify-between'>
                        <span className="m-0 text-xs sm:text-sm md:text-md font-semibold cursor-default select-none line-clamp-2 dark:text-primary-400">{title}</span>
                    </div>
                </div>

                {/* Description - Flexible with remaining space */}
                <div className="flex-1 flex flex-col gap-1 min-h-0 justify-between mb-2">
                    <p className="text-xs sm:text-sm leading-tight text-gray-800 dark:text-white line-clamp-4 sm:line-clamp-5">
                        <span className="first-letter:font-semibold cursor-default select-none">
                            {description}
                        </span>
                    </p>
                    <p className="m-0 text-xs text-gray-500 dark:text-white cursor-default select-none">{subtitulo}</p>
                    <div className="">
                        <button 
                            onClick={() => window.location.href = link}
                            className="relative w-full h-6 bg-black hover:bg-black/90 hover:scale-95 dark:bg-white dark:hover:bg-white/90 py-4 px-1 rounded-full text-white dark:text-black text-sm font-medium transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                        >
                            Take a look
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

