import Image from "next/image";

const FooterCompanies = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`footer-companies ${className}`}>
      <ul className="flex items-center gap-5 md:justify-center lg:gap-15 lg:justify-end">
        <li>
          <a
            className="relative"
            href="https://larian.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Larian website`}
          >
            <Image
              src="/icons/companies/logo-larian.webp"
              alt="Larian Studios"
              width={70}
              height={92}
              style={{
                objectFit: "contain",
              }}
            />
          </a>
        </li>
        <li>
          <a
            className="relative"
            href="https://company.wizards.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Wizards of the Coast website`}
          >
            <Image
              src="/icons/companies/logo-wizards.webp"
              alt="Wizards of the Coast"
              width={144}
              height={76}
              style={{
                objectFit: "contain",
              }}
            />
          </a>
        </li>
        <li>
          <a
            className="relative"
            href="https://dnd.wizards.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit D&D website`}
          >
            <Image
              src="/icons/companies/logo-dnd.webp"
              alt="Dungeons & Dragons"
              width={176}
              height={59}
              style={{
                objectFit: "contain",
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default FooterCompanies;
