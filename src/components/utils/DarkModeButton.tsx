'use client';

import React, { useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const DarkModeButton: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if dark mode is already enabled
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setIsDark(darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed bottom-2 left-2 z-50 w-14 h-14 bg-primary-800 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
        >
            {isDark ? (
                <IoSunny className="text-2xl transition-transform group-hover:rotate-180 duration-500" />
            ) : (
                <IoMoon className="text-2xl transition-transform group-hover:rotate-12 duration-300" />
            )}
        </button>
    );
};

export default DarkModeButton;
