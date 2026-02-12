'use client';

import { motion } from 'framer-motion';
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";


interface LogoCarouselProps {
    direction?: 'ltr' | 'rtl';
}

function LogoCarousel({ direction = 'rtl' }: LogoCarouselProps) {

    const logos = [
        <FaHtml5 className='text-4xl' />,
        <IoLogoJavascript className='text-4xl' />,
        <FaJava className='text-4xl' />,
        <TbBrandCSharp className='text-4xl' />,
        <RiTailwindCssFill className='text-4xl' />,
        <RiNextjsFill className='text-4xl' />,
        <FaFlutter className='text-4xl' />,
        <DiNodejs className='text-4xl' />,
        <SiTypescript className='text-4xl' />,
        <FaReact className='text-4xl' />,
    ]

    const extendedLogos = [...logos, ...logos, ...logos]

    const xAnimation = direction === 'ltr' ? '33.33%' : '-33.33%';

    return (
        <div className="container-full overflow-visible cursor-pointer py-2 flex justify-center z-20">
            <motion.div
                className="flex"
                style={{
                    zIndex: 20,
                    width: 'max-content',
                    display: 'flex',
                    gap: 'clamp(2rem, 8vw, 4rem)',
                }}
                initial={{ x: 0 }}
                animate={{ x: xAnimation }}
                transition={{
                    x: {
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }
                }}>
                {extendedLogos.map((item, index) => (
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 flex items-center justify-center object-contain shrink-0 z-20" key={index}>
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default LogoCarousel

