"use client"

import { useState, useEffect } from "react";
import LanguagesCarousel from "./languages-carousel";
import Image from "next/image";
import cover from "@/images/cover.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Cover() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    // Effect to check if the cover is in view
    useEffect(() => {
        const handleScroll = () => {
            const cover = document.querySelector("#cover");
            if (cover) {
                const rect = cover.getBoundingClientRect();
                setIsInView(rect.top <= window.innerHeight * 0.8);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isInView) {
            setIsLoaded(true);
        }
    }, [isInView]);

    return (
        <div id="cover" className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative">
                <div className="relative rounded-2xl">
                    <div className="px-4 py-16 container mx-auto">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full lg:w-1/2 flex justify-center items-center"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl"></div>
                                    <Avatar className="h-[350px] w-[340px] ring-4 ring-white dark:ring-gray-800 shadow-2xl">
                                        <AvatarImage src={cover.src} className="object-cover" />
                                        <AvatarFallback>
                                            <Image src={cover} alt="Professional developer working" fill className="object-cover" />
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full lg:w-full p-4 lg:max-w-3xl mx-auto lg:mx-0 text-center lg:text-left overflow-hidden"
                            >
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                    Crafting Digital Experiences with Modern Technology
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    We specialize in building innovative web solutions using cutting-edge technologies.
                                    From responsive designs to complex applications, we bring your digital vision to life.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-center lg:justify-start">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Get Started
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <LanguagesCarousel />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
