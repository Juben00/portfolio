"use client"

import { useState, useEffect } from "react";

export default function About() {
    return (
        <div id="about" className="relative py-16 bg-gray-50 dark:bg-gray-900/80">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white mb-12 leading-tight">
                    About Me
                </h1>
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                I'm Joevin C. Ansoc, a passionate and dedicated programmer with a strong foundation in web development and software design. As a BS Computer Science student, I specialize in crafting clean, responsive interfaces using different technologies while also working comfortably with backend stacks like Node.js, PHP, and MySQL.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                I enjoy solving real-world problems through code—always aiming to create tools that are not only functional but user-friendly. My approach combines technical expertise with creative problem-solving to deliver solutions that make a real impact.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Educational Background</h2>
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Bachelor of Science in Computer Science</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Western Mindanao State University</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">2022 - Present</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Senior High School</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Zamboanga City High School Stand-alone Senior High School</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">2020 - 2022</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Junior High School</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Zamboanga City High School</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">2016 - 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
