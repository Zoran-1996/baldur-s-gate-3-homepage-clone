export type SocialsProps = {
  href: string;
  platform:
    | "twitter"
    | "facebook"
    | "youtube"
    | "instagram"
    | "discord"
    | "tiktok";
};

export const socials = [
  {
    href: "https://x.com/larianstudios",
    platform: "twitter",
  },
  {
    href: "https://www.facebook.com/LarianStudios",
    platform: "facebook",
  },
  {
    href: "https://www.youtube.com/user/LarianStudios",
    platform: "youtube",
  },
  {
    href: "https://www.instagram.com/larianstudios/",
    platform: "instagram",
  },
  {
    href: "https://discord.com/invite/larianstudios",
    platform: "discord",
  },
  {
    href: "https://www.tiktok.com/@larianstudios",
    platform: "tiktok",
  },
] satisfies SocialsProps[];
