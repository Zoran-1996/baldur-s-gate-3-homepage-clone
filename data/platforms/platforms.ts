export type PlatformsProps = {
  href: string;
  platform: "steam" | "GOG" | "PS5" | "XBOX" | "deluxe";
  label?: string;
  ariaLabel: string;
};

export const platforms = [
  {
    href: "https://store.steampowered.com/agecheck/app/1086940/?utm_source=web_page&utm_campaign=ongoing&utm_medium=buy_button",
    platform: "steam",
    ariaLabel: "Buy Baldur's Gate 3 on Steam",
  },
  {
    href: "https://www.gog.com/game/baldurs_gate_iii?utm_medium=link&utm_source=Larian&utm_campaign=partner_links",
    platform: "GOG",
    ariaLabel: "Buy Baldur's Gate 3 on GOG",
  },
  {
    href: "https://store.playstation.com/concept/10007460/?utm_source=web_page&utm_campaign=ongoing&utm_medium=buy_button",
    platform: "PS5",
    ariaLabel: "Buy Baldur's Gate 3 on PlayStation 5",
  },
  {
    href: "https://www.xbox.com/games/store/baldurs-gate-3/9ND58LQTG09T",
    platform: "XBOX",
    ariaLabel: "Buy Baldur's Gate 3 on Xbox",
  },
  {
    href: "https://box.baldursgate3.game",
    platform: "deluxe",
    label: "Deluxe Edition",
    ariaLabel: "Buy Baldur's Gate 3 Deluxe Edition",
  },
] satisfies PlatformsProps[];
