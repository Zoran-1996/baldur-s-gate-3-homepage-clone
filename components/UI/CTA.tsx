import TextDivider from "../common/TextDivider";
import BaldurFrame from "../common/BaldurFrame";
import Button from "../common/Button";
import BaldurHeading from "../common/BaldurHeading";
import BaldurSubheading from "../common/BaldurSubheading";

interface CTAProps {
  className?: string;
  subHeading: string;
  heading: string;
  text?: string;
  button: string;
  buttonLink: string;
  buttonAdditionalText?: string;
  assetMobile: string;
  assetDesktop: string;
  fullscreenMobileAsset?: boolean;
}

const CTA = ({
  subHeading,
  heading,
  text,
  button,
  buttonLink,
  buttonAdditionalText,
  className,
  assetMobile,
  assetDesktop,
  fullscreenMobileAsset,
}: CTAProps) => {
  return (
    <section className={`cta ${className ? className : ""}`}>
      <BaldurFrame
        fullScreenMobileAsset={fullscreenMobileAsset}
        assetMobile={assetMobile}
        assetDesktop={assetDesktop}
      >
        <BaldurSubheading className="mb-1 lg:mb-0">
          {subHeading}
        </BaldurSubheading>
        <BaldurHeading className="lg:text-5xl mb-9 group-has-[.cta-text]:mb-4">
          {heading}
        </BaldurHeading>
        {text && (
          <div className="cta-text mb-5 flex flex-col gap-4">
            <TextDivider className="mx-auto lg:mx-0" />
            <p>{text}</p>
          </div>
        )}
        <Button href={buttonLink} additionalText={buttonAdditionalText}>
          {button}
        </Button>
      </BaldurFrame>
    </section>
  );
};

export default CTA;
