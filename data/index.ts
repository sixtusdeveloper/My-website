import { Dialog } from "@headlessui/react";
// import { SiNextdotjs, SiTailwindcss, SiTypescript, SiThreedotjs, SiReact, SiC } from "react-icons/si";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiSanity,
  SiSpringboot,
  SiAngular,
} from "react-icons/si";


//============================= Home Page Navigation links ============================//
export const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#clients' },
    { name: 'Projects', href: '#projects' },
    { name: 'E-Books', href: '#e-books' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];
  
//============================= Terms & Consitions Navigation links ============================//
export const termsConditionsNavigation = [
    { name: 'About', href: '/pages/terms_condition' },
    { name: 'Services', href: '/pages/privacy_policy' },
  ];
  
//============================= Gallery Page Navigation links ============================//
export const GallerysNavLinks = [
  { name: 'Personal Life', href: '#personal-life' },
    { name: 'Tech Events', href: '#tech-events' },
    { name: 'Social Life', href: '#social-life' },
  ];
  
// Portfolio Nav Links
export const portfolioNavLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'React Out', href: '#get-in-touch' },
  ]; 

// Materials Nav Links
export const MaterialsNavLinks = [
    { name: 'Library', href: '#library' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'My Blog', href: '#my-blog' },
    { name: 'Featured Resources', href: '#featured-resources' },
  ]; 

