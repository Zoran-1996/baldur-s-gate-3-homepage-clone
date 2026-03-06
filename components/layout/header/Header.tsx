"use client";

import IconCart from "@/components/icons/IconCart";
import Image from "next/image";
import HeaderMenuOverlay from "./HeaderMenuOverlay";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import { useState } from "react";
import Button from "@/components/common/Button";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const [activeMenuOverlay, setActiveMenuOverlay] = useState(false);

  return (
    <>
      <header className="fixed w-[90%] left-1/2 transform -translate-x-1/2 top-6 z-100">
        <div className="flex items-center">
          <div className="pr-4 lg:pr-0">
            <HeaderLogo />
          </div>

          <button
            onClick={() => setActiveMenuOverlay(true)}
            className="lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <div className="relative w-10.5 h-5.25">
              <Image
                src="/icons/header/hamburger-ico.webp"
                alt="menu ico"
                fill
                sizes="42px"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </button>

          <HeaderDesktopMenu setActiveMenuOverlay={setActiveMenuOverlay} />

          <Button
            additionalText="Buy now"
            active
            className="ml-auto w-17 h-12 xl:block xl:w-[initial] xl:h-[initial]"
            variant="secondary"
            href={"#"}
          >
            <span className="hidden xl:inline-flex">Buy now</span>
            <IconCart className="xl:hidden" />
          </Button>
        </div>

        <div className="absolute h-50 w-105 pointer-events-none -top-6 -left-[calc((100vw-90%)/2)] bg-[url('/icons/header/cloud-left.webp')] bg-contain -z-1 bg-no-repeat"></div>

        <div className="absolute pointer-events-none -top-6 -right-[calc((100vw-90%)/2)] w-screen h-52.5 bg-[url('/icons/header/cloud-right.webp')] bg-contain bg-no-repeat bg-top lg:bg-top-right -z-1" />
      </header>

      {activeMenuOverlay && (
        <HeaderMenuOverlay setActiveMenuOverlay={setActiveMenuOverlay} />
      )}
    </>
  );
};

export default Header;
