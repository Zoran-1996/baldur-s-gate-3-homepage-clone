export type AwardsProps = {
  imgSrc: string;
  label: string;
};

export const awards = [
  {
    imgSrc: "/images/awards/bafta-awards.webp",
    label: "BAFTA Awards",
  },
  {
    imgSrc: "/images/awards/the-game-awards.webp",
    label: "The Game Awards",
  },
  {
    imgSrc: "/images/awards/ign.webp",
    label: "IGN",
  },
  {
    imgSrc: "/images/awards/golden-joystick-awards.webp",
    label: "Golden Joystick Awards",
  },
  {
    imgSrc: "/images/awards/bili-bili.webp",
    label: "Bilibili",
  },
  {
    imgSrc: "/images/awards/but-why-tho-awards.webp",
    label: "But Why Tho Awards",
  },
] satisfies AwardsProps[];
