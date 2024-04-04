import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <a aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          className="h-6 w-auto"
          alt="Logo"
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  );
};

export default Logo;
