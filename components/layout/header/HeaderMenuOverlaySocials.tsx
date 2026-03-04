import BaldurSubheading from "@/components/common/BaldurSubheading";
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

const HeaderMenuOverlaySocials = () => {
  return (
    <>
      <BaldurSubheading className="mb-3.75">Social Media</BaldurSubheading>
      <ul className="flex flex-wrap gap-5">
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
                <IconComponent className="w-6.5 h-6.5" />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HeaderMenuOverlaySocials;
