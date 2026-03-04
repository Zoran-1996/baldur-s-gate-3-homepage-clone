import IconThreeDots from "@/components/icons/IconThreeDots";
import { headerDesktopMenu } from "@/data/header/desktopMenu";
import Link from "next/link";

interface HeaderDesktopMenuProps {
  setActiveMenuOverlay: (value: boolean) => void;
}

const HeaderDesktopMenu = ({
  setActiveMenuOverlay,
}: HeaderDesktopMenuProps) => {
  return (
    <nav className="header-desktop-menu hidden lg:flex lg:gap-5 lg:items-center lg:pl-15">
      {headerDesktopMenu.map((menuItem, index) => (
        <Link
          prefetch={false}
          className="text-base uppercase group text-sunrise-yellow flex items-center gap-1.25"
          href={menuItem.href}
          key={index}
        >
          <span className="group-hover:text-white transition-colors duration-300 ease-in-out">
            {menuItem.name}
          </span>
        </Link>
      ))}
      <button
        onClick={() => setActiveMenuOverlay(true)}
        className="text-base uppercase group text-sunrise-yellow flex items-center gap-1.25"
      >
        <span className="group-hover:text-white transition-colors duration-300 ease-in-out">
          More
        </span>
        <IconThreeDots className="w-5 h-5" />
      </button>
    </nav>
  );
};

export default HeaderDesktopMenu;
