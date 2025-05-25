"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
    const frontend = [
        { name: "HTML", icon: "html.svg" },
        { name: "CSS", icon: "css.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "React", icon: "react.svg" },
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "Tailwind CSS", icon: "tailwind.svg" },
        { name: "Bootstrap", icon: "bootstrap.svg" },
        { name: "jQuery", icon: "jquery.svg" },
    ];

    const backend = [
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Express.js", icon: "express.svg" },
        { name: "Laravel", icon: "laravel.svg" },
        { name: "PHP", icon: "php.svg" },
        { name: "Python", icon: "python.svg" },
        { name: "Java", icon: "java.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
    ];

    const database = [
        { name: "MySQL", icon: "mysql.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "Firebase", icon: "firebase.svg" },
    ];

    const tools = [
        { name: "Git", icon: "git.svg" },
        { name: "GitHub", icon: "github.svg" },
        { name: "Windows", icon: "windows.svg" },
        { name: "Visual Studio", icon: "visualstudio.svg" },
        { name: "Vercel", icon: "vercel.svg" },
    ];


    return (
        <div id="services" className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800  rounded-xl shadow-lg border"
            >
                <motion.div className="container mx-auto pt-12 px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
                            Services
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Comprehensive web development solutions tailored to your needs
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 items-center">
                        <div className="w-full max-w-6xl rounded-lg p-4 grid lg:grid-cols-2 gap-8">
                            <div className="w-full group">
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform group-hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Frontend Development</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                                        I craft responsive, accessible, and visually appealing user interfaces using modern web technologies. My focus is on delivering seamless user experiences across devices and screen sizes.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                                        Tech Stack:
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {frontend.map((item) => (
                                            <div key={item.name} className="group/item">
                                                <Image
                                                    src={`/languages/${item.icon}`}
                                                    alt={item.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-12 h-12 transform group-hover/item:scale-110 transition-transform duration-200"
                                                />
                                                <span className="block text-xs text-center mt-1 text-gray-600 dark:text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full group">
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform group-hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Backend Development</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                                        I build robust and scalable server-side applications using Node.js, Express.js, and Laravel. My backend solutions ensure smooth data processing and efficient API integrations.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                                        Tech Stack:
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {backend.map((item) => (
                                            <div key={item.name} className="group/item">
                                                <Image
                                                    src={`/languages/${item.icon}`}
                                                    alt={item.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-12 h-12 transform group-hover/item:scale-110 transition-transform duration-200"
                                                />
                                                <span className="block text-xs text-center mt-1 text-gray-600 dark:text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-6xl rounded-lg p-4 grid lg:grid-cols-2 gap-8">
                            <div className="w-full group">
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform group-hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                                            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Database</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                                        I manage and optimize databases to ensure efficient data storage and retrieval. My expertise includes MySQL, MongoDB, and Firebase.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                                        Tech Stack:
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {database.map((item) => (
                                            <div key={item.name} className="group/item">
                                                <Image
                                                    src={`/languages/${item.icon}`}
                                                    alt={item.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-12 h-12 transform group-hover/item:scale-110 transition-transform duration-200"
                                                />
                                                <span className="block text-xs text-center mt-1 text-gray-600 dark:text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full group">
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform group-hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                                            <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tools</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                                        I use Git, GitHub, and Windows as my tools of choice. I also use Visual Studio and Vercel for development.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                                        Tech Stack:
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {tools.map((item) => (
                                            <div key={item.name} className="group/item">
                                                <Image
                                                    src={`/languages/${item.icon}`}
                                                    alt={item.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-12 h-12 transform group-hover/item:scale-110 transition-transform duration-200"
                                                />
                                                <span className="block text-xs text-center mt-1 text-gray-600 dark:text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
