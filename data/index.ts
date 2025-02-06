import { Dialog } from "@headlessui/react";
// import { SiNextdotjs, SiTailwindcss, SiTypescript, SiThreedotjs, SiReact, SiC } from "react-icons/si";
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
} from "react-icons/si";


//============================= Home Page Navigation links ============================//
export const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#clients' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  
export const portfolioNavLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
  ]; 
//======================= Blog Posts ==========================//
  export const blogPosts = [
    {
      id: 1,
      title: "Understanding JavaScript Closures and Scope",
      description: `
        **JavaScript closures** are a foundational concept in JavaScript that enable functions to access variables from an outer scope even after the outer function has finished executing. This feature is crucial for creating private variables and managing asynchronous code effectively.
  
        **In this article, we explore:**
  
        - **Definition and Syntax:** A clear explanation of what closures are, how they are created, and their syntax. This section provides code examples to illustrate how closures capture and retain access to the outer function's variables.
  
        - **Use Cases:** We delve into practical applications of closures, such as data encapsulation and implementing private variables. Examples will show how closures can be utilized in real-world scenarios.
  
        - **Common Patterns:** The article discusses common patterns and best practices involving closures, including their role in asynchronous programming and handling callbacks.
      `,
      diagramImageUrl: "/javascript-closure-diagram.png",
      imageUrl: "/blog01.avif",
    },
    {
      id: 2,
      title: "The Evolution of React: Hooks and Beyond",
      description: `
        This post provides an in-depth look at the evolution of **React**, particularly focusing on the introduction and impact of Hooks. It traces the shift from class-based components to functional components and highlights how Hooks have transformed state management and side effects handling.
  
        **Key points covered include:**
  
        - **History of React:** A historical overview of React's development, from its inception to the present day. This section covers major milestones and how React has evolved over time.
  
        - **Introduction to Hooks:** A detailed explanation of React Hooks, including useState, useEffect, and custom hooks. We discuss how Hooks simplify state management and component logic compared to class-based components.
  
        - **Future of React:** Insights into upcoming features and advancements in React. This section explores how Hooks and other features will continue to influence React's development.
      `,
      diagramImageUrl: "/react-evolution-timeline.jpg",
      imageUrl: "/blog02.avif",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: Which One Should You Use?",
      description: `
        In this comprehensive article, we compare **CSS Grid** and **Flexbox**, two powerful layout systems in modern web design. We discuss their strengths and limitations and provide guidance on when to use each tool based on specific layout requirements.
  
        **Topics covered include:**
  
        - **Overview of CSS Grid:** An introduction to CSS Grid, explaining how it facilitates the creation of complex layouts using a grid-based system with rows and columns. The section includes practical examples and code snippets.
  
        - **Overview of Flexbox:** A review of Flexbox, which simplifies the creation of one-dimensional layouts with flexible boxes. We explore its features and provide examples of common use cases.
  
        - **Comparison and Use Cases:** A detailed comparison between Grid and Flexbox, with visual examples and code comparisons to help you decide which layout tool to use for different scenarios.
      `,
      diagramImageUrl: "/css-grid-vs-flexbox.avif",
      imageUrl: "/blog03.avif",
    },
    {
      id: 4,
      title: "Optimizing Web Performance for 2024",
      description: `
        **Web performance optimization** is essential for delivering a fast and responsive user experience. This article covers various strategies and best practices for optimizing web performance, ensuring your site performs well in 2024.
  
        **Topics include:**
  
        - **Performance Metrics:** Understanding key web performance metrics such as Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). This section explains what these metrics are and why they matter.
  
        - **Optimization Techniques:** Practical techniques for improving website performance, including lazy loading, code splitting, and efficient caching strategies. The article provides actionable tips and code examples.
  
        - **Future Trends:** Insights into emerging trends and tools for web performance optimization, helping you stay ahead of the curve with the latest advancements.
      `,
      diagramImageUrl: "/web-performance-metrics.png",
      imageUrl: "/blog04.avif",
    },
    {
      id: 5,
      title: "State Management in Modern JavaScript Apps",
      description: `
        This article provides an in-depth look at **state management** in modern JavaScript applications. We explore various state management solutions, including Redux and the Context API, and discuss when to use different strategies based on application needs.
  
        **Key points include:**
  
        - **Introduction to State Management:** An overview of what state management is, why it is important, and the challenges associated with managing state in complex applications.
  
        - **Redux:** A comprehensive exploration of Redux, including its core principles, usage patterns, and benefits. The section includes code examples and practical use cases.
  
        - **Context API:** An explanation of how the Context API fits into the state management landscape, with examples demonstrating its use for simpler state management scenarios.
      `,
      diagramImageUrl: "/redux-vs-context-api.png",
      imageUrl: "/blog05.avif",
    },
    {
      id: 6,
      title: "Introduction to TypeScript: Why You Should Care",
      description: `
        **TypeScript** enhances JavaScript by adding static types, which can improve code quality and maintainability. This article introduces TypeScript and discusses its benefits for large-scale JavaScript projects.
  
        **In this article, we cover:**
  
        - **What is TypeScript?:** An overview of TypeScript, including its core features and how it extends JavaScript. This section introduces the TypeScript syntax and type system.
  
        - **Benefits of TypeScript:** How static typing can catch errors early, improve code clarity, and enhance the development experience. We provide examples of TypeScript in action.
  
        - **Getting Started:** A guide to setting up TypeScript in your projects and understanding its key features. This section includes a basic setup guide and tips for new users.
      `,
      diagramImageUrl: "/typescript-vs-javascript.webp",
      imageUrl: "/blog06.avif",
    },
  ];
  
  //============================= Testimonials Section Data =======================//
