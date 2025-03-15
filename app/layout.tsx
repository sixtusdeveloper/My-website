import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

// ✅ Move metadata configuration here
export const metadata: Metadata = {
  title: "Sixtusdev - Innovative Solutions by Sixtus Aondoakaa",
  description:
    "Sixtus's personal website showcasing expertise in React, Next.js, TypeScript, and more. Explore projects, insights, and a dedication to crafting user-centric digital experiences.",
  keywords: [
    "Sixtus",
    "Sixtusdev",
    "Sixtus Aondoakaa",
    "software engineer",
    "Aondoakaa",
    "web development",
    "web design",
    "Tech",
    "React.js",
    "React",
    "Next.js",
    "TypeScript",
    "technology",
    "projects",
  ],
  openGraph: {
    title: "Sixtusdev - Innovative Solutions by Sixtus Aondoakaa",
    description:
      "Explore Sixtusdev, the personal website of Sixtus Aondoakaa, a skilled software engineer specializing in React, Next.js, and more. Discover innovative projects and technical insights.",
    url: "https://sixtusdev.net",
    images: "https://sixtusdev.net/images/og-image.jpg",
    type: "website",
  },
};

// ✅ Move viewport and themeColor here
export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
});

export const generateThemeColor = () => "#3371FF";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        variables: {
          colorPrimary: "#3371FF",
          fontSize: "16px",
        },
        elements: {
          button: { padding: "10px 2px" },
          formFieldInput: {
            borderRadius: "6px !important",
            borderColor: "#333 !important",
            padding: "10px !important",
            backgroundColor: "#ffffff !important",
            color: "#333 !important",
          },
        },
      }}
    >
      <html lang="en">
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
