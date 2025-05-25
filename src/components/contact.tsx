"use client"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('sending')

        try {
            await emailjs.send(
                'service_w3suuie',
                'template_btwzoqx',
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'joevinansoc870@gmail.com',
                },
                'JirH_kBMx_zsUTMe6'
            )
            setStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        } catch (error) {
            setStatus('error')
            console.error('Error sending email:', error)
        }
    }

    const socialLinks = [
        { icon: <FaGithub className="w-6 h-6" />, url: 'https://github.com/juben00', label: 'GitHub' },
        { icon: <FaLinkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/joevin-ansoc-575399278/', label: 'LinkedIn' },
        { icon: <FaInstagram className="w-6 h-6" />, url: 'https://www.instagram.com/hoyjoevin/', label: 'Instagram' },
        { icon: <FaFacebook className="w-6 h-6" />, url: 'https://www.facebook.com/joevin.ansoc870/', label: 'Facebook' },
    ]

    const contactInfo = [
        { icon: <FaEnvelope className="w-5 h-5" />, text: 'joevinansoc870@gmail.com', label: 'Email' },
        { icon: <FaPhone className="w-5 h-5" />, text: '+63 995 033 1778', label: 'Phone' },
        { icon: <FaMapMarkerAlt className="w-5 h-5" />, text: 'Shanty Town, Luyahan Pasonanca, Zamboanga City, Zamboanga del Sur, Philippines 7000', label: 'Location' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">Get in Touch</h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out through the form below or connect with me on social media.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                                        <p className="text-gray-900 dark:text-white">{info.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {link.icon}
                                        <span className="text-gray-700 dark:text-gray-300">{link.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-colors"
                                        placeholder="Your name"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-colors"
                                        placeholder="your@email.com"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <motion.textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={6}
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-colors"
                                    placeholder="Your message here..."
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                />
                            </motion.div>
                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 text-white p-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </motion.button>
                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-green-500 text-center bg-green-50 dark:bg-green-900/30 p-3 rounded-lg"
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.p>
                            )}
                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-red-500 text-center bg-red-50 dark:bg-red-900/30 p-3 rounded-lg"
                                >
                                    Failed to send message. Please try again later.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

