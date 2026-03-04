export type AwardsProps = {
  imgSrc: string;
  imgSrcHovered: string;
  label: string;
};

export const awards = [
  {
    imgSrc: "/images/awards/bafta-awards.webp",
    imgSrcHovered: "/images/awards/bafta-awards-hover.webp",
    label: "BAFTA Awards",
  },
  {
    imgSrc: "/images/awards/the-game-awards.webp",
    imgSrcHovered: "/images/awards/the-game-awards-hover.webp",
    label: "The Game Awards",
  },
  {
    imgSrc: "/images/awards/ign.webp",
    imgSrcHovered: "/images/awards/ign-hover.webp",
    label: "IGN",
  },
  {
    imgSrc: "/images/awards/golden-joystick-awards.webp",
    imgSrcHovered: "/images/awards/golden-joystick-awards-hover.webp",
    label: "Golden Joystick Awards",
  },
  {
    imgSrc: "/images/awards/bili-bili.webp",
    imgSrcHovered: "/images/awards/bili-bili-hover.webp",
    label: "Bilibili",
  },
  {
    imgSrc: "/images/awards/but-why-tho-awards.webp",
    imgSrcHovered: "/images/awards/but-why-tho-awards-hover.webp",
    label: "But Why Tho Awards",
  },
] satisfies AwardsProps[];
