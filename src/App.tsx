'use client';

import { FaGithub, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/utils/CustomCursor';

import Usage from './components/Navbar/Usage';
import TopHero from './components-gsap/TopHero';
import About from './components-gsap/About';
import BestSellersCards from './components-gsap/BestSellersCards';
import Footer from './components-gsap/Footer';
import WhyUs from './components-gsap/WhyUs';
import DarkModeButton from './components/utils/DarkModeButton';

// import { getAllItineraries } from './lib/itinerariesData';
import { bestSellersCards } from './lib/BestSellersData';


function App() {
    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(() => {

        ScrollTrigger.defaults({
            scroller: ".wrapper",
        })

        gsap.utils.toArray(".panel").forEach((panel, index) => {
            gsap.to(`.bullet-${index + 1}`, {
                background: "#298eb1",
                scrollTrigger: {
                    toggleActions: 'play reverse play reverse',
                    trigger: panel as gsap.DOMTarget,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    // markers: true,
                }
            });
        });
    });


    return (
        <>
            <div className='fixed h-[70vh] bottom-0 w-24 hidden lg:flex flex-col justify-between p-10 items-center z-40'>
                <div className='flex items-center -rotate-90 gap-8'>
                    <p>Alsegurarp</p>
                    <div className='w-20 h-0.5 bg-black/50 dark:bg-white '></div>
                    <p>Mex</p>
                </div>
                <div className='space-y-8 *:cursor-pointer'>
                    <FaGithub className='hover:text-primary-800' onClick={() => {
                        window.open('https://github.com/Alsegurarp', '_blank');
                    }} />
                    <MdEmail className='hover:text-primary-800' onClick={() => {
                        const email = 'contact@alsegurarp.com';
                        const subject = 'Web developer\'s services';
                        const body = 'Hello Alex,\n\n I am interested in getting your services as a web developer.\n\n Please, reach out to me when you read this message.';
                        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.open(gmailUrl, '_blank');
                    }} />
                    <FaPhone className='hover:text-primary-800' onClick={() => {
                        window.open('tel:+525633001126', '_blank');
                    }} />
                    <div />
                </div>
            </div>
            <div className="hidden lg:block fixed space-y-4 top-2/4 right-4 lg:right-10 z-40">
                <div className="bg-primary-200 size-2 rounded-full bullet-1" />
                <div className="bg-primary-200 size-2 rounded-full bullet-2" />
                <div className="bg-primary-200 size-2 rounded-full bullet-3" />
                <div className="bg-primary-200 size-2 rounded-full bullet-4" />
                <div className="bg-primary-200 size-2 rounded-full bullet-5" />
            </div>

            <div className="wrapper">
                    <Usage />
                    <CustomCursor />
                    <DarkModeButton />
                <TopHero />
                
                <BestSellersCards 
                    cards={bestSellersCards}
                    title="Some of my projects"
                    subtitle="Explore some of my projects, built with different technologies and for different platforms"
                />
                <About />
                <WhyUs />
                <Footer />
            </div>
        </>
    );
}

export default App;