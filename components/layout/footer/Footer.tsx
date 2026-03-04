import BaldurDivider from "../../common/BaldurDivider";
import BaldurBorder from "../../common/BaldurBorder";
import FooterSocials from "./FooterSocials";
import FooterMenu from "./FooterMenu";
import FooterRates from "./FooterRates";
import FooterCompanies from "./FooterCompanies";
import FooterPrivacy from "./FooterPrivacy";
import FooterCopyright from "./FooterCopyright";
import Button from "@/components/common/Button";
import BaldurSubheading from "@/components/common/BaldurSubheading";
import BaldurHeading from "@/components/common/BaldurHeading";

const Footer = () => {
  return (
    <footer className="pb-6.5 font-noto-sans">
      <div className="container">
        <BaldurDivider className="mb-7.5" />

        <div className="lg:flex lg:gap-10">
          <div className="lg:basis-[33.3%]">
            <div className="flex flex-col items-start gap-5">
              <BaldurSubheading>Social Media</BaldurSubheading>
              <BaldurHeading>
                Join us on our <br /> adventures!
              </BaldurHeading>
              <FooterSocials />
              <p>
                Subscribe to the Larian Gazette to gain access to the latest
                news and competitions for Baldur&apos;s Gate 3, the Divinity
                series, and Larian Studios.
              </p>
              <Button variant="default">Subscribe to the Gazette</Button>
            </div>
          </div>
          <div className="pt-15 lg:basis-[66.7%]">
            <FooterMenu />
            <FooterCompanies className="mt-8.75 mb-7.5" />
          </div>
        </div>

        <BaldurBorder />

        <div className="pt-7.5 lg:flex lg:gap-15 lg:pt-15 lg:items-center">
          <div className="basis-[60%]">
            <FooterPrivacy />
            <FooterCopyright className="mt-2.5" />
          </div>
          <FooterRates className="mt-5 basis-[40%]" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
