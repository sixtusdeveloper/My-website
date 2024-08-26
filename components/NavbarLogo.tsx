import Image from 'next/image';

interface LogoProps {
  src?: string;
  alt: string;
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, title }) => (
  <a href="/" className="-m-1.5 p-1.5 flex justify-center items-center gap-2">
    <Image
      src={src || "/Logo-icon.png"}
      alt={alt}
      width={30}
      height={30}
      style={{ width: 'auto', height: 'auto' }}
      priority={true}
    />
    <span className="tracking-wider font-medium text-sm">{title}</span>
  </a>
);