export const testimonials = [
  {
    quote: "Sixtus’s portfolio has been instrumental in showcasing our projects. The design and functionality he implemented have enhanced our online presence and effectively communicated our brand message. His attention to detail and responsiveness have truly made a difference.",
    fullQuote: "Sixtus’s portfolio has been instrumental in showcasing our projects. The design and functionality he implemented have enhanced our online presence and effectively communicated our brand message. His attention to detail and responsiveness have truly made a difference. We are very pleased with the results and look forward to future collaborations.",
    name: "Michael Benjamin",
    title: "Marketing Director at Creative Solutions",
    imageUrl: "/user07.jpg",
    fallbackImageUrl: "/fallback.png",
    rating: 5,
  },
  {
    quote: "The enhancements Sixtus made to our website’s user interface were game-changing. His work not only improved the overall design but also made the user experience more intuitive and engaging. We’ve seen a significant increase in user satisfaction and interaction.",
    fullQuote: "The enhancements Sixtus made to our website’s user interface were game-changing. His work not only improved the overall design but also made the user experience more intuitive and engaging. We’ve seen a significant increase in user satisfaction and interaction. Sixtus's professionalism and creativity are top-notch, and we’re thrilled with the results.",
    name: "Sandra Ankana",
    title: "UI/UX Designer at Innovative Tech",
    imageUrl: "/user-ux.jpg",
    fallbackImageUrl: "/fallback.png",
    rating: 5,
  },
  {
    quote: "Sixtus’s expertise in front-end development brought a fresh perspective to our project. His ability to integrate advanced features seamlessly into our existing setup was impressive. The final product exceeded our expectations and has been well-received by users.",
    fullQuote: "Sixtus’s expertise in front-end development brought a fresh perspective to our project. His ability to integrate advanced features seamlessly into our existing setup was impressive. The final product exceeded our expectations and has been well-received by users. We look forward to future projects with him.",
    name: "Freedom Amos",
    title: "Senior Frontend Developer at Tech Savvy",
    imageUrl: "/user06.jpg",
    fallbackImageUrl: "/fallback.png",
    rating: 5,
  },
  {
    quote: "Working with Sixtus has greatly enhanced our data analysis tools. His tailored solutions have provided deeper insights and improved our overall decision-making process. His ability to understand and address our specific needs has been invaluable.",
    fullQuote: "Working with Sixtus has greatly enhanced our data analysis tools. His tailored solutions have provided deeper insights and improved our overall decision-making process. His ability to understand and address our specific needs has been invaluable. We are very satisfied with the efficiency and effectiveness of his work.",
    name: "James Markson",
    title: "Data Analyst at Tech Oil",
    imageUrl: "/user05.jpg",
    fallbackImageUrl: "/fallback.png",
    rating: 4,
  },
  {
    quote: "Sixtus’s contributions to our project have been outstanding. His ability to deliver high-quality results under tight deadlines is impressive. His work has significantly improved our workflow and productivity, and we appreciate his dedication and expertise.",
    fullQuote: "Sixtus’s contributions to our project have been outstanding. His ability to deliver high-quality results under tight deadlines is impressive. His work has significantly improved our workflow and productivity, and we appreciate his dedication and expertise. We are excited to see what he accomplishes in future projects.",
    name: "Daniel Donald",
    title: "Project Manager at Innovate Hub",
    imageUrl: "/user01.jpg",
    fallbackImageUrl: "/fallback.png",
    rating: 5,
  },
  {
    quote: "The level of professionalism and creativity Sixtus brings to his work is remarkable. His solutions have improved our systems' performance and user engagement. Sixtus is a valuable asset to any team and we look forward to collaborating with him again.",
    fullQuote: "The level of professionalism and creativity Sixtus brings to his work is remarkable. His solutions have improved our systems' performance and user engagement. Sixtus is a valuable asset to any team and we look forward to collaborating with him again. His attention to detail and commitment to excellence are truly commendable.",
    name: "Aondofa Jameson",
    title:"C.O.O at Fintech Innovations",
    imageUrl: "/profile02.jpeg",
    fallbackImageUrl: "/fallback.png",
    rating: 4,
  },
];

