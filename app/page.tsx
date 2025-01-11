'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaMobileAlt, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa'

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

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive online store with product catalog and checkout.",
    image: "/store.PNG",
    github: "https://github.com/mr-hamza-3335/Hamza-s-Furniture-Store",
    demo: "https://hamza-s-furniture-store.vercel.app/"
  },
  {
    title: "Dynamic Resume Builder",
    description: "Create and edit resumes effortlessly with this form-based tool. Input your details, and get a professional resume ready instantly.",
    image: "/resume.PNG",
    github: "https://github.com/mr-hamza-3335/milestone4",
    demo: "https://milestone4-one-alpha.vercel.app/"
  },
  {
    title: 'Revolutionizing E-Commerce Trends(blog website)',
    description: 'Explore the latest innovations and insights shaping the future of online shopping',
    image: '/1.PNG',
    githubLink: 'https://github.com/mr-hamza-3335/blog-website',
    liveLink: 'https://blog-website-pi-pearl.vercel.app/',
  }
]

const services = [
  {
    icon: <FaCode className="text-4xl mb-4 text-primary" />,
    title: "Web Development",
    description: "Creating responsive and dynamic websites using modern technologies."
  },
  {
    icon: <FaPalette className="text-4xl mb-4 text-primary" />,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces."
  },
  {
    icon: <FaMobileAlt className="text-4xl mb-4 text-primary" />,
    title: "Mobile-First Approach",
    description: "Ensuring your website looks great on all devices, especially mobile."
  }
]

const skills = [
  { name: "HTML5", icon: FaCode },
  { name: "CSS3", icon: FaPalette },
  { name: "JavaScript", icon: FaLaptopCode },
  { name: "React", icon: FaCode },
  { name: "Next.js", icon: FaServer },
  { name: "Tailwind CSS", icon: FaPalette },
  { name: "Git", icon: FaTools },
  { name: "Responsive Design", icon: FaMobileAlt },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.section 
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8" 
            variants={fadeInUp}
          >
            Hi, I&apos;m{' '}
            <span className="color-change-text">Ameer Hamza</span>
          </motion.h1>
          <motion.div 
            variants={fadeInUp}
            className="w-48 h-48 mx-auto rounded-full border-4 border-primary overflow-hidden mb-8"
          >
            <Image
              src="/hamza.png"
              alt="Ameer Hamza"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h2 
            className="text-2xl md:text-3xl text-muted-foreground mb-8" 
            variants={fadeInUp}
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto text-muted-foreground mb-12" 
            variants={fadeInUp}
          >
            I create beautiful, responsive, and user-friendly web applications using modern technologies.
            Let&apos;s bring your ideas to life with clean code and stunning designs.
          </motion.p>
          <motion.div className="flex justify-center space-x-4" variants={fadeInUp}>
            <Link href="/projects" className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/80 transition-all transform hover:scale-105">
              View My Work
            </Link>
            <Link href="/contact" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/80 transition-all transform hover:scale-105">
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <FaArrowRight className="text-3xl text-primary transform rotate-90" />
        </motion.div>
      </motion.section>

      <motion.section 
        className="py-20 bg-secondary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </motion.a>
                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Live Demo <FaExternalLinkAlt className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/projects" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/80 transition-all transform hover:scale-105">
                View All Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-secondary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon className="text-5xl text-primary mb-4" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
