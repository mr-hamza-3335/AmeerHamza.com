'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Node.js', level: 70 },
  { name: 'Express', level: 65 },
  { name: 'MongoDB', level: 60 },
  { name: 'Git', level: 75 },
  { name: 'MS Word', level: 95 },
  { name: 'MS PowerPoint', level: 90 },
  { name: 'MS Excel', level: 85 },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Skills() {
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
        <motion.h1 className="text-4xl font-bold mb-12 text-center" variants={fadeInUp}>My Skills</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="mb-4"
              variants={fadeInUp}
            >
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary/20 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="bg-primary h-2.5"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-16 text-center" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-4">Always Learning</h2>
          <p className="text-lg text-muted-foreground">
            As a developer, I&apos;m constantly expanding my skill set and staying up-to-date with the latest technologies. 
            I&apos;m currently focusing on improving my backend development skills and exploring new frontend frameworks.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