//============================ data/experienceData.js ============================//

export const experiences = [
  {
    date: "October 2024 - Present",
    title: "Tech Educator | Software Engineer",
    img: "/profile.jpg",
    organization: "Youtube",
    type: "Remote",
    nature: "Self Employed",
    location: "Online and Locally",
    description: "Creating educational content on software development and programming.",
    fullDesc: "Creating educational content on software development and programming, with a focus on web development, front-end and back-end technologies, and best practices. Developing tutorials, courses, and live streams to help learners build practical skills and advance their careers. Covering a wide range of topics, including JavaScript, React, Node.js, TypeScript, and more. Engaging with the community through live Q&A sessions, code reviews, and collaboration on open-source projects.",
    technologies: ["Angular", "JavaScript", "Java, Spring Boot, PostgreSQL, React", "Node.js", "TypeScript", "HTML", "CSS", "Git", "GitHub", "VS Code", "Figma", "Adobe XD", "Netlify", "Vercel", "Heroku", "Firebase", "MongoDB", "MySQL", "RESTful APIs", "GraphQL", "WebSockets", "PWA", "SEO", "Google Analytics", "Google Tag Manager", "Google Optimize", "Hotjar", "Figma", "Sketch", "InVision", "Jira", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva"],
  },  
  {
    date: "March 2023 - November 2024",
    title: "Software Engineer",
    img: "/profile.jpg",
    organization: "Upwork",
    type: "Remote",
    nature: "Contract",
    location: "United Kingdom",
    description: "Led the Design and implementation of software applications and APIs for clients across diverse industries.",
    fullDesc: "Led the Design and implementation of software applications and APIs for clients across diverse industries, including e-commerce, healthcare, and education. Collaborated with cross-functional teams to deliver high-quality products and services, leveraging agile methodologies and best practices. Conducted code reviews, implemented automated testing, and optimized application performance to ensure scalability and reliability. Contributed to the design and architecture of web applications, APIs, and databases, utilized modern technologies such as Java, Spring Boot, React, TypeScript, Node.js, MongoDB, Express, Apwrite and TypeScript.",
    technologies: ["Java", "Angular", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Next.js", "Node.js", "PHP", "MySQL", "Express", "Docker", "AWS", "Stripe", "OAuth", "RESTful APIs", "WebSockets", "Shadcn", "Framer-motion", "GitLab CI/CD", "GutHub", "Google Analytics", "Google Optimize", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Figma", "Aceternity UI", "Tailwindcss", "Appwrite", "Clerk"],
  },  
  {
    date: "June 2024 - September 2024",
    title: "Software Engineer",
    img: "/profile.jpg",
    organization: "SkilledUp Life",
    type: "Remote",
    nature: "Volunteer",
    location: "Ontario, Canada",  
    description: "Assisted in the implementation and development of enterprise ready software solutions for clients across various industries",
    fullDesc: "Assisted in developing enterprise-ready software solutions for clients across various industries, including e-commerce, healthcare, and education. Collaborated with cross-functional teams to deliver high-quality products and services, leveraging agile methodologies and best practices. Conducted code reviews, implemented automated testing, and optimized application performance to ensure scalability and reliability. Contributed to the design and architecture of web applications, APIs, and databases, utilized modern technologies such as Java, Spring Boot, Angular, Postgresql, React, Next.js, Node.js, MongoDB, Clerk, Appwrite and TypeScript.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular", "React", "Next.js", "Node.js", "MongoDB", "PHP", "MySQL", "Express", "TypeScript", "Tailwind CSS", "Firebase", "Clerk", "Appwrite", "Vercel", "AWS", "Aceternity UI", "Chakra", "RESTful APIs", "GraphQL", "WebSockets", "GitHub", "GitLab CI/CD", "OAuth",  "Google Analytics", "Google Tag Manager", "Google Optimize", "Hotjar", "Figma", "Adobe XD", "Sketch", "InVision", "Jira", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva", "Stripe", "tawk to"],
  },
  {
    date: "Feb 2020 - Feb 2023",
    title: "Full-stack Developer",
    img: "/profile.jpg",
    organization: "Upwork",
    type: "Remote",
    nature: "Contract",
    location: "United Kingdom",
    description: "Worked on web applications and APIs for clients across various industries",
    fullDesc: "Led the development of software solutions for clients across various industries, including e-commerce, healthcare, and education. Collaborated with cross-functional teams to deliver high-quality products and services, leveraging agile methodologies and best practices. Conducted code reviews, implemented automated testing, and optimized application performance to ensure scalability and reliability. Contributed to the design and architecture of web applications, APIs, and databases, utilizing modern technologies such as React, Next.js, Node.js, MongoDB, Clerk, Appwrite, Stripe, TypeScript and many more...",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Firebase", "Clerk", "Appwrite", "Vercel", "AWS", "MySQL", "Aceternity UI", "Chakra", "RESTful APIs", "GraphQL", "WebSockets", "GitHub", "GitLab CI/CD", "OAuth",  "Google Analytics", "Google Tag Manager", "Google Optimize", "Hotjar", "Figma", "Adobe XD", "Sketch", "InVision", "Jira", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva"],
  },
  {
    date: "Jan 2022 - Aug 2023",
    title: "Software Specialist",
    img: "/profile.jpg",
    organization: "Freelancer",
    type: "Remote",
    nature: "Contract",
    location: "Stockholm County, Sweden",
    description: "Contributed to the development and maintenance of software solutions for clients across diverse industries",
    fullDesc: "Assisted in performing software development tasks, including coding, testing, debugging, and maintenance. Collaborated with team members to design and implement software solutions that met client requirements and specifications. Utilized agile methodologies to deliver high-quality products within project timelines. Conducted code reviews, identified bugs and issues, and implemented fixes to ensure optimal performance. Developed web applications, APIs, and databases using modern technologies such as React, Node.js, MongoDB and TypeScript.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS", "Firebase", "Aceternity UI", "Vercel", "AWS", "Docker", "Kubernetes", "Jenkins", "GitHub", "GitLab CI/CD", "OAuth", "JWT", "RESTful APIs", "PostgreSQL", "GraphQL", "WebSockets", "Oracle", "PWA", "SEO", "Google Analytics", "Google Tag Manager", "Google Optimize", "Hotjar", "Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Jira", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Asana", "Monday.com", "Airtable", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Asana", "Monday.com", "Airtable", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva"],
  },
];

