interface Tutorial {
  title: string;
  videoUrl: string;
  description: string;
}

export const tutorials: Tutorial[] = [
    {
      title: "Moniwalet - A currency conversion application for converting between different currencies",
      videoUrl: "https://www.youtube.com/embed/5pC1cvSvK8g?si=oKZ2kzgigHPCm8j4",
      description: "Moniwalet is a currency conversion application that allows users to convert between different currencies. It is built with React, Tailwind CSS, and the ExchangeRate-API.",
    },
    {
      title: "From Tech Enthusiast to Tech Educator: Step-by-Step Guide",
      videoUrl: "https://www.youtube.com/embed/KDdQAngnSmI?si=TFXr3u3QiOK_chLE",
      description: "In this video, I share my journey from being a tech enthusiast to becoming a tech educator. I also provide a step-by-step guide on how you can start your own tech education journey.",
    },
    {
      title: "Building a Tech Career Without a Degree: Your Journey Starts Here",
      videoUrl: "https://www.youtube.com/embed/XsWgiTAAroo?si=WhDOJwIXOlNwQQPv",
      description: "In this video, I discuss how you can build a successful tech career without a degree. I share my own experience and provide tips and resources to help you get started on your journey.",
    },

  ];
  