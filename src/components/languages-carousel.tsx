"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LanguagesCarousel() {
    const languages = [
        { name: "HTML", icon: "html.svg" },
        { name: "CSS", icon: "css.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "Python", icon: "python.svg" },
        { name: "PHP", icon: "php.svg" },
        { name: "Java", icon: "java.svg" },
        { name: "C++", icon: "cplusplus.svg" },
        { name: "SQL", icon: "mysql.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "Firebase", icon: "firebase.svg" },
        { name: "Git", icon: "git.svg" },
        { name: "GitHub", icon: "github.svg" },
        { name: "jQuery", icon: "jquery.svg" },
        { name: "React", icon: "react.svg" },
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Express.js", icon: "express.svg" },
        { name: "Laravel", icon: "laravel.svg" },
        { name: "Tailwind CSS", icon: "tailwind.svg" },
        { name: "Bootstrap", icon: "bootstrap.svg" },
        { name: "Windows", icon: "windows.svg" },
        { name: "Visual Studio", icon: "visualstudio.svg" },
        { name: "Vercel", icon: "vercel.svg" },
        { name: "Netlify", icon: "netlify.svg" },
    ];

    // Create a seamless loop by adding the first few items at the end
    const duplicatedLanguages = [
        ...languages,
        ...languages,
    ];

    return (
        <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 10s linear infinite;
                    will-change: transform;
                    display: flex;
                    width: max-content;
                }
            `}</style>
            <div className="flex animate-scroll border p-4">
                {duplicatedLanguages.map((language, index) => (
                    <div key={index} className=" flex-shrink-0 mx-6 flex items-center justify-center">
                        <Image
                            src={`/languages/${language.icon}`}
                            alt={language.name}
                            width={60}
                            height={60}
                            className="transition-transform hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
