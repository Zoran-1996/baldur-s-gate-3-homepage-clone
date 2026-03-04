import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link href="/" className="header-logo relative" prefetch={false}>
      <div className={`block lg:${isScrolled ? "block" : "hidden"}`}>
        <Image
          src="/icons/header/logo-bg3-small.webp"
          alt="Baldur's gate 3 Logo"
          width={70}
          height={94}
        />
      </div>

      <div className={`hidden lg:${isScrolled ? "hidden" : "block"}`}>
        <Image
          src="/icons/header/logo-bg3.webp"
          alt="Baldur's gate 3 Logo"
          width={210}
          height={134}
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
