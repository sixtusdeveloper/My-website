import Image from 'next/image';

interface LogoProps {
  src?: string;
  alt: string;
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, title }) => (
  <a href="/" className="-m-1.5 p-1.5 flex justify-center items-center gap-1">
    <Image
      src={src || "/Logo-icon.png"}
      alt={alt}
      width={30}
      height={30}
      style={{ width: 'auto', height: 'auto' }}
      priority={true}
    />
    <span className='self-center mx-1 py-1 px-3 bg-gradient-to-r from-indigo-600 via-blue-500 to-pink-800 rounded-lg text-white'>
      {title}
    </span>
  </a>
);
