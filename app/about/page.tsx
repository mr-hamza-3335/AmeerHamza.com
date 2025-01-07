'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGraduationCap, FaLaptopCode, FaUserTie } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1 className="text-4xl font-bold mb-8 text-center" variants={fadeInUp}>About Me</motion.h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center mb-16">
          <motion.div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" variants={fadeInUp}>
            <Image
              src="/hamza2.jpg"
              alt="Ameer Hamza"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <p className="text-lg mb-4">
              I&apos;m Ameer Hamza, a passionate frontend developer with a strong foundation in creating responsive and user-friendly websites. My journey in web development started with a curiosity to understand how websites work, and it has since grown into a full-fledged career.
            </p>
            <p className="text-lg mb-4">
              I completed my matriculation in Science and intermediate in Pre-Engineering from Karachi Sindh Board. My formal education laid the groundwork for my analytical thinking and problem-solving skills, which I now apply daily in my development work.
            </p>
            <p className="text-lg">
              To further hone my skills, I&apos;ve taken various IT courses from different coaching centers. These courses have equipped me with proficiency in MS Word, MS PowerPoint, MS Excel, HTML, CSS, TypeScript, and Next.js. I&apos;m proud to say that I&apos;ve become a complete frontend developer, and I&apos;m currently expanding my skills into backend development.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div className="bg-card p-6 rounded-lg shadow-lg card-hover" variants={fadeInUp}>
            <FaGraduationCap className="text-4xl text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>Matriculation in Science and Intermediate in Pre-Engineering from Karachi Sindh Board</p>
          </motion.div>
          <motion.div className="bg-card p-6 rounded-lg shadow-lg card-hover" variants={fadeInUp}>
            <FaLaptopCode className="text-4xl text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <p>HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, and more</p>
          </motion.div>
          <motion.div className="bg-card p-6 rounded-lg shadow-lg card-hover" variants={fadeInUp}>
            <FaUserTie className="text-4xl text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <p>Frontend Developer with experience in building responsive and user-friendly web applications</p>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4">My Journey</h2>
          <p className="text-lg mb-4">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with fellow developers. I believe in continuous learning and staying up-to-date with the latest trends in web development.
          </p>
          <p className="text-lg mb-4">
            My goal is to create web applications that not only look great but also provide an excellent user experience. I&apos;m passionate about clean, efficient code and always strive to follow best practices in my work.
          </p>
          <p className="text-lg">
            I&apos;m excited about the opportunities in the tech industry and look forward to taking on new challenges and growing as a developer. If you&apos;re interested in collaborating or have any questions, feel free to reach out!
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

