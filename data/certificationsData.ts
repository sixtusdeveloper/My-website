// data/certificationsData.ts

export interface Certification {
    title: string;
    institution: string;
    year: string;
    certUrl: string;
  }
  
  export const certificationsData: Certification[] = [
    {
      title: 'Google Cloud Professional',
      institution: 'Google Cloud',
      year: '2021 - 2022',
      certUrl: '/certificates/google-cloud-professional.pdf',
    },
    {
      title: 'Microsoft Azure Fundamentals',
      institution: 'Microsoft',
      year: '2022 - 2023',
      certUrl: '/certificates/microsoft-azure-fundamentals.pdf',
    },
    {
      title: 'FreeCodeCamp - Responsive Web Design',
      institution: 'FreeCodeCamp',
      year: '2020 - 2021',
      certUrl: '/certificates/freecodecamp-web-design.pdf',
    },
    {
      title: 'Udemy - Full-stack Developer',
      institution: 'Udemy',
      year: '2021 - 2022',
      certUrl: '/certificates/udemy-fullstack-developer.pdf',
    },
  ];
  