'use client';
import logoBarrancas from '../../assets/alsegurarpNegro.webp';
import logoBarrancasBlanco from '../../assets/alsegurarpSVG.webp';
import { FaInstagram, FaGithub } from 'react-icons/fa6';

import { useState, useEffect } from 'react'
import StaggeredMenu from '../../components-gsap/StaggeredMenu';
import { MdEmail } from 'react-icons/md';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#hero' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'About', ariaLabel: 'View additional services', link: '#about' },
  { label: 'Why me?', ariaLabel: 'Learn about us', link: '#why' },
];

const email = 'alsegurarp@gmail.com';
const subject = 'Web developer\'s services';
const body = 'Hello Alex,\n\n I am interested in getting your services as a web developer.\n\n Please, reach out to me when you read this message.';

const socialItems = [
  { label: <FaGithub />, link: 'https://github.com/Alsegurarp' },
  { label: <FaInstagram />, link: 'https://www.instagram.com/al_segrart' },
  {label: <MdEmail />, link: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` }
];


function Usage() {
  const [isDark, setIsDark] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Check dark mode from DOM
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    setHydrated(true);

    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Don't render until hydration is complete
  if (!hydrated) {
    return null;
  }

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      isFixed={true}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#000"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={['#80cae0', '#298eb1', '#254f65']}
      logoUrl={isDark ? logoBarrancasBlanco : logoBarrancas}
      accentColor="#254f65"
    />
  )
}

export default Usage

