import IconDeluxe from "@/components/icons/hero/IconDeluxeEdition";
import IconGOG from "@/components/icons/hero/IconGog";
import IconPS5 from "@/components/icons/hero/IconPS5";
import IconSteam from "@/components/icons/hero/IconSteam";
import IconXBOX from "@/components/icons/hero/IconXBOX";
import { platforms } from "@/data/platforms/platforms";

const iconMap = {
  steam: IconSteam,
  GOG: IconGOG,
  PS5: IconPS5,
  XBOX: IconXBOX,
  deluxe: IconDeluxe,
};

const HeroPlatforms = () => {
  return (
    <div className="hero-platforms flex flex-wrap items-center justify-center gap-6">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.platform];
        return (
          <a
            aria-label={platform.ariaLabel}
            className="flex gap-1.5 group"
            key={platform.platform}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent />
            {platform.label && (
              <span className="text-2xl uppercase inline-block text-sunrise-yellow transition-color duration-300 ease-in-out group-hover:text-white">
                {platform.label}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default HeroPlatforms;