//================================== Education data ==============================//
export const education = [
  {
    degree: "Advanced Diploma in Software Engineering",
    institution: "AltSchool Africa",
    date: "August 2023 - August 2024",
    type: "Full-time",
    description: "Specialized in Software Engineering - MEAN stack, MERN stack, and more... Relevant Coursework: Data Structures & Algorithms, Operating Systems, Artificial Intelligence, Agile Development, Cloud Computing, Software Security, and Web Development.",
    status: "Graduated - Certified",
    img: '/certificates/altschool-software-engineering-cert.jpg'
  },
  {
    degree: "Diploma in DevOps Engineering",
    institution: "Alison Institute",
    date: "2021 - 2022",
    type: "Full-time",
    description: "Specialized in DevOps engineering - Kubernetes, Docker, Google-cloud CI/CD pipelines and automation. Relevant Coursework: Docker, Kubernetes, Google Cloud Platform, Agile Project Management, CI/CD Pipelines, Microservices, Infrastructure as Code (IaC), and DevSecOps.",
    status: "Graduated - Certified",
    img: '/certificates/cert01.jpg'
  },
  {
    degree: "Diploma in Software Project Management", 
    institution: "Alison Institute",  
    date: "2019 - 2020",
    type: "Full-time",
    description: "Specialized in software development project management - Agile, Scrum, Kanban, and more... Relevant Coursework: Agile Project Development, Software Development Life Cycle (SDLC), Risk Management, Scrum Methodology, Software Estimation Techniques, and IT Governance.",
    status: "Graduated - Certified",
    img: '/certificates/cert02.png'
  },
  {
    degree: "SSCE Certificate in Sciences", 
    institution: "Christ the King College (CKC)",  
    date: "2011 - 2016",
    type: "Full-time",
    description: "Specialized in Sciences - Physics, Chemistry, Biology, Mathematics, and more...",
    status: "Graduated - Certified",
    img: '/certificates/ckc-cert.jpg'
  },
  {
    degree: "First School Leaving Certificate (FSLC)", 
    institution: "Unity Nursery and Primary School",  
    date: "2000 - 2009",
    type: "Full-time",
    description: "Specialized in Sciences - Computer Science, Physical Health Education, , Quantitative Reasoning, Verbal Reasoning and more...",
    status: "Graduated - Certified",
    img: '/certificates/cert.png'
  },
];

