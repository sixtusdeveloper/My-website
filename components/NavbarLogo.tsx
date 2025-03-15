"use client"; // Required in Next.js App Router

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LogoProps {
  src?: string;
  alt: string;
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, title }) => {
  const router = useRouter(); // ✅ Hook inside function body

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        navigateToHome();
      }}
      className="flex gap-2 justify-center items-center"
    >
      <Image
        src={src || "/Logo.png"}
        alt={alt}
        width={24}
        height={24}
        style={{ width: "auto", height: "auto" }}
        priority={true}
      />
      <span className="self-center text-sm font-bold tracking-wide bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 uppercase text-transparent bg-clip-text">
        {title}
      </span>
    </Link>
  );
};
