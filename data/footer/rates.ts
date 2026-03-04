export type FooterRatesProps = {
  href: string;
  imgSrc: string;
  label: string;
  ratingSystem: string;
};

export const footerRates = [
  {
    href: "https://www.esrb.org",
    imgSrc: "/icons/rates/rate-esrb.webp",
    label: "US/Canada",
    ratingSystem: "esrb",
  },
  {
    href: "http://www.pegi.info",
    imgSrc: "/icons/rates/rate-pegi.webp",
    label: "Europe",
    ratingSystem: "pegi",
  },
  {
    href: "https://usk.de/en/the-usk/faqs/age-categories/",
    imgSrc: "/icons/rates/rate-usk.svg",
    label: "Germany",
    ratingSystem: "usk",
  },
  {
    href: "https://www.classification.gov.au/classification-ratings/what-are-ratings",
    imgSrc: "/icons/rates/rate-classification.svg",
    label: "Australia / New Zealand",
    ratingSystem: "classification",
  },
] satisfies FooterRatesProps[];
