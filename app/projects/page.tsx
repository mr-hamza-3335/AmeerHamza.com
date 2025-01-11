'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// Define the Project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website with product catalog, shopping cart, and checkout functionality.',
    image: '/store.PNG',
    technologies: ['React', 'Next.js','Shadcn','Tailwind CSS'],
    githubLink: 'https://github.com/mr-hamza-3335/Hamza-s-Furniture-Store',
    liveLink: 'https://hamza-s-furniture-store.vercel.app/',
  },
  {
    id: 2,
    title: 'Dynamic Resume Builder',
    description: 'Create and edit resumes effortlessly with this form-based tool. Input your details, and get a professional resume ready instantly.',
    image: '/resume.PNG',
    technologies: ['HTML', 'CSS', 'Typescript'],
    githubLink: 'https://github.com/mr-hamza-3335/milestone4',
    liveLink: 'https://milestone4-one-alpha.vercel.app/',
  },
  {
    id: 3,
    title: 'Modern Digital Clock',
    description: 'A sleek and responsive digital clock displaying real-time hours, minutes, and seconds with a minimalist design.',
    image: '/clock.PNG',
    technologies: ['HTML', 'CSS', 'Javascript'],
    githubLink: 'https://github.com/mr-hamza-3335/digital-clock',
    liveLink: 'https://digital-clock-dun-tau.vercel.app/',
  },
  {
    id: 4,
    title: 'My Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    image: '/portfolio.PNG',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/mr-hamza-3335/AmeerHamza.com',
    liveLink: 'https://ameer-hamza-com.vercel.app/',
  },
  {
    id: 5,
    title: 'NextGen E-Commerce Platform',
    description: 'A feature-rich e-commerce website offering seamless browsing, secure payments, and a modern user interface for an exceptional shopping experience.',
    image: '/store1.PNG',
    technologies: ['Next.js', 'Shadcn', 'React', 'Tailwind CSS'],
    githubLink: 'https://github.com/mr-hamza-3335/my-website',
    liveLink: 'https://my-website-blond-alpha.vercel.app/',
  },
  {
    id: 6,
    title: 'Revolutionizing E-Commerce Trends (Blog Website)',
    description: 'Explore the latest innovations and insights shaping the future of online shopping',
    image: '/1.PNG',
    technologies: ['React', 'Next.js', 'Tailwind CSS','Typescript'],
    githubLink: 'https://github.com/mr-hamza-3335/blog-website',
    liveLink: 'https://blog-website-pi-pearl.vercel.app/',
  },
  {
    id: 7,
    title: 'Baldia Town: Discover Your Local Community',
    description: 'Explore the heart of Baldia Town with insights on its culture, landmarks, and local events.',
    image: '/2.PNG',
    technologies: ['React', 'Next.js', 'Tailwind CSS','Typescript'],
    githubLink: 'https://github.com/mr-hamza-3335/baldia-town',
    liveLink: 'https://baldia-town.vercel.app/',
  },
  {
    id: 8,
    title: 'Professional Static Resume',
    description: 'A concise and visually appealing static resume showcasing my skills, experience, and achievements',
    image: '/3.PNG',
    technologies: ['HTML', 'CSS','Javascript'],
    githubLink: 'https://github.com/mr-hamza-3335/milestone2',
    liveLink: 'https://milestone2-lac.vercel.app/',
  },
]


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
        <motion.h1 className="text-4xl font-bold mb-12 text-center" variants={fadeInUp}>My Projects</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden card-hover"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card p-8 rounded-lg max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-2 px-4 rounded transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded transition-colors"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

