import IconDiscord from "@/components/icons/socials/IconDiscord";
import IconFacebook from "@/components/icons/socials/IconFacebook";
import IconIG from "@/components/icons/socials/IconIG";
import IconTikTok from "@/components/icons/socials/IconTikTok";
import IconTwitter from "@/components/icons/socials/IconTwitter";
import IconYouTube from "@/components/icons/socials/IconYoutube";
import { socials } from "@/data/socials/socials";

const iconMap = {
  twitter: IconTwitter,
  facebook: IconFacebook,
  youtube: IconYouTube,
  instagram: IconIG,
  discord: IconDiscord,
  tiktok: IconTikTok,
};

const HeroSocialMedias = () => {
  return (
    <div className="hero-social-media w-0 h-0 pointer-events-none opacity-0 lg:w-auto lg:h-auto lg:pointer-events-auto lg:opacity-100 lg:z-20 lg:flex-col lg:absolute lg:bottom-45 lg:left-12.5 lg:items-center lg:gap-5 lg:flex xl:bottom-10">
      <span className="text-xs inline-block uppercase text-sunrise-yellow [writing-mode:sideways-lr] cursor-default">
        Social Media
      </span>
      <div className="flex flex-col gap-5">
        {socials.map((social) => {
          const IconComponent = iconMap[social.platform];

          return (
            <a
              key={social.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper relative flex"
              href={social.href}
            >
              <IconComponent className="w-6.5 h-6.5" />
              <span className="sr-only">Go to {social.platform} page</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSocialMedias;
