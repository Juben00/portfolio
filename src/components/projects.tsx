"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import hubvenue from "@/images/black_logo.png"
import Logo from "@/images/JA black.png"
import { motion } from "framer-motion"

export default function Projects() {
    interface Project {
        title: string
        authorID: number
        description: string
        language: string
        link: string
        image: string | StaticImageData | Blob
        tags: string[]
    }

    const [projects, setProjects] = useState<Project[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const projectsPerPage = 3

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const result = await fetch("/api/github")
                const data = await result.json()
                setProjects(data)
                console.log(data)
            } catch (error: any) {
                console.log(`Error! Status: ${error?.status}. Message: ${error?.response?.data?.message}`)
            }
        }

        fetchProjects()
    }, [])

    const deployedProjects = [
        {
            title: "Hubvenue",
            link: "https://hubvenue.xscpry.com/",
            image: hubvenue,
            tags: ["PHP", "Tailwind CSS", "MySQL", "JavaScript"],
            description: "A comprehensive venue management system for event organizers and venue owners."
        },
        {
            title: "CalmPanion",
            link: "https://calm-panion-rho.vercel.app/",
            image: Logo,
            tags: ["Next.js", "Tailwind CSS", "Shadcn", "TypeScript"],
            description: "A mental wellness companion app built with modern web technologies."
        },
    ]

    return (
        <div id="projects" className=" mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900/80">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>

                <div className="flex flex-col items-center mb-16    ">
                    {/* <h1 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Deployed Projects</h1> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                        {deployedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} logo`}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                                                {project.title.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-semibold capitalize text-gray-900 dark:text-white">{project.title}</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Visit Project
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center container mx-auto px-4 ">
                    <h1 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">GitHub Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects
                            .slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
                            .map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-2 w-full border-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                                >
                                    <h3 className="text-xl font-semibold mb-2 capitalize text-gray-900 dark:text-white">{project.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="text-blue-600 dark:text-blue-400 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            ))}
                    </div>
                    <div className="mt-8 flex justify-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 text-gray-900 dark:text-white">
                            Page {currentPage} of {Math.ceil(projects.length / projectsPerPage)}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(projects.length / projectsPerPage)))}
                            disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
                            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
