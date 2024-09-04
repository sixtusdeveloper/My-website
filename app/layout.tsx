import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        variables: {
          colorPrimary: "#3371FF",
          fontSize: '16px'
        },
        elements: {
          button: { padding: '10px 2px' },
          formFieldInput: {
            borderRadius: '6px !important',
            borderColor: '#333 !important',
            padding: '10px !important',
            backgroundColor: '#ffffff !important',
            color: '#333 !important',
          },
        },
      }}
    >
      <html lang="en">
        <Head>
          <title>Sixtusdev - Innovative Solutions by Sixtus Aondoakaa</title>
          <meta name="description" content="Sixtus's personal website showcasing expertise in React, Next.js, TypeScript, and more. Explore projects, insights, and a dedication to crafting user-centric digital experiences." />
          <meta name="keywords" content="Sixtusdev, Sixtus Aondoakaa, software engineer, React, Next.js, TypeScript, technology, projects" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="theme-color" content="#3371FF" />
          <meta name="p:domain_verify" content="a51624116ed608eb81ef7d11dd0543df" />

          {/* Open Graph tags */}
          <meta property="og:title" content="Sixtusdev - Innovative Solutions by Sixtus Aondoakaa" />
          <meta property="og:description" content="Explore Sixtusdev, the personal website of Sixtus Aondoakaa, a skilled software engineer specializing in React, Next.js, and more. Discover innovative projects and technical insights." />
          <meta property="og:url" content="https://sixtusdev.net" />
          <meta property="og:image" content="https://sixtusdev.net/images/og-image.jpg" />
          <meta property="og:type" content="website" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sixtus Aondoakaa",
              "url": "https://sixtusdev.net",
              "description": "Sixtus Aondoakaa is a skilled software engineer specializing in React, Next.js, and more. Discover innovative projects and technical insights.",
              "sameAs": [
                "https://www.linkedin.com/in/sixtusushrey/",
                "https://github.com/sixtusdeveloper",
                "https://x.com/dev_elites",
              ]
            }
            `}
          </script>

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}













// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider"; 
// import { ClerkProvider } from "@clerk/nextjs";
// import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });
// const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider
//       publishableKey={publishableKey}
//       appearance={{
//         variables: { 
//           colorPrimary: "#3371FF", 
//           fontSize: '16px' 
//         },
//         elements: {
//           button: { padding: '10px 2px' },
//           formFieldInput: {
//             borderRadius: '6px !important',  
//             borderColor: '#333 !important',   
//             padding: '10px !important',       
//             backgroundColor: '#ffffff !important',
//             color: '#333 !important',        
//           },
//         },
//       }}
//     >
//       <html lang="en">
//         <Head>
//           <title>Sixtusdev</title>
//           <meta name="description" content="Sixtus's personal website showcasing expertise in React, Next.js, TypeScript, and more. Explore projects, insights, and a dedication to crafting user-centric digital experiences." />
//           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
//           <meta name="theme-color" content="#3371FF" />
//           <link rel="icon" href="/favicon.ico" />
//           <meta name="p:domain_verify" content="a51624116ed608eb81ef7d11dd0543df" />
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body className={inter.className}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
















// // layout.tsx
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from '@/components/theme-provider'; 
// import { ClerkProvider } from "@clerk/nextjs";
// import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });
// const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider
//       publishableKey={publishableKey}
//       appearance={{
//         variables: { 
//           colorPrimary: "#3371FF", 
//           fontSize: '16px' 
//         },
//         elements: {
//           button: {
//             padding: '10px 2px', 
//           },
//           formFieldInput: {
//             borderRadius: '6px !important',  
//             borderColor: '#333 !important',   
//             padding: '10px !important',       
//             backgroundColor: '#ffffff !important',
//             color: '#333 !important',        
//           },
//         },
//       }}
//     >
//       <html lang="en">
//         <Head>
//           <title>Sixtusdev</title>
//           <meta name="description" content="Explore the personal website of Sixtus, a skilled Software Engineer specializing in [React - Next.js, Typescript, MongoDB, and much more]. Discover innovative projects, technical insights, and a commitment to creating impactful, user-focused applications. Let's build something great together." />
//           <link rel="icon" href="/favicon.ico" />
//           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
//           <meta name="theme-color" content="#3371FF" />
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body className={inter.className}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

