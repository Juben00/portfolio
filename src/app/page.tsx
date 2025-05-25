"use client"

import About from "@/components/about";
import Cover from "@/components/cover";
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen transition-colors duration-200">
      <Navbar />
      <Cover />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
