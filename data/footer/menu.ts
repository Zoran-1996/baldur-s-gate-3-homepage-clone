export type NavKind = "internal" | "external";

export type NavItem = {
  title: string;
  href: string;
  linkType: NavKind;
};

export type NavGroup = {
  title: string;
  href?: string;
  linkType?: NavKind;
};

export type FooterMenuProps = {
  heading: NavGroup;
  items?: NavItem[];
};

export const footerMenu = [
  {
    heading: {
      title: "Game",
    },
    items: [
      { title: "About", href: "/about", linkType: "internal" },
      { title: "Game Features", href: "/game-features", linkType: "internal" },
      { title: "Full Cast", href: "/full-cast", linkType: "internal" },
      { title: "News & Updates", href: "/news-updates", linkType: "internal" },
      { title: "Press", href: "/press", linkType: "internal" },
    ],
  },
  {
    heading: {
      title: "Community",
    },
    items: [
      {
        title: "Forum",
        href: "https://forums.larian.com/",
        linkType: "external",
      },
      {
        title: "Discord",
        href: "https://discord.com/invite/larianstudios",
        linkType: "external",
      },
    ],
  },
  {
    heading: {
      title: "Support",
    },
    items: [
      { title: "Support", href: "/support", linkType: "internal" },
      { title: "FAQ", href: "/faq", linkType: "internal" },
    ],
  },
  {
    heading: {
      title: "Buy Now",
    },
    items: [
      {
        title: "Standard Edition",
        href: "/standard-edition",
        linkType: "internal",
      },
      {
        title: "Digital Deluxe Edition",
        href: "/digital-deluxe-edition",
        linkType: "internal",
      },
      {
        title: "Physical Deluxe Edition",
        href: "/physical-deluxe-edition",
        linkType: "internal",
      },
    ],
  },
  {
    heading: {
      title: "More",
    },
    items: [
      {
        title: "Blood in Baldur’s Gate",
        href: "https://bloodinbaldursgate.larian.com/",
        linkType: "external",
      },
      {
        title: "Panel From Hell",
        href: "https://panelfromhell.baldursgate3.game/",
        linkType: "external",
      },
    ],
  },
  {
    heading: {
      title: "Careers",
      href: "https://larian.com/careers",
      linkType: "external",
    },
  },
  {
    heading: {
      title: "Merch",
      href: "https://merch.larian.com/",
      linkType: "external",
    },
  },
  {
    heading: {
      title: "Mods",
      href: "/mods",
      linkType: "internal",
    },
  },
] satisfies FooterMenuProps[];
