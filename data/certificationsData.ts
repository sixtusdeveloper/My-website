// data/certificationsData.ts

export interface Certification {
  title: string;
  institution: string;
  year: string;
  certUrl: string;
  imageUrl: string; // Added image URL
}

export const certificationsData: Certification[] = [
  {
    title: 'Google Cloud Professional',
    institution: 'Google Cloud',
    year: '2021 - 2022',
    certUrl: '/certificates/google-cloud-professional.pdf',
    imageUrl: '/certificates/cert-logo.png', // Image URL
  },
  {
    title: 'Microsoft Azure Fundamentals',
    institution: 'Microsoft',
    year: '2022 - 2023',
    certUrl: '/certificates/microsoft-azure-fundamentals.pdf',
    imageUrl: '/certificates/cert-logo.png', // Image URL
  },
  {
    title: 'FreeCodeCamp - Responsive Web Design',
    institution: 'FreeCodeCamp',
    year: '2020 - 2021',
    certUrl: '/certificates/freecodecamp-web-design.pdf',
    imageUrl: '/certificates/cert-logo.png', // Image URL
  },
  {
    title: 'Udemy - Full-stack Developer',
    institution: 'Udemy',
    year: '2021 - 2022',
    certUrl: '/certificates/udemy-fullstack-developer.pdf',
    imageUrl: '/certificates/cert-logo.png', // Image URL
  },
  {
    title: 'Udemy - Full-stack Developer',
    institution: 'Udemy',
    year: '2021 - 2022',
    certUrl: '/certificates/udemy-fullstack-developer.pdf',
    imageUrl: '/certificates/cert-logo.png', // Image URL
  },
  {
    title: 'Udemy - Full-stack Developer',
    institution: 'Udemy',
    year: '2021 - 2022',
    certUrl: '/certificates/udemy-fullstack-developer.pdf',
    imageUrl: '/certificates/cert-logo.png', // Image URL
  },
  {
    title: 'Udemy - Full-stack Developer',
    institution: 'Udemy',
    year: '2021 - 2022',
    certUrl: '/certificates/udemy-fullstack-developer.pdf',
    imageUrl: '/certificates/cert-logo.png', // Image URL
  },
];
