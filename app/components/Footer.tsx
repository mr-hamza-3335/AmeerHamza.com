import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 }
// }

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold color-change-text mb-4">Ameer Hamza</h3>
            <p className="text-sm mb-4">Frontend Developer passionate about creating beautiful and functional web experiences.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/ameerhamza" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ameer-hamza" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/ameerhamza" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Frontend Optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> ameerhamza94572@gmail.com
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" /> +92 314 0332320
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary/20 text-center">
          <p>&copy; {new Date().getFullYear()} Ameer Hamza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

