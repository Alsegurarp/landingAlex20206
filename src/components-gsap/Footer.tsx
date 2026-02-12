'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {FaGithub, FaPhone} from "react-icons/fa6";
import StarBorderButton from '../components/StarBorderSustitute';
import StarBorder from '../components/StarBorder';
import { MdEmail } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Footer: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Title animation with Intersection Observer
    if (titleRef.current) {
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
    }
  }, []);

  useEffect(() => {
    const letters = document.querySelectorAll<HTMLElement>('.letter');
    const JAPONLetters = document.querySelectorAll<HTMLElement>('.JAPON-letter');
    const JAPONContainer = document.querySelector<HTMLElement>('.JAPON-container');
    const animatedText = document.querySelector<HTMLElement>('#animated-text');

    if (!animatedText) {
      console.error('Animated text container not found.');
      return;
    }

    if (!letters.length) {
      console.error('No letters found for PREMIUM animation.');
      return;
    }

    if (!JAPONLetters.length) {
      console.error('No letters found for JAPÓN animation.');
      return;
    }

    if (!JAPONContainer) {
      console.error('JAPÓN container not found.');
      return;
    }

    let isAnimating = false;

    // Configure each letter of PREMIUM
    letters.forEach((letter) => {
      gsap.set(letter, { transformOrigin: 'center center' });
    });

    // Function to execute the animation
    const runAnimation = () => {
      if (isAnimating) return;
      isAnimating = true;

      // Main timeline
      const mainTimeline = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        },
      });

      mainTimeline
        // 1. Animate PREMIUM
        .to(letters, {
          color: '#b4e1ed',
          WebkitTextStroke: '1px #b4e1ed',
          rotationY: 180,
          duration: 0.5,
          ease: 'power2.inOut',
          force3D: true,
          stagger: 0.1,
        })
        // 2. Keep PREMIUM visible
        .to(letters, {
          color: 'transparent',
          stroke: '#b4e1ed',
          WebkitTextStroke: '1px #b4e1ed',
          strokeWidth: '1px',
          rotationY: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          force3D: true,
          stagger: 0.1,
          delay: 0.3,
          pointerEvents: 'none', // Disable interaction after fade out
        })
        // 3. Make the JAPÓN container visible
        .to(
          JAPONContainer,
          {
            opacity: 1,
            duration: 0.5,
          },
          '-=0.2'
        )
        // 4. Animate each JAPÓN letter from top to bottom
        .to(
          JAPONLetters, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.06
        }, '-=0.1');
    };

    // Function to reset the animation
    const resetAnimation = () => {
      gsap.set(JAPONContainer, {
        opacity: 0,
      });
      gsap.set(JAPONLetters, {
        opacity: 0,
        y: 0, // Clear the y transform, don't use translate-y
        clearProps: 'y'
      });
      // Re-enable pointer events when resetting
      gsap.set(letters, { pointerEvents: 'auto' });
    };

    // ScrollTrigger that repeats on enter/leave
    ScrollTrigger.create({
      trigger: animatedText,
      start: 'top 80%',
      end: () => `+=${animatedText?.offsetWidth || 0}`,
      onEnter: runAnimation,
      onEnterBack: runAnimation,
      onLeave: resetAnimation,
      onLeaveBack: resetAnimation,
      // markers: true,
    });

    // Activate hover effects for PREMIUM
    letters.forEach((letter) => {
      const tl = gsap.timeline({ paused: true });

      tl.to(letter, {
        color: '#b4e1ed',
        WebkitTextStroke: '1px #b4e1ed',
        strokeWidth: '1px',
        rotationY: 180,
        duration: 1,
        ease: "power4.out",
        force3D: true,
      });

      let isHovering = false;

      letter.addEventListener('mouseenter', () => {
        if (isAnimating) return; // Prevent interaction during animation
        isHovering = true;
        // Play animation nonstop
        if (!tl.isActive()) {
          tl.play();
        }
      });

      letter.addEventListener('mouseleave', () => {
        isHovering = false;
        // Once animation is done and mouse leaves, reverse it
        tl.eventCallback('onComplete', () => {
          if (!isHovering) {
            tl.reverse();
          }
        });
        // If animation is still playing, let it complete then reverse
        if (tl.isActive()) {
          // Animation will reverse when it completes (see callback above)
        } else {
          // Animation already completed, so reverse immediately
          tl.reverse();
        }
      });
    });
  }, []);

  return (
    <>
      <footer className="h-dvh grid grid-cols-1 grid-rows-[auto_auto] relative snap-start snap-stop-always panel">
        {/* Header Section */}
        <div className='flex flex-col justify-end items-center z-20 pt-20 sm:pt-16 md:pt-20 pb-2 sm:pb-3'>
          <h4 ref={titleRef} className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-70'>
            Big ideas<br />Big solutions
          </h4>

          {/* Description */}
          <span className="text-black dark:text-white relative z-30 font-copyright text-xs xs:text-sm sm:text-base md:text-lg cursor-default text-center max-w-[90%] sm:max-w-[85%]">
            Bring your ideas to the real world.
          </span>

          {/* Buttons */}
          <div className="flex flex-row gap-2 xs:gap-3 sm:gap-4 justify-center items-center z-30 w-full">
            <StarBorderButton textSize='text-xs xs:text-xs sm:text-xs' width='w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40' height='h-9 xs:h-10 sm:h-11'>
              Contact me
            </StarBorderButton>
            <StarBorder textSize='text-xs xs:text-xs sm:text-xs' width='w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40' height='h-9 xs:h-10 sm:h-11'>
              Discover more
            </StarBorder>
        </div>


          {/* Animated Brand Logo */}
          <section className="flex flex-col items-center w-full overflow-visible z-30 text-center pb-1 xs:pb-2 pt-2 xs:pt-4">
            {/* BARRANCAS */}
            <div
              className="flex justify-center items-center text-center perspective-midrange opacity-0 mb-0 JAPON-container cursor-default overflow-hidden leading-none"
              id="JAPON-text"
            >
              {[..."Alsegurarp"].map((char, i) => (
                <span key={i} className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-nohemi font-semibold text-primary-800 inline-block opacity-0 -translate-y-7.5 JAPON-letter tracking-widest">
                  {char}
                </span>
              ))}
            </div>

            {/* PREMIUM */}
            <div
              className="flex justify-center self-center items-center perspective-midrange w-full px-2 overflow-hidden leading-none -mt-0.5 sm:-mt-1"
              id="animated-text"
            >
              {[..."Developer"].map((char, i) => (
                <span key={i} className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '2px #b4e1ed', paintOrder: 'stroke' }}>
                  {char}
                </span>
              ))}
            </div>
          </section>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 z-30">
            <FaGithub className='hover:text-primary-800 text-xl md:text-2xl' onClick={() => {
                window.open('https://github.com/Alsegurarp', '_blank');
            }} />
            <MdEmail className='hover:text-primary-800 text-xl md:text-2xl' onClick={() => {
                const email = 'contact@alsegurarp.com';
                const subject = 'Web developer\'s services';
                const body = 'Hello Alex,\n\n I am interested in getting your services as a web developer.\n\n Please, reach out to me when you read this message.';
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.open(gmailUrl, '_blank');
            }} />
            <FaPhone className='hover:text-primary-800 text-xl md:text-2xl' onClick={() => {
                window.open('tel:+525633001126', '_blank');
            }} />
          </div>

          <section className="flex flex-col items-center">
            
            {/* Footer Bottom */}
            <div className="w-[80%] h-px bg-black dark:bg-white opacity-20 my-4" />
            <div className="w-full px-4 flex flex-col justify-between items-center gap-2 text-center md:max-w-[80%] lg:max-w-full">
              <span className="text-xs font-normal underline cursor-pointer hover:text-primary-800 text-black dark:text-white">For your knowledge</span>
              <span className="text-[10px] sm:text-xs text-black dark:text-white max-w-xl">
                © 2026 The use of any information in this website is strictly for contact the developer or to visit his projects, it shouldn't be used for a different reason than that.  
              </span>
            </div>
          </section>

        </div>
      </footer>
    </>
  );
};

export default Footer;