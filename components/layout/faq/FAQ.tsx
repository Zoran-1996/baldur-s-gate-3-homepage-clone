import TextDivider from "@/components/common/TextDivider";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import BaldurDivider from "@/components/common/BaldurDivider";
import BaldurSubheading from "@/components/common/BaldurSubheading";
import BaldurHeading from "@/components/common/BaldurHeading";

const FAQ = () => {
  return (
    <section className="faq relative">
      <div className="container">
        <BaldurDivider className="-top-1.25" />
      </div>
      <div className="pt-22.5 min-h-93">
        <div className="absolute bg-[url('/images/faq/faq-background.webp')] h-93 w-full mask-center top-0 left-0 bg-cover bg-no-repeat -z-1 mask-cover opacity-70 mask-no-repeat bg-center max-w-352.5 lg:left-1/2 lg:mask-top lg:transform lg:-translate-x-1/2 lg:h-130 lg:mask-contain mask-[url('/images/faq/faq-background-mask.webp')]"></div>
        <div className="container relative">
          <div>
            <BaldurSubheading className="mb-2 lg:mb-0">
              Baldur's Gate 3
            </BaldurSubheading>
            <BaldurHeading className="mb-5">FAQ</BaldurHeading>

            <TextDivider className="w-30" />

            <Accordion className="mt-12.5">
              <AccordionItem heading="What platforms is Baldur’s Gate 3 available on?">
                The game is currently available on PC (Steam and GOG),
                PlayStation 5, Xbox, Mac, and GeForce NOW.
              </AccordionItem>
              <AccordionItem heading="WHAT ARE THE PC SYSTEM REQUIREMENTS?">
                Minimum: <br /> Requires a 64-bit processor and operating
                system.
                <br />
                OS: Windows 10 64-bit
                <br />
                Processor: Intel I5 4690 / AMD FX 8350
                <br />
                Memory: 8 GB RAM
                <br />
                Graphics: Nvidia GTX 970 / RX 480 (4GB+ of VRAM)
                <br />
                DirectX: Version 11
                <br />
                Storage: 150 GB available space
                <br />
                <br /> Recommended: <br /> Requires a 64-bit processor and
                operating system.
                <br />
                OS: Windows 10 64-bit
                <br />
                Processor: Intel i7 8700K / AMD r5 3600
                <br />
                Memory: 16 GB RAM
                <br />
                Graphics: Nvidia 2060 Super / RX 5700 XT (8GB+ of VRAM)
                <br />
                DirectX: Version 11
                <br />
                Storage: 150 GB available space
                <br />
                <br />
                Make sure your device meets these specifications to ensure
                smooth gameplay.
              </AccordionItem>
              <AccordionItem heading="Are there any in-game purchases?">
                No, there are no in-game purchases in our game. We believe in
                providing a complete and immersive gaming experience without the
                need for additional purchases. Enjoy the game to its fullest
                without any additional costs or microtransactions.
              </AccordionItem>
              <AccordionItem heading="CAN I PLAY A SINGLE-PLAYER CAMPAIGN?">
                Absolutely! The game features an engaging single-player campaign
                filled with immersive storytelling and exciting missions.
                Experience the game's unique narrative as you embark on a solo
                adventure.
              </AccordionItem>
              <AccordionItem heading="Can I play the game offline?">
                Yes, you can play the game offline. However, certain features,
                such as multiplayer, may require an internet connection.
              </AccordionItem>
              <AccordionItem heading="WHAT ARE THE MAC SYSTEM REQUIREMENTS?">
                Minimum: <br />
                OS: macOS 12 or newer
                <br />
                Processor: Apple M1
                <br />
                Memory: 8 GB RAM
                <br />
                Graphics: Apple M1
                <br />
                Storage: Version 11
                <br />
                Storage: 150 GB available space
                <br />
                <br /> Recommended: <br />
                OS: Latest macOS
                <br />
                Processor: Apple M1 Pro or better
                <br />
                Memory: 16 GB RAM
                <br />
                Graphics: Apple M1 Pro or better
                <br />
                Storage: 150 GB available space
                <br />
                <br />
                Make sure your device meets these specifications to ensure
                smooth gameplay.
              </AccordionItem>
              <AccordionItem heading="IS THERE A MULTIPLAYER MODE?">
                Yes, the game offers a multiplayer mode that focuses on
                cooperative gameplay. You can team up with your friends or other
                players online and embark on exciting co-op adventures, tackle
                challenging quests together, and strategise as a team to
                overcome formidable foes. Experience the game's immersive world
                in a collaborative multiplayer setting.
              </AccordionItem>
              <AccordionItem heading="WHAT DOES THE DIGITAL DELUXE EDITION INCLUDE?">
                The Digital Deluxe Edition includes all the content from the
                standard edition, along with additional exclusive items. These
                items include the Divinity Bard Song Pack, Exclusive Dice Skin,
                Mask of the Shapeshifter, Cape of the Red Prince, Lute of the
                Merryweather Bard, Needle of the Outlaw Rogue, Bicorne of the
                Sea Beast, Paintings from Rivellon, Adventurer's Pouch, Digital
                OST (Original Soundtrack), Digital Artbook, and Digital
                Character Sheets. Immerse yourself fully in the game with these
                exciting digital bonuses available in the Digital Deluxe
                Edition.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
