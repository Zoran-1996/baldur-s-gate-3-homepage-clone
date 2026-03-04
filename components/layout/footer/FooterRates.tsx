import Image from "next/image";
import { footerRates } from "@/data/footer/rates";

const FooterRates = ({ className }: { className?: string }) => {
  return (
    <ul className={`footer-rates grid grid-cols-4 gap-2.5 ${className}`}>
      {footerRates.map((rate, index) => (
        <li key={index} className="flex flex-col items-center gap-2.5">
          <a
            className="relative h-[6vw] w-full max-h-25"
            href={rate.href}
            aria-label={`View rating on ${rate.ratingSystem} website`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              loading="lazy"
              style={{
                objectFit: "contain",
              }}
              fill
              sizes="25vw"
              src={rate.imgSrc}
              alt=""
            />
          </a>
          <span className="text-xs text-center">{rate.label}</span>
        </li>
      ))}
    </ul>
  );
};
export default FooterRates;
