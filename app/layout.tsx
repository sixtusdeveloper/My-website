// layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider'; 
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
          button: {
            padding: '10px 2px', 
          },
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
          <title>Sixtusdev</title>
          <meta name="description" content="Explore the personal website of Sixtus, a skilled Software Engineer specializing in [React - Next.js, Typescript, MongoDB, and much more]. Discover innovative projects, technical insights, and a commitment to creating impactful, user-focused applications. Let's build something great together." />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="theme-color" content="#3371FF" />
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

