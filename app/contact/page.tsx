'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here (e.g., send data to an API)
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen py-20">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.h1 className="text-4xl font-bold mb-12 text-center" variants={fadeInUp}>Contact Me</motion.h1>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-8 text-muted-foreground">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-primary mr-4 text-xl" />
                <span>ameerhamza94572@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-primary mr-4 text-xl" />
                <span>03140332320</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-4 text-xl" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-secondary rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-secondary rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-secondary rounded-md bg-background text-foreground"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

