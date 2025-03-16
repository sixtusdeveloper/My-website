// Types data for Services

export interface Service {
id: number;
title: string;
desc: string;
detailedDesc: {
    paragraphs: string[]; // Array of text paragraphs
    images: {
    src: string;
    alt: string;
    }[]; // Array of images with src and alt attributes
    textDesc: string[]; // Array of text paragraphs
    icons?: {
    src: string;
    alt: string;
    }[]; // Optional array of icons with src and alt attributes
    
};
className: string;
thumbnail: string;
}


// Types data for work experience
export interface WorkExperienceItem {
title: string;
organization: string;
type: string;
location: string;
date: string;
description: string;
img: string;
fullDesc: string;
technologies: string[];
nature: string;
};

  
// Type data for Education
// Define the type for education items
export interface EducationItem {
degree: string;
institution: string;
type: string;
location: string;
status: string;
date: string;
description: string;
img: string;
};

export interface BlogPost { 
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    diagramImageUrl: string;
    url: string;
}
