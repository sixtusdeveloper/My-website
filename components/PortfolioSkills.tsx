import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiFlask, SiPython, SiKubernetes, SiPostman, SiVsco } from 'react-icons/si';

const PortfolioSkills = () => {
  return (
    <section id="skills" className="bg-secondary relative md:pt-10 px-6 lg:px-14 pb-20">
      <div className="mx-auto max-w-5xl relative">
        <h2 className="font-bold text-center text-[2.4rem] leading-snug tracking-wider">Skills & Tools</h2>

        {/* Skills Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaHtml5 className="text-orange-600" /> <span>HTML</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCss3Alt className="text-blue-600" /> <span>CSS / SCSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaJsSquare className="text-yellow-500" /> <span>JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaReact className="text-cyan-500" /> <span>React</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiTailwindcss className="text-blue-400" /> <span>Tailwind CSS</span>
              </li>
            </ul>
          </div>

          {/* Backend Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaNodeJs className="text-green-500" /> <span>Node.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiFlask className="text-black" /> <span>Flask</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiPython className="text-yellow-500" /> <span>Python</span>
              </li>
            </ul>
          </div>

          {/* Databases Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Databases</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <SiMongodb className="text-green-500" /> <span>MongoDB</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiMysql className="text-blue-600" /> <span>MySQL</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiPostgresql className="text-blue-500" /> <span>PostgreSQL</span>
              </li>
            </ul>
          </div>

          {/* DevOps Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">DevOps</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaDocker className="text-blue-600" /> <span>Docker</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiKubernetes className="text-blue-500" /> <span>Kubernetes</span>
              </li>
            </ul>
          </div>

          {/* Tools Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Version Control & Tools</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaGitAlt className="text-orange-600" /> <span>Git</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaGithub className="text-black" /> <span>GitHub</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiPostman className="text-orange-500" /> <span>Postman</span>
              </li>
              <li className="flex items-center space-x-2">
                <SiVsco className="text-blue-500" /> <span>VS Code</span>
              </li>
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2">
                <FaAws className="text-yellow-500" /> <span>AWS Certified Developer</span>
              </li>
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AWS Certified Practicioner</li>
              <li>Google Cloud Professional</li>
              <li>Microsoft Azure Fundamentals</li>
              <li>Responsive Web Design</li>
              <li>Full-stack Developer</li>
              <li>IT Management - Software & Databases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PortfolioSkills