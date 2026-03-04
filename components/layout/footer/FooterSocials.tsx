import { socials } from "@/data/socials/socials";
import IconDiscord from "@/components/icons/socials/IconDiscord";
import IconFacebook from "@/components/icons/socials/IconFacebook";
import IconIG from "@/components/icons/socials/IconIG";
import IconRing from "@/components/icons/socials/IconRing";
import IconTikTok from "@/components/icons/socials/IconTikTok";
import IconTwitter from "@/components/icons/socials/IconTwitter";
import IconYouTube from "@/components/icons/socials/IconYoutube";

const iconMap = {
  twitter: IconTwitter,
  facebook: IconFacebook,
  youtube: IconYouTube,
  instagram: IconIG,
  discord: IconDiscord,
  tiktok: IconTikTok,
};

const FooterSocials = () => {
  return (
    <ul className="footer-socials flex items-center flex-wrap gap-1.25">
      {socials.map((social) => {
        const IconComponent = iconMap[social.platform];
        return (
          <li key={social.platform}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper relative flex group"
              href={social.href}
              aria-label={`Visit our ${social.platform} page`}
            >
              <IconRing />
              <IconComponent className="absolute top-1/2 left-1/2 transform -translate-y-[45%] -translate-x-1/2 w-5 h-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default FooterSocials;
