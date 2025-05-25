"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import LogoBlack from "@/images/JA black.png";
import LogoWhite from "@/images/JA white.png";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if user has dark mode preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setDarkMode(!darkMode);
    };

    return (
        <nav className="bg-white/50 dark:bg-gray-800/50 py-2 shadow-sm backdrop-blur-sm transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex justify-between items-center w-full lg:w-auto">
                        <div className="flex items-center px-2">
                            <a href="/" className="font-bold text-gray-800 dark:text-white">
                                {darkMode ? (
                                    <Image src={LogoWhite} alt="Logo" width={80} height={80} />
                                ) : (
                                    <Image src={LogoBlack} alt="Logo" width={80} height={80} />
                                )}
                            </a>
                            <p className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-white ml-2">
                                Joevin Ansoc
                            </p>
                        </div>

                        {/* Burger Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto bg-white dark:bg-gray-800 lg:bg-transparent dark:lg:bg-transparent shadow-lg lg:shadow-none mt-2 lg:mt-0`}>
                        <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
                            <li>
                                <a href="/" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="/" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <Button
                                    onClick={toggleDarkMode}
                                    className="p-2 rounded-lg cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200"
                                    aria-label="Toggle dark mode"
                                >
                                    {darkMode ? (
                                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}