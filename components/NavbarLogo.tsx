import Image from "next/image";

interface LogoProps {
  src?: string;
  alt: string;
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, title }) => (
  <a href="/" className="-m-1.5 p-1.5 flex justify-center items-center">
    <Image
      src={src || "/Logo.png"}
      alt={alt}
      width={25}
      height={25}
      style={{ width: "auto", height: "auto" }}
      priority={true}
    />
    <span className="self-center ml-1 font-sans text-base font-semibold bg-gradient-to-r from-blue-500 via-yellow-500 to-pink-500 text-transparent bg-clip-text">
      {title}
    </span>
  </a>
);
