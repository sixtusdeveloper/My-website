import Image from "next/image";

interface LogoProps {
  src?: string;
  alt: string;
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, title }) => (
  <a href="/" className="-m-1.5 p-1.5 flex gap-2 justify-center items-center">
    <Image
      src={src || "/Logo.png"}
      alt={alt}
      width={24}
      height={24}
      style={{ width: "auto", height: "auto" }}
      priority={true}
    />
    <span className="self-center text-sm font-bold bg-gradient-to-r from-blue-500 via-yellow-600 to-pink-500 uppercase text-transparent bg-clip-text">
      {title}
    </span>
  </a>
);
