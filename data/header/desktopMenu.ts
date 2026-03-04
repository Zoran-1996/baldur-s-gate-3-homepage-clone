interface HeaderDesktopMenuProps {
  name: string;
  href: string;
}

export const headerDesktopMenu = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "News & Updates",
    href: "/news",
  },
  {
    name: "Support",
    href: "/support",
  },
  {
    name: "Merch",
    href: "/merch",
  },
  {
    name: "Mods",
    href: "/mods",
  },
] satisfies HeaderDesktopMenuProps[];
