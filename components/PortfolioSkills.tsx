import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaServer,
  FaFeather,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFlask,
  SiPython,
  SiKubernetes,
  SiPostman,
  SiVisualstudiocode,
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiAppwrite,
  SiClerk,
  SiVuedotjs,
  SiSentry,
  SiFramer,
  SiFirebase,
  SiPhp,
  SiGnubash,
  SiGooglecloud,
  SiMicrosoftazure,
  SiFreecodecamp,
  SiUdemy,
  SiBookstack,
  SiLinkedin,
  SiUdacity,
  SiStripe,
  SiGraphql,
  SiJsonwebtokens,
  SiInsomnia,
  SiWebrtc,
  SiEclipseide,
  SiXampp,
  SiPycharm,
  SiJupyter,
  SiSublimetext,
  SiExpress,
  SiBootstrap,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiSanity,
  SiHostinger,
  SiRender,
  SiWebstorm,
  SiSpringboot,
  SiAngular,
  SiIntellijidea,
  SiOpenai,
  SiDeepnote,
  SiVite,
  SiFlutter,
  SiSwift,
  SiXamarin,
  SiKotlin,
  SiAndroid,
  SiSqlite,
  SiExpo,
  SiAndroidstudio,
  SiXcode,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { FiBox } from "react-icons/fi";

