// data/certificationsData.ts

export interface Certification {
  title: string;
  institution: string;
  year: string; 
  desc?: string
  certUrl: string;
  imageUrl: string; // Added image URL
}

export const certificationsData: Certification[] = [
  {
    title: 'AWS Cloud Practitioner',
    institution: 'Great Learning',
    year: '2022 - 2022',
    desc: 'This certification demonstrates a foundational understanding of AWS Cloud services, their core principles, and their benefits. It covers basic cloud concepts, AWS services, security, and architecture, preparing individuals for more advanced AWS certifications.',
    certUrl: '/certificates/cert04.png',
    imageUrl: '/certificates/aws-cloud-practitioner-logo.png', // Image URL
  },
  {
    title: 'IT Management - Software and Databases',
    institution: 'Alison Institute',
    year: '2022 - 2022',
    desc: 'This certification focuses on IT management practices for software and databases. It covers software development methodologies, database management systems, and strategies for effective IT management, equipping professionals with skills to oversee IT projects and systems.',
    certUrl: '/certificates/cert05.png',
    imageUrl: '/certificates/it-management-logo.png', // Image URL
  },
  {
    title: 'Responsive Web Design',
    institution: 'FreeCodeCamp',
    year: '2022 - 2022',
    desc: 'This certification demonstrates proficiency in creating responsive web designs. It includes skills in HTML, CSS, Flexbox, and Grid, ensuring websites function effectively across various devices and screen sizes, and adheres to modern web design principles.',
    certUrl: '/certificates/cert03.png',
    // certUrl: '/certificates/responsive-web-design.pdf',
    imageUrl: '/certificates/responsive-web-design-logo.png', // Image URL
  },
  {
    title: 'Full-Stack Web Development',
    institution: 'Udemy',
    year: '2024 - 2024',
    desc: 'This certification demonstrates a comprehensive understanding of both front-end and back-end web development. It covers core technologies such as HTML, CSS, JavaScript, and modern frameworks like React for front-end, as well as server-side technologies like Node.js, Express, and databases (SQL/NoSQL). The certification also includes knowledge of RESTful APIs, version control (Git), and deployment practices, enabling individuals to build and maintain fully functional, scalable web applications.',
    certUrl: '/certificates/cert.png',
    imageUrl: '/certificates/full-stack-web-development-logo.png', // Image URL
  },
];
