import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiFlask, SiPython, SiKubernetes, SiPostman, 
  SiVisualstudiocode, SiNextdotjs, SiTypescript, SiDjango, SiAppwrite, SiClerk, SiVuedotjs, SiSentry, 
  SiFramer, SiFirebase, SiPhp, SiGnubash, SiGooglecloud, SiMicrosoftazure, SiFreecodecamp, SiUdemy, 
  SiBookstack, SiLinkedin, SiUdacity } from 'react-icons/si';
import { AiFillApi } from "react-icons/ai"; 
import { FiBox } from "react-icons/fi"; 
import { FaJava } from "react-icons/fa";

const PortfolioSkills = () => {
  return (
    <section id="skills" className="bg-secondary relative md:pt-10 px-6 lg:px-10 pb-20">
      <div className="mx-auto max-w-5xl relative">
        <h2 className="my-8 font-bold text-center text-[2.4rem] leading-snug tracking-wider">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaHtml5 className="text-orange-600" size={20} />&nbsp;<span>HTML</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCss3Alt className="text-blue-600" size={20} />&nbsp;<span>CSS / SCSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaJsSquare className="text-yellow-500" size={20} />&nbsp;<span>JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaReact className="text-cyan-500" size={20} />&nbsp;<span>React</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTailwindcss className="text-blue-400" size={20} />&nbsp;<span>Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiNextdotjs className="text-green-500" size={20} />&nbsp;<span>Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTypescript className="text-blue-500" size={20} />&nbsp;<span>TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiFramer className="text-pink-600" size={20} />&nbsp;<span>Framer Motion</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiBox className="text-blue-800" size={20} />&nbsp;<span>shadcn</span>
              </li>
              <li className="flex items-center space-x-2">
                <AiFillApi className="text-purple-800" size={20} />&nbsp;<span>Aceternity UI</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiVuedotjs className="text-green-500" size={20} />&nbsp;<span>Vue.js</span>
              </li>
            </ul>
          </div>

          {/* Backend Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaNodeJs className="text-green-500" size={20} />&nbsp;<span>Node.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiFlask className="text-red-500" size={20} />&nbsp;<span>Flask</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiPython className="text-blue-500" size={20} />&nbsp;<span>Python</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiDjango className="text-green-600" size={20} />&nbsp;<span>Django</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiSentry className="text-red-500" size={20} />&nbsp;<span>Sentry</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaJava className="text-red-600" size={20} />&nbsp;<span>Java</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiPhp className="text-purple-800" /> <span>PHP</span>
              </li>
            </ul>
          </div>

          {/* Databases Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Databases</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <SiMongodb className="text-green-500" size={20} />&nbsp;<span>MongoDB</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiMysql className="text-blue-600" size={20} />&nbsp;<span>MySQL</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiPostgresql className="text-blue-500" size={20} />&nbsp;<span>PostgreSQL</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiAppwrite className="text-pink-500" size={20} />&nbsp;<span>Appwrite</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiClerk className="text-purple-500" size={20} />&nbsp;<span>Clerk</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiFirebase className="text-yellow-600" size={20} />&nbsp;<span>Firebase</span>
              </li>
            </ul>
          </div>

          {/* DevOps Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">DevOps</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaDocker className="text-blue-600" size={20}/>&nbsp;<span>Docker</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiKubernetes className="text-blue-500" size={20} />&nbsp;<span>Kubernetes</span>
              </li>
            </ul>
          </div>

          {/* Tools Section */}
          <div className="skill-category bg-secondary border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Version Control & Tools</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaGitAlt className="text-orange-600" size={20} />&nbsp;<span>Git</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaGithub className="text-blue-500" size={20} />&nbsp;<span>GitHub</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiPostman className="text-orange-500" size={20} />&nbsp;<span>Postman</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiVisualstudiocode className="text-blue-500" size={20} />&nbsp;<span>VS Code</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiGnubash className="text-green-600" /> <span>Bash</span>
              </li>
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="skill-category bg-secondary border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaAws className="text-yellow-500" /> <span>AWS Certified Developer</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiGooglecloud className="text-blue-500" /> <span>Google Cloud Professional</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiMicrosoftazure className="text-blue-700" /> <span>Microsoft Azure Fundamentals</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiFreecodecamp className="text-green-500" /> <span>FreeCodeCamp - Responsive Web Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiUdemy className="text-purple-600" /> <span>Udemy - Full-stack Developer</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiBookstack className="text-gray-600" /> <span>Alison Institute - IT Management (Software & Databases)</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiBookstack className="text-gray-600" /> <span>Great Learning - Full-stack Developer</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiLinkedin className="text-blue-700" /> <span>LinkedIn - Full-stack Developer</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiUdacity className="text-purple-600" /> <span>Udacity - Machine Learning</span>
              </li>
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="skill-category bg-secondary border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Verified Certifications</h3>
            <ul className="list-none space-y-4">
              <li>IT Management - Software & Databases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PortfolioSkills