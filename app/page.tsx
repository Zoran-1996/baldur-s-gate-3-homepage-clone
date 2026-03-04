import Awards from "@/components/layout/awards/Awards";
import Characters from "@/components/layout/characters/Characters";
import FAQ from "@/components/layout/faq/FAQ";
import Hero from "@/components/layout/hero/Hero";
import RacesAndClasses from "@/components/layout/races-classes/RacesAndClasses";
import CTA from "@/components/UI/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Awards />
      <Characters />
      <RacesAndClasses />
      <CTA
        className="mb-20"
        subHeading="Larian Merch"
        heading="Discover the Larian Merch Store"
        text="Browse our fiendishly good merch. Whether you wish to sport a t-shirt of a long rest or play the Divinity: Original Sin board game with friends, we've got you covered."
        button="Browse Merch"
        buttonLink="/merch"
        assetMobile="/images/CTA/merch-mobile.webp"
        assetDesktop="/images/CTA/merch.webp"
      />
      <FAQ />
      <CTA
        className="my-20"
        subHeading="Digital Downloads"
        heading="Backgrounds & Overlays"
        text="Get your hands on your very own customisable Baldur’s Gate 3 stream overlays and Origin Character mobile backgrounds, for free!"
        button="Get It Now"
        buttonLink="/digital-downloads"
        assetMobile="/images/CTA/digital-mobile.webp"
        assetDesktop="/images/CTA/digital.webp"
      />
      <CTA
        className="my-20"
        subHeading="Baldur's Gate 3"
        heading="Support"
        button="Read More"
        buttonLink="/read-more"
        buttonAdditionalText="Learn more about how to get support for Baldur's Gate 3"
        assetMobile="/images/CTA/support-background-mobile.webp"
        assetDesktop="/images/CTA/support-background.webp"
        fullscreenMobileAsset={true}
      />
    </div>
  );
}