//======================= Blog Posts ==========================//
  export const blogPosts = [
    {
      id: 1,
      title: "Introduction to React: Building Modern Web Applications",
      description: `
        React is a popular JavaScript library used for building dynamic and interactive user interfaces.
  
        React is a popular JavaScript library used for building dynamic and interactive user interfaces. Created by Facebook in 2013, React has become a go-to tool for developers worldwide, thanks to its flexibility, efficiency, and developer-friendly features.

        **Why React? React stands out for several reasons:**
  
        - Component-Based Architecture React applications are built using reusable components, which makes code easier to manage, debug, and scale.
  
        - Virtual DOM React uses a Virtual DOM to efficiently update and render changes to the user interface, improving performance.
  
        - Rich Ecosystem **With a vast community, React offers numerous libraries, tools, and integrations to enhance development workflows.
        - JSX Syntax React uses JSX, a syntax that allows you to write HTML-like code within JavaScript, making UI development intuitive and clean.
        - Getting Started with React To start building with React, you’ll need Node.js installed. You can create a React app using the following command:
      `,
      iconLists: [FaReact, FaJsSquare, SiNextdotjs, SiTypescript],
      imageUrl: "/blog01.avif",
      _createdAt: "December 11, 2024",
      readingTime: "19 sec read",
      category: "react.js",
      views: "34",
      author_name: "Sixtus Aondoakaa",
      author_profile: "/profile-img.png",
      url: "https://devjourney-blog-khaki.vercel.app/post/sn5Y802DZciFXniDNzEdWS",
    },
    {
      id: 2,
      title: "Mastering Next.js Routing: A Comprehensive Guide to Building Dynamic Web Applications",
      description: `
       Routing is a fundamental aspect of web development, determining how users navigate through your application. Next.js, a React-based framework, simplifies routing with its file-based system and dynamic routing capabilities. This guide delves into Next.js routing, from the basics to advanced features, helping you create a seamless user experience.
  
        **Introduction to File-Based Routing**
  
        - **Next.js automatically generates routes based on the file structure in the pages directory.

        - **Dynamic Routing:** Next.js supports dynamic routes, enabling you to create dynamic pages with URL parameters.
  
        - **Introduction to Hooks:** A detailed explanation of React Hooks, including useState, useEffect, and custom hooks. We discuss how Hooks simplify state management and component logic compared to class-based components.
  
        - **Future of React:** Insights into upcoming features and advancements in React. This section explores how Hooks and other features will continue to influence React's development.
      `,
      iconLists: [SiNextdotjs, FaReact, FaJsSquare, SiTypescript],
      imageUrl: "/blog02.avif",
      _createdAt: "November 3, 2024",
      readingTime: "16 sec read",
      category: "next.js",
      views: "90",
      author_name: "Sixtus Aondoakaa",
      author_profile: "/profile-img.png",
      url: "https://devjourney-blog-khaki.vercel.app/post/25fa7b97-7f3f-4b0e-9d27-705ebc0bb28f",
    },
    {
      id: 3,
      title: "Understanding React Hooks: A Comprehensive Guide to State and Side Effects",
      description: `
        React Hooks are one of the most powerful and popular features introduced in React 16.8.** Understanding React Hooks: A Comprehensive Guide React Hooks are one of the most powerful and popular features introduced in React 16.8. They allow developers to use state and other React features in functional components without the need for writing class components. Hooks simplify the codebase, enhance reusability, and make React development more intuitive.
  
        - What Are React Hooks? Hooks are special functions that let you "hook into" React features such as state and lifecycle methods directly in functional components. Commonly used hooks include.useState, useEffect, useContext, and custom hooks.
      `,
      imageUrl: "/blog03.avif",
      _createdAt: "March 9, 2024",
      readingTime: "18 sec read",
      category: "react.js",
      views: "77",
      author_name: "Sixtus Aondoakaa",
      author_profile: "/profile-img.png",
      url: "https://devjourney-blog-khaki.vercel.app/post/TWryEU74aunIsETY7eKYVy",
    },
    {
      id: 4,
      title: "How to Use Angular CLI with Spring Boot: A Detailed Guide Share Your Thoughts",
      description: `
        **Integrating Angular CLI with Spring Boot allows you to build powerful, full-stack applications efficiently. Angular handles the front end, while Spring Boot takes care of the back end. This guide will walk you through the steps to set up and connect these two technologies seamlessly.
  
        - Integrating Angular CLI with Spring Boot allows you to build powerful, full-stack applications efficiently. Angular handles the front end, while Spring Boot takes care of the back end. This guide will walk you through the steps to set up and connect these two technologies seamlessly.
  
        - **Why Combine Angular CLI with Spring Boot? Using Angular and Spring Boot together provides a robust solution for web development:

        - **Setting Up Angular CLI:** A step-by-step guide to installing Angular CLI and creating a new Angular project. This section covers the basic commands and project structure.
  
        - **Angular CLI** offers powerful tools for building dynamic, single-page applications. *** Spring Boot** simplifies the development of back-end APIs with Java.

        - **Connecting Angular CLI with Spring Boot:** Learn how to connect the Angular front end with the Spring Boot back end. This section covers CORS configuration, RESTful API development, and proxy setup.
      `,
      iconLists: [SiAngular, SiSpringboot, FaJava, SiTypescript],
      imageUrl: "/blog04.avif",
      _createdAt: "December 24, 2024",
      readingTime: "9 sec read",
      category: "angular",
      views: "89",
      author_name: "Sixtus Aondoakaa",
      author_profile: "/profile-img.png",
      url: "https://devjourney-blog-khaki.vercel.app/post/c620b9c8-b8bb-412c-aa62-f32655116a9a",
    },
    {
      id: 5,
      title: "How to Kickstart Your Tech Journey in 2025 Without a University Degree",
      description: `
        Breaking into the tech industry has never been more accessible. In 2025, the path to becoming a tech professional is no longer confined to university degrees. With the abundance of online resources, practical tools, and a thriving community, you can launch your career in tech on your own terms. Here’s a step-by-step guide to getting started:
  
        **How to Kickstart Your Tech Journey in 2025 Without a University Degree Breaking into the tech industry has never been more accessible. In 2025, the path to becoming a tech professional is no longer confined to university degrees. With the abundance of online resources, practical tools, and a thriving community, you can launch your career in tech on your own terms. Here’s a step-by-step guide to getting started:**
  
        - Choose Your Tech Path The tech industry is vast, offering opportunities in various domains such as web development, data science, cybersecurity, and more. Identify your interests and choose a tech path that aligns with your goals.
  
        - Web Development (Frontend, Backend, or Full Stack) Data Science and Analytics Mobile App Development Cybersecurity Cloud Computing UI/UX Design Artificial Intelligence and Machine Learning Start by researching these fields to identify one that aligns with your interests, skills, and long-term goals.
  
        - Leverage Free and Affordable Learning Platforms In 2025, there’s no shortage of high-quality online courses and tutorials. Here are some resources to get you started: FreeCodeCamp: Offers free coding tutorials, projects, and certifications in web development, data science, and more.
      `,
      iconLists: [SiNextdotjs, FaReact, FaJsSquare, SiTypescript],
      imageUrl: "/blog05.avif",
      _createdAt: "January 22, 2025",
      readingTime: "10 sec read",
      category: "career",
      views: "58",
      author_name: "Sixtus Aondoakaa",
      author_profile: "/profile-img.png",
      url: "https://devjourney-blog-khaki.vercel.app/post/9800660d-1313-41a3-bce8-e6ee8d9b9f88",
    },
    {
      id: 6,
      title: "A Beginner's Guide to React: Building Dynamic User Interfaces",
      description: `
        **React is one of the most popular JavaScript libraries for building user interfaces. Developed by Facebook, it has become a go-to tool for developers due to its flexibility, component-based architecture, and efficient rendering. Read mor about this post
  
        **In this article, we cover:**

        - React is one of the most popular JavaScript libraries for building user interfaces. Developed by Facebook, it has become a go-to tool for developers due to its flexibility, component-based architecture, and efficient rendering.
  
        - **What is React?** 
        React is a library that allows developers to create reusable UI components. It uses a declarative syntax, meaning you describe what you want your UI to look like, and React takes care of updating the DOM to match..
  
        - **Why Use React?** React offers several advantages for front-end development, including:

        Component-Based Architecture: Break down your UI into smaller, reusable components, making your code more modular and easier to maintain..
      `,
      iconLists: [FaReact, FaJsSquare, SiNextdotjs, SiTypescript],
      imageUrl: "/blog06.avif",
      _createdAt: "Feb 26, 2024",
      readingTime: "8 sec read",
      category: "react.js",
      views: "34",
      author_name: "Sixtus Aondoakaa",
      author_profile: "/profile-img.png",
      url: "https://devjourney-blog-khaki.vercel.app/post/ccd61d0b-167a-4120-a4e8-4f8251d99365",
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

//============================ Work Experience Data ============================//

export const experiences = [
  {
    date: "October 2024 - Present",
    title: "Tech Educator | Software Engineer",
    img: "/profile-img.png",
    organization: "YouTube Channel",
    type: "Remote",
    nature: "Self Employed",
    location: "Online and Locally",
    description: "Creating educational content on software development and programming.",
    fullDesc: "Creating educational content on software development and programming, with a focus on web development, front-end and back-end technologies, and best practices. Developing tutorials, courses, and live streams to help learners build practical skills and advance their careers. Covering a wide range of topics, including JavaScript, React, Node.js, TypeScript, and more. Engaging with the community through live Q&A sessions, code reviews, and collaboration on open-source projects.",
    technologies: ["React", "Nextjs", "TypeScript", "Angular", "JavaScript", "HTML", "CSS", "Java", "Spring Boot", "PostgreSQL", "React", "Node.js", "Git", "GitHub", "VS Code", "Netlify", "Vercel", "Firebase", "MongoDB", "MySQL", "RESTful APIs", "GraphQL", "WebSockets"],
  },  
  {
    date: "March 2020 - Present",
    title: "Software Engineer",
    img: "/profile.jpg",
    organization: "Upwork",
    type: "Freelance",
    nature: "Contract",
    location: "Remote",
    description: "Develop custom, scalable and modern software web applications for clients both local and internation that serves their business and personal purposes",
    fullDesc: "Develop custom, scalable and modern software web applications for clients both local and international that serves their business and personal purposes.",
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "PHP", "Java", "Angular", "Spring Boot", "PostgreSQL", "MySQL", "Express", "Docker", "AWS", "Stripe", "OAuth", "RESTful APIs", "WebSockets", "Shadcn", "Framer-motion", "GitLab CI/CD", "GutHub", "Material UI", "Bootstrap", "Flowbite", "Aceternity UI", "Tailwindcss", "Appwrite", "Clerk"],
  },  
  {
    date: "April 2023 - June 2024",
    title: "Store Cashier",
    img: "/store-cashier.jpg",
    organization: "Drinks.ng",
    type: "Onsite",
    nature: "Contract",
    location: "Lagos, Nigeria",
    description:
      "Processed high-volume cash and digital transactions while ensuring accuracy and efficiency.",
    fullDesc:
      "Handled daily cash and card transactions with precision, assisted customers with purchases and payment inquiries, and updated sales records using POS and inventory systems. Provided financial reports to management while maintaining a professional and friendly customer service approach.",
    technologies: [
      "POS Systems",
      "Vendhq",
      "Cin7",
      "Slack",
      "Seamless HR",
      "WhatsApp",
      "Microsoft Excel",
      "Customer Relationship Management (CRM)",
      "Google Workspace",
      "Attention to Detail",
      "Customer Service",
    ],
  },
  {
    date: "March 2020 - Nov 2023",
    title: "Web Developer",
    img: "/profile.jpg",
    organization: "Upwork",
    type: "Freelance",
    nature: "Contract",
    location: "Remote",
    description:
      "Developed scalable, high-performance web applications for local and international clients across various industries.",
    fullDesc:
      "Designed and built full-stack solutions using modern frameworks like React, Next.js, and Spring Boot. Developed RESTful APIs, integrated third-party services like Stripe and AWS, and optimized applications for performance and security. Provided post-deployment support and technical consultation to ensure long-term client satisfaction.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PHP",
      "Java",
      "Angular",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "Express",
      "Docker",
      "AWS",
      "Stripe",
      "OAuth",
      "RESTful APIs",
      "WebSockets",
      "Shadcn",
      "Framer Motion",
      "GitHub Actions",
      "GitLab CI/CD",
      "Tailwind CSS",
      "Appwrite",
      "Clerk",
    ],
  },
  {
    date: "Jan 2019 - March 2023",
    title: "Administrative Assistant",
    img: "/office-assistant.jpg",
    organization: "Kropmann Communications Limited",
    type: "Onsite",
    nature: "Contract",
    location: "Lagos, Nigeria",
    description:
      "Provided administrative and clerical support while managing schedules and facilitating seamless communication.",
    fullDesc:
      "Coordinated office operations, scheduled meetings, handled correspondence, and managed document filing systems. Assisted in office administration, ensured smooth workflow, and utilized productivity tools to enhance operational efficiency.",
    technologies: [
      "Microsoft Office Suite",
      "Google Workspace",
      "Data Entry",
      "Scheduling",
      "Requisitions",
      "Microsoft Excel",
      "Power Point",
      "Microsoft Word",
      "Communication",
      "Organizational Skills",
      "Office Administration",
    ],
  },
  
];
//================================== Education data ==============================//
export const education = [
  {
    degree: "Advanced Diploma in Software Engineering",
    institution: "AltSchool Africa",
    date: "August 2023 - August 2024",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description: "Specialized in Software Engineering - MEAN stack, MERN stack, and more... Relevant Coursework: Data Structures & Algorithms, Operating Systems, Artificial Intelligence, Agile Development, Cloud Computing, Software Security, and Web Development.",
    status: "Graduated - Certified",
    img: '/certificates/altschool-software-engineering-cert.jpg'
  },
  {
    degree: "Diploma in DevOps Engineering",
    institution: "Alison Institute of Technology",
    date: "2021 - 2022",
    type: "Full-time",
    location: "Galway, Ireland",
    description: "Specialized in DevOps engineering - Kubernetes, Docker, Google-cloud CI/CD pipelines and automation. Relevant Coursework: Docker, Kubernetes, Google Cloud Platform, Agile Project Management, CI/CD Pipelines, Microservices, Infrastructure as Code (IaC), and DevSecOps.",
    status: "Graduated - Certified",
    img: '/certificates/cert01.jpg'
  },
  {
    degree: "Diploma in Software Project Management", 
    institution: "Alison Institute of Technology",  
    date: "2019 - 2020",
    type: "Full-time",
    location: "Galway, Ireland",
    description: "Specialized in software development project management - Agile, Scrum, Kanban, and more... Relevant Coursework: Agile Project Development, Software Development Life Cycle (SDLC), Risk Management, Scrum Methodology, Software Estimation Techniques, and IT Governance.",
    status: "Graduated - Certified",
    img: '/certificates/cert02.png'
  },
  {
    degree: "SSCE Certificate in Sciences", 
    institution: "Christ the King College (CKC)",  
    date: "2011 - 2016",
    type: "Full-time",
    location: "Benue, Nigeria",
    description: "Specialized in Sciences - Physics, Chemistry, Biology, Mathematics, and more...",
    status: "Graduated - Certified",
    img: '/certificates/ckc-cert.jpg'
  },
  {
    degree: "First School Leaving Certificate (FSLC)", 
    institution: "Unity Nursery and Primary School",  
    date: "2000 - 2009",
    type: "Full-time",
    location: "Benue, Nigeria",
    description: "Specialized in Sciences - Computer Science, Physical Health Education, , Quantitative Reasoning, Verbal Reasoning and more...",
    status: "Graduated - Certified",
    img: '/certificates/cert.png'
  },
];