const PortfolioSkills = () => {
  return (
    <section
      id="skills"
      className="bg-secondary relative md:pt-10 px-4 sm:px-6 lg:px-10 pb-20"
    >
      <div className="mx-auto max-w-6xl relative">
        <h2 className="p-8 lg:p-4 text-3xl md:text-4xl mb-8 text-center font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          My Current Skills & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 p-6 rounded-md border shadow-sm">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              Frontend
            </h3>
            <ul className="flex flex-wrap gap-8 list-none items-center text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaHtml5 className="text-orange-600" size={20} />
                &nbsp;<span>HTML</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaCss3Alt className="text-blue-600" size={20} />
                &nbsp;<span>CSS / SCSS</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaJsSquare className="text-yellow-500" size={20} />
                &nbsp;<span>JavaScript (ES6+)</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaReact className="text-cyan-500" size={20} />
                &nbsp;<span>React</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiTailwindcss className="text-blue-400" size={20} />
                &nbsp;<span>Tailwind CSS</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiBootstrap
                  className="bg-gradient-to-b from-purple-600 via-blue-500 to-purple-800"
                  size={20}
                />
                &nbsp;<span>Bootstrap</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiNextdotjs
                  className="bg-gradient-to-b from-green-500 via-blue-500 to-green-600"
                  size={20}
                />
                &nbsp;<span>Next.js</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiTypescript className="text-blue-500" size={20} />
                &nbsp;<span>TypeScript</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiFramer className="text-pink-600" size={20} />
                &nbsp;<span>Framer Motion</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FiBox className="text-blue-800" size={20} />
                &nbsp;<span>shadcn</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <AiFillApi className="text-purple-800" size={20} />
                &nbsp;<span>Aceternity UI</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiVuedotjs className="text-green-500" size={20} />
                &nbsp;<span>Vue.js</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaFeather className="text-indigo-500" size={20} />
                &nbsp;<span>Flowbite</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiAngular className="text-red-600" size={20} />
                &nbsp;<span>Angular</span>
              </li>
            </ul>
          </div>

          {/* Backend Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 p-6 rounded-md border shadow-sm">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              Backend
            </h3>
            <ul className="flex flex-wrap gap-8 list-none items-center text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaNodeJs className="text-green-500" size={20} />
                &nbsp;<span>Node.js</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiFlask className="text-red-500" size={20} />
                &nbsp;<span>Flask</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiPython className="text-blue-500" size={20} />
                &nbsp;<span>Python</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiDjango className="text-green-600" size={20} />
                &nbsp;<span>Django</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiSanity className="text-green-600" size={20} />
                &nbsp;<span>Sanity</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiSentry className="text-red-500" size={20} />
                &nbsp;<span>Sentry</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaJava className="text-red-600" size={20} />
                &nbsp;<span>Java</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiExpress
                  className="bg-gradient-to-b from-indigo-600 via-blue-500 to-purple-800"
                  size={20}
                />
                &nbsp;<span>Express.js</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiPhp className="text-purple-800" size={20} /> <span>PHP</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiStripe className="text-indigo-600" size={20} />
                &nbsp;<span>Stripe</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiNextdotjs className="text-black dark:text-white" size={20} />
                &nbsp;<span>NextAuth</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiSpringboot className="text-green-500" size={20} />
                &nbsp;<span>Spring Boot</span>
              </li>
            </ul>
          </div>

          {/* Version control and Tools Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 border p-6 rounded-md shadow-sm">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              Version Control & Tools
            </h3>
            <ul className="flex flex-wrap items-center gap-8 list-none text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaGitAlt className="text-orange-600" size={20} />
                &nbsp;<span>Git</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaGithub
                  className="text-gray-800 dark:text-blue-100"
                  size={20}
                />
                &nbsp;<span>GitHub</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiVite className="text-purple-500" size={20} />
                &nbsp;<span>Vite</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiPostman className="text-orange-500" size={20} />
                &nbsp;<span>Postman</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiInsomnia className="text-purple-500" size={20} />
                &nbsp;<span>Insomnia</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiExpo className="text-blue-600" size={20} />
                &nbsp;<span>Expo</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiAndroidstudio className="text-green-600" size={20} />
                &nbsp;<span>Android Studio</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiXcode
                  className="text-gray-500 dark:text-gray-400"
                  size={20}
                />
                &nbsp;<span>Xcode</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiVisualstudiocode className="text-blue-500" size={20} />
                &nbsp;<span>VS Code</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiGnubash className="text-green-600" />
                &nbsp;<span>Bash</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiEclipseide className="text-purple-500" size={20} />
                &nbsp;<span>Eclipse IDE</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiXampp className="text-orange-500" size={20} />
                &nbsp;<span>XAMPP</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiPycharm className="text-green-500" size={20} />
                &nbsp;<span>PyCharm</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiJupyter className="text-orange-600" size={20} />
                &nbsp;<span>Jupyter Notebook</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiSublimetext className="text-yellow-600" size={20} />
                &nbsp;<span>Sublime Text</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiWebstorm className="text-blue-500" size={20} />
                &nbsp;<span>WebStorm</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiIntellijidea className="text-purple-600" size={20} />
                &nbsp;<span>IntelliJ IDEA</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiOpenai className="text-blue-600" size={20} />
                &nbsp;<span>ChatGPT</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiDeepnote className="text-purple-600" size={20} />
                &nbsp;<span>Deepseek AI</span>
              </li>
            </ul>
          </div>

          {/* Databases Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 p-6 rounded-md border shadow-sm">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              Databases
            </h3>
            <ul className="flex flex-wrap gap-8 list-none items-center text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiMongodb className="text-green-500" size={20} />
                &nbsp;<span>MongoDB</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiMysql className="text-blue-600" size={20} />
                &nbsp;<span>MySQL</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiPostgresql className="text-blue-500" size={20} />
                &nbsp;<span>PostgreSQL</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiAppwrite className="text-pink-500" size={20} />
                &nbsp;<span>Appwrite</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiClerk className="text-purple-500" size={20} />
                &nbsp;<span>Clerk</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiFirebase className="text-yellow-600" size={20} />
                &nbsp;<span>Firebase</span>
              </li>
            </ul>
          </div>

          {/* Mobile Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 p-6 rounded-md border shadow-sm">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              Mobile
            </h3>
            <ul className="flex flex-wrap gap-8 list-none items-center text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaReact className="text-blue-500" size={20} />
                &nbsp;<span>React Native</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiFlutter className="text-blue-400" size={20} />
                &nbsp;<span>Flutter</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiSwift className="text-orange-500" size={20} />
                &nbsp;<span>Swift</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiKotlin className="text-purple-500" size={20} />
                &nbsp;<span>Kotlin</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiAndroid className="text-green-500" size={20} />
                &nbsp;<span>Android Development</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiXamarin className="text-blue-600" size={20} />
                &nbsp;<span>Xamarin</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiFirebase className="text-yellow-500" size={20} />
                &nbsp;<span>Firebase</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiSqlite className="text-blue-700" size={20} />
                &nbsp;<span>SQLite</span>
              </li>
            </ul>
          </div>

          {/* DevOps Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 p-6 rounded-md border shadow-sm">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              DevOps
            </h3>
            <ul className="list-none space-y-4 text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-y-2 space-x-2">
                <FaDocker className="text-blue-600" size={20} />
                &nbsp;<span>Docker</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-y-2 space-x-2">
                <SiKubernetes className="text-blue-500" size={20} />
                &nbsp;<span>Kubernetes</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-y-2 space-x-2">
                <FaAws className="text-orange-400" size={20} />
                &nbsp;<span>AWS</span>
              </li>
            </ul>
          </div>

          {/* APIs Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 border p-6 rounded-md shadow-sm">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              My Frequently Used APIs
            </h3>
            <ul className="flex flex-wrap items-center gap-8 list-none text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiJsonwebtokens className="text-red-500" size={20} />
                &nbsp;<span>JWT</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiWebrtc className="text-blue-600" size={20} />
                &nbsp;<span>Websocket</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiGraphql className="text-pink-600" size={20} />
                &nbsp;<span>GraphQL</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaAws className="text-orange-400" size={20} />
                &nbsp;<span>AWS</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiGooglecloud className="text-blue-400" size={20} />
                &nbsp;<span>Google Cloud</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiMicrosoftazure className="text-blue-600" size={20} />
                &nbsp;<span>Azure</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <FaServer className="text-green-600" size={20} />
                &nbsp;<span>RESTful API</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiStripe className="text-indigo-600" size={20} />
                &nbsp;<span>Stripe</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-2">
                <SiSentry className="text-red-500" size={20} />
                &nbsp;<span>Sentry</span>
              </li>
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="skill-category bg-secondary dark:bg-gray-900 border shadow-sm p-6 rounded-md col-span-1 lg:col-span-2 lg:row-span-1">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              My Certifications
            </h3>
            <ul className="flex flex-wrap items-center gap-8 list-none text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <FaAws className="text-yellow-500" size={20} />
                &nbsp;<span>AWS Certified Developer</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiGooglecloud className="text-blue-500" size={20} />
                &nbsp;<span>Google Cloud Professional</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiMicrosoftazure className="text-blue-700" size={20} />
                &nbsp;<span>Microsoft Azure Fundamentals</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiFreecodecamp className="text-green-500" size={20} />
                &nbsp;<span>FreeCodeCamp - Responsive Web Design</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiUdemy className="text-purple-600" size={20} />
                &nbsp;<span>Udemy - Full-stack Developer</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiBookstack className="text-blue-700" size={20} />
                &nbsp;
                <span>
                  Alison Institute - IT Management (Software & Databases)
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiBookstack className="text-green-600" size={20} />
                &nbsp;<span>Great Learning - Full-stack Developer</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiLinkedin className="text-blue-700" size={20} />
                &nbsp;<span>LinkedIn - Full-stack Developer</span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiUdacity className="text-purple-600" size={20} />
                &nbsp;<span>Udacity - Machine Learning</span>
              </li>
            </ul>
          </div>

          {/* Hosting services */}
          <div className="skill-category bg-secondary dark:bg-gray-900 border shadow-sm p-6 rounded-md col-span-1 lg:col-span-3 lg:row-span-1">
            <h3 className="text-2xl text-gray-700 dark:text-blue-50 font-semibold mb-4">
              My Hosting Services
            </h3>
            <ul className="flex flex-wrap items-center gap-8 list-none text-[14px]">
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <FaAws className="text-orange-400" size={20} />
                <span>
                  AWS (Amazon Web Services) - Comprehensive hosting solutions,
                  including static sites, dynamic applications, and databases.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiGooglecloud className="text-blue-400" size={20} />
                <span>
                  Google Cloud Platform - Scalable hosting for applications,
                  static websites, and machine learning models.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiMicrosoftazure className="text-blue-600" size={20} />
                <span>
                  Microsoft Azure - Enterprise-level hosting with support for a
                  wide range of applications.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiVercel className="text-black dark:text-blue-100" size={20} />
                <span>
                  Vercel - Optimized for frontend frameworks and static site
                  hosting with serverless functions.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiNetlify className="text-teal-500" size={20} />
                <span>
                  Netlify - Simplified static site hosting with CI/CD, forms,
                  and serverless functions.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiGithub
                  className="text-gray-800 dark:text-blue-100"
                  size={20}
                />
                <span>
                  GitHub Pages - Free hosting for static websites directly from
                  your GitHub repository.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiHostinger className="text-purple-500" size={20} />
                <span>
                  Hostinger - Affordable shared hosting with advanced management
                  tools.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <SiRender className="text-blue-600" size={20} />
                <span>
                  Render - Easy deployment for web services, static sites, and
                  APIs.
                </span>
              </li>
              <li className="flex text-gray-600 dark:text-blue-100 items-center space-x-4">
                <FaDocker className="text-blue-600" size={20} />
                <span>
                  Docker Cloud - Optimized for containerized applications
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkills;