//================================= Services data  ================================//
export const services: Service[] = [
  {
    id: 1,
    title: "User Registration and Authentication",
    desc: "Secure and efficient user registration and authentication solutions utilizing modern technologies.",
    detailedDesc: {
      paragraphs: [
        "Implement robust authentication systems leveraging industry-standard protocols such as OAuth and JWT to ensure secure and seamless user onboarding.",
        "My solutions encompass email verification, multi-factor authentication, and social media logins, providing a comprehensive approach to user security and convenience.",
        "Custom user management dashboards and integrations with leading platforms like Firebase, Appwrite, Auth0, or bespoke backends are included."
      ],
      images: [
        {
          src: "/authentication02.png",
          alt: "User Management Dashboard"
        },
        {
          src: "/authentication.jpg",
          alt: "Multi-Factor Authentication"
        }
      ],
      textDesc: [
        "In an era where cyber threats are ever-present, implementing robust security measures is crucial. OAuth, a widely recognized standard for secure access delegation, ensures that sensitive credentials are not exposed. By utilizing access tokens, OAuth minimizes the risk of unauthorized access.",
        "JWTs (JSON Web Tokens) provide a secure mechanism for transmitting information, with built-in data integrity and authenticity through digital signatures. This enhances security and mitigates data tampering risks.",
        "Adopting OAuth and JWT protocols helps safeguard user data and fosters trust by enhancing security and protecting privacy."
      ],
      icons: [
        {
          src: "/OAuth01.png",
          alt: "OAuth Icon"
        },
        {
          src: "/OAuth02.png",  
          alt: "JWT Icon"
        }
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Content Creation and Publishing",
    desc: "Advanced platforms for creating and publishing dynamic content with ease.",
    detailedDesc: {
      paragraphs: [
        "Design and develop content creation platforms that empower users to create, edit, and publish content effortlessly.",
        "Specializing in WYSIWYG editors, markdown editors, and custom CMS solutions tailored for scalability and user-friendliness.",
        "Whether it's a blogging platform, a publication site, or a comprehensive CMS, my solutions are designed to enhance usability and scalability."
      ],
      images: [
        {
          src: "/content03.jpg",
          alt: "Content Creation Platform"
        },
        {
          src: "/creation.jpg",
          alt: "WYSIWYG Editor"
        }
      ],
      textDesc: [
        "Create intuitive interfaces that support rich text formatting, image embedding, and media integration for a seamless content creation experience.",
        "Implement features like version control, draft management, and live previews to streamline content publishing and enhance user engagement.",
        "Provide customizable templates and themes to improve content presentation and overall user interaction."
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Personalized Content Discovery",
    desc: "Advanced algorithms and AI-driven recommendations for tailored content discovery.",
    detailedDesc: {
      paragraphs: [
        "Utilize advanced algorithms and AI to deliver personalized content recommendations based on user behavior, preferences, and interactions.",
        "Develop recommendation engines that enhance user engagement by suggesting relevant articles, videos, and media tailored to individual tastes.",
        "Enhance user engagement by helping them discover new and exciting content tailored to their preferences."
      ],
      images: [
        {
          src: "/content.jpg",
          alt: "Content Discovery"
        },
        {
          src: "/AI.png",
          alt: "AI Recommendation Engine"
        }
      ],
      textDesc: [
        "Leverage machine learning models to analyze user preferences and predict relevant content, enhancing the discovery experience.",
        "Integrate real-time data processing for up-to-date recommendations based on user activity and interactions.",
        "Design user-friendly interfaces that facilitate seamless content discovery and interaction."
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Social Interactions",
    desc: "Enhance user engagement with advanced social interaction features.",
    detailedDesc: {
      paragraphs: [
        "Integrate features such as comments, likes, and shares to foster community building and user engagement.",
        "Create scalable solutions for real-time comment systems, content moderation, and social media integration.",
        "Ensure seamless connectivity and interaction among users to enhance their overall experience."
      ],
      images: [
        {
          src: "/interaction02.jpg",
          alt: "Social Interactions"
        },
        {
          src: "/interaction.jpg", 
          alt: "Comment System"
        }
      ],
      textDesc: [
        "Implement interactive features like comments, likes, and shares to boost user participation and community engagement.",
        "Provide real-time updates and notifications to keep users engaged and informed about ongoing interactions.",
        "Incorporate moderation tools to effectively manage and filter user-generated content."
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
];

// Resume Data
export const cvImages = 
[

  "/certificates/sixtus-resume-page1.jpg",
  "/certificates/sixtus-resume-page2.jpg",
  "/certificates/sixtus-resume-page3.jpg",

];

//============================= Project data ====================================//

export const projects = [
  {
    id: 1,
    title: "Yahut - A Housing Estate application using Angular",
    des: "Explore the latest housing estates with this web application. Discover your dream home with ease.",
    img: "/housing-application.jpg",
    iconLists: [SiAngular, FaHtml5, SiTypescript, FaCss3Alt],
    link: "https://angular-housing-website.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Angular-housing-website",
  },
  {
    id: 2,
    title: "MoniWalet - A currency converter Application",
    des: "Convert currencies with ease using MoniWalet. Stay updated with the latest exchange rates and trends.",
    img: "/moniwalet.jpg",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://moniwalet.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Currency-converter-application/",
  },
  {
    id: 3,
    title: "Milliseco - A Luxurious Wrist Watch Landing Page",
    des: "Create a lasting impression with this elegant landing page. Showcase your products and services with style.",
    img: "/landing-page.jpg",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://landing-page-zeta-orpin.vercel.app",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Shopping-website",
  },
  {
    id: 4,
    title: "Microsoft - The Official Microsoft Home Page",
    des: "Experience the latest Microsoft products and services with this interactive home page. Stay up-to-date with the latest tech trends.",
    img: "/microsoft-home.jpg",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://microsoft-home.vercel.app",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Microsoft-home",
  },
  {
    id: 5,
    title: "DevJourney - A full-stack blog application for developers and tech enthusiasts",
    des: "Share your coding journey with the world using this blog application. Connect with like-minded developers and tech enthusiasts.",
    img: "/project19.jpg",
    iconLists: [SiNextdotjs, SiTailwindcss, SiTypescript, SiSanity],
    link: "https://devjourney-blog-khaki.vercel.app/",
    category: "Fullstack",
    githubLink: "https://github.com/sixtusdeveloper/Devjourney-blog-application",
  },
  {
  id: 6,
  title: "Sixtusdev - A Web Designer Portfolio Website",
  des: "Showcase your projects and skills with this elegant portfolio app. Impress potential clients and employers.",
  img: "/project04.avif",
  iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
  link: "https://frontend-portfolio-app.vercel.app/",
  category: "Frontend",
  githubLink: "https://github.com/sixtusdeveloper/Frontend-portfolio-app/",
  },
  {
    id: 7,
    title: "Chatter - A Real-time Chat Editor with Live collaborative features",
    des: "Enhance your team's productivity with Chatter Editor. Collaborate on documents in real-time with ease.",
    img: "/project03.avif",
    iconLists: [SiNextdotjs, SiTailwindcss, SiTypescript, SiGraphql],
    link: "https://chattereditor.vercel.app/",
    category: "Fullstack",
    githubLink: "https://github.com/sixtusdeveloper/Chatter-editor",
  },
  {
  id: 8,
  title: "TaskMater - A Task Management Application",
  des: "Manage your team's tasks efficiently with TaskMaster. Assign, track, and complete tasks with ease.",
  img: "/taskmaster.jpg",
  iconLists: [SiAngular, FaJava, SiTypescript, SiMysql, SiSpringboot],
  link: "",
  category: "Fullstack",
  githubLink: "https://github.com/sixtusdeveloper/Task-manager-backend",
  },
  {
  id: 9,
  title: "Sixtudev - A Frontend Portfolio Website",
    des: "A Frontend Portfolio Website showcasing my projects and skills. Impress potential clients and employers.",
    img: "/project18.avif",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://frontend-portfolio-website-nw6q.vercel.app",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Frontend-portfolio-website",
  },
  {
    id: 10,
    title: "FodyCafe - An Online Food Delivery Website",
    des: "Order your favorite meals with ease using this food delivery website. Discover new cuisines and flavors.",
    img: "/project07.avif",
    iconLists:  [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://restaurant-website-jet-kappa.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Restaurant-website/",
  },
  {
    id: 11,
    title: "SwiftPay - A Payment Gateway Integration Website",
    des: "Experience seamless online payments with SwiftPay. Securely process transactions and manage payments with ease.",
    img: "/swiftpay.jpg",
    iconLists: [SiAngular, FaJava, SiTypescript, SiMysql, SiSpringboot],
    link: "",
    category: "Fullstack",
    githubLink: "https://github.com/sixtusdeveloper/Banking_system-REST-API",
  },
  {
    id: 12,
    title: "StaffSync - An Employee Management Application",
    des: "Streamline your HR processes with StaffSync. Manage employee data, schedules, and payroll efficiently.",
    img: "/staffsync.jpg",
    iconLists: [SiAngular, FaJava, SiTypescript, SiPostgresql, SiSpringboot],
    link: "",
    category: "Fullstack",
    githubLink: "https://github.com/sixtusdeveloper/Employee-management-system_REST_API",
  },
  {
    id: 13,
    title: "Chatbook - A Social media frontend website",
    des: "Connect with friends and family using this social media chat application. Share updates and stay connected.",
    img: "/project16.jpg",
    iconLists:  [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://frontend-chatbook-app.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Frontend-chatbook-app/",
  },
  {
    id: 14,
    title: "Sixtusdev - A Frontend personal portfolio website",
    des: "Showcase your projects and skills with this elegant portfolio website. Impress potential clients and employers.",
    img: "/project11.avif",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://frontend-portfolio-website-liart.vercel.app/",
    cetegory: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Frontend-portfolio-website/",
  },
  {
    id: 15,
    title: "Sixtusdev - A Frontend Developer Portfolio Website",
    des: "Secure your applications with this user-friendly login system app. Protect user data and enhance security.",
    img: "/portfolio-v1.jpg",
    iconLists: [SiNextdotjs, SiTailwindcss, SiTypescript, FaHtml5],
    link: "",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/My-Portfolio-Website/",
  },
  {
    id: 16,
    title: "Sixtusdev - A Developer professional portfolio website v2",
    des: "Showcase your projects and skills with this professional portfolio website. Impress potential clients and employers.",
    img: "/myportfolio.jpg",
    iconLists: [SiNextdotjs, SiTailwindcss, SiTypescript, FaHtml5],
    link: "https://my-portfolio-dusky-tau.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Portfolio/",
  }, 
  {
    id: 17,
    title: "Sixtusdev - A Personal Logo design Website",
    des: "Create a lasting impression with this personal brand website. Showcase your skills and achievements.",
    img: "/project18.jpg",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://personal-brand-two.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Personal-brand-website",
  },
  {
    id: 18,
    title: "A Photo Image Loader App",
    des: "A Photo Image Loader App that loads images from an API and displays them in a grid layout.",
    img: "/project14.avif",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://image-loader-plt1a1zou-sixtus-projects.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Image-Loader-App/",
  },
  {
    id: 19,
    title: "A Frontend Login System App",
    des: "Secure your applications with this user-friendly login system app. Protect user data and enhance security.",
    img: "/project17.jpg",
    iconLists: [FaJsSquare, FaHtml5, FaCss3Alt],
    link: "https://login-system-app-vz4r.vercel.app/",
    category: "Frontend",
    githubLink: "https://github.com/sixtusdeveloper/Login-System-App/",
  },
];