//================================= Services data  ================================//
export interface Service {
  id: number;
  title: string;
  desc: string;
  detailedDesc: {
    paragraphs: string[];
    images: { src: string; alt: string }[];
    textDesc: string[];
    icons?: { src: string; alt: string }[];
  };
  className: string;
  thumbnail: string;
}

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

//=========================  Resume Data ================================//
export const cvImages = 
[

  "/certificates/Sixtus_Aondoakaa_Resume_page1.jpg",
  "/certificates/Sixtus_Aondoakaa_Resume_page2.jpg",
  "/certificates/Sixtus_Aondoakaa_Resume_page3.jpg",

];

//=========================== Hero Background Images Transitions ==================//
export const backgroundImages = [
  "/skillsbg.avif",
  "/skillbg.avif",
  "/blog06.avif",
  "/tech-event-bg.avif",
  "/blog03.avif",
  "/blog04.avif",
  "/blog05.avif",
  "/herobg-transition.avif",
  "/herobg-transition2.avif",
  "/herobg-transition3.webp",
  "/herobg-transition4.avif",
  "/herobg-transition5.avif",
  "/blog01.avif",
  "/social-bg.webp",
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
    videoUrl: "https://www.youtube.com/embed/KDdQAngnSmI?si=TFXr3u3QiOK_chLE",
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
    videoUrl: "videos/social-video1.mp4",
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
    videoUrl: "/videos/social-video2.mp4",
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
    videoUrl: "",
  },
  {
    id: 5,
    title: "DevJourney - A full-stack blog application for developers and tech enthusiasts",
    des: "Share your coding journey with the world using this blog application. Connect with like-minded developers and tech enthusiasts.",
    img: "/project19.jpg",
    iconLists: [SiNextdotjs, SiTailwindcss, SiTypescript, SiSanity, FaHtml5],
    link: "https://devjourney-blog-khaki.vercel.app/",
    category: "Fullstack",
    githubLink: "https://github.com/sixtusdeveloper/Devjourney-blog-application",
    videoUrl: "",
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
  iconLists: [SiAngular, FaJava, SiTypescript, SiMysql, SiSpringboot, FaHtml5, FaCss3Alt],
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
    img: "/project20.avif",
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
    iconLists: [SiAngular, FaJava, SiTypescript, SiMysql, SiSpringboot, FaHtml5, FaCss3Alt],
    link: "",
    category: "Fullstack",
    githubLink: "https://github.com/sixtusdeveloper/Banking_system-REST-API",
  },
  {
    id: 12,
    title: "StaffSync - An Employee Management Application",
    des: "Streamline your HR processes with StaffSync. Manage employee data, schedules, and payroll efficiently.",
    img: "/staffsync.jpg",
    iconLists: [SiAngular, FaJava, SiTypescript, SiPostgresql, SiSpringboot, FaHtml5, FaCss3Alt],
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

// Materials data 
export const materials = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    category: "JavaScript",
    pdfUrl: "/JavaScript-Fundamentals.pdf",
    docxUrl: "/JavaScript-Fundamentals.docx",
    icon: [FaJsSquare],
    desc: "An in-depth guide to JavaScript fundamentals.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "React Advanced Guide",
    category: "React",
    pdfUrl: "",
    docxUrl: "",
    icon: [FaReact],
    desc: "Advanced tips and tricks for mastering React.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Mastering TypeScript",
    category: "TypeScript",
    pdfUrl: "",
    docxUrl: "",
    icon: [SiTypescript],
    desc: "Best practices and tips for mastering TypeScript.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Mastering Next.js",
    category: "Next.js",
    pdfUrl: "",
    docxUrl: "",
    icon: [SiNextdotjs],
    desc: "Best practices and tips for mastering Next.js.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "Mastering Java",
    category: "Java",
    pdfUrl: "",
    docxUrl: "",
    icon: [FaJava],
    desc: "An in-depth guide to mastering Java for all levels.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Full-Stack Development",
    category: "Fullstack",
    pdfUrl: "",
    docxUrl: "",
    icon: [FaJsSquare, FaNodeJs, FaReact],
    desc: "An in-depth guide to Full-stack development for all levels.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "Data Structures & Algorithms",
    category: "CS Fundamentals",
    pdfUrl: "",
    docxUrl: "",
    icon: [FaCode],
    desc: "Data Structures and Algorithms for all levels.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Python for Beginners",
    category: "Python",
    pdfUrl: "",
    docxUrl: "",
    icon: [ SiPython],
    desc: "An in-depth guide to Python for all levels.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    title: "Node.js in Depth",
    category: "Node.js",
    pdfUrl: "",
    docxUrl: "",
    icon: [FaNodeJs],
    desc: "An in-depth guide to Node.js for all levels.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 10,
    title: "Advanced CSS Tricks",
    category: "CSS",
    pdfUrl: "",
    docxUrl: "",
    icon: [FaCss3Alt],
    desc: "CSS tricks and tips for all levels.",
    rating: "⭐⭐⭐⭐⭐",
  },
];
