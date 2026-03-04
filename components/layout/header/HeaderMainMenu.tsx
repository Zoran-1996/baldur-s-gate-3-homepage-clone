import IconAccordionDropdown from "@/components/icons/accordion/IconAccordionDropdown";
import IconMarker from "@/components/icons/IconMarker";
import IconExternalLink from "@/components/icons/menu/IconExternalLink";
import { footerMenu } from "@/data/footer/menu";
import Link from "next/link";
import { useState } from "react";

const HeaderMainMenu = ({
  setActiveImage,
}: {
  setActiveImage: (index: number) => void;
}) => {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenGroup((prev) => (prev === key ? null : key));
  };
  return (
    <>
      {footerMenu.map((group, index) => (
        <div className="header-main-menu" key={group.heading.title}>
          <h3
            onClick={() => {
              if (!group.heading.href && group.items) {
                handleToggle(group.heading.title);
                setActiveImage(index);
              }
            }}
            onMouseEnter={() => {
              if (!group.heading.href && group.items) {
                setActiveImage(index);
              }
            }}
            className={`text-baldur-gradient lg:opacity-100 flex items-center justify-center gap-2.5 group text-3xl uppercase mb-2 lg:justify-start ${
              !group.heading.href ? "cursor-default" : ""
            } ${
              openGroup
                ? openGroup === group.heading.title
                  ? "opacity-100"
                  : "opacity-70"
                : "opacity-100"
            }`}
          >
            {group.heading.href ? (
              group.heading.linkType === "internal" ? (
                <Link prefetch={false} href={group.heading.href}>
                  {group.heading.title}
                </Link>
              ) : (
                <a
                  className="inline-flex items-center gap-2.5"
                  href={group.heading.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {group.heading.title}
                  <IconExternalLink className="shrink-0" />
                </a>
              )
            ) : (
              <>
                <span>{group.heading.title}</span>
                <IconAccordionDropdown
                  className={`w-9 h-auto lg:hidden ${
                    openGroup === group.heading.title
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </>
            )}
          </h3>

          {group.items && (
            <ul
              className={`space-y-1 transition-all duration-300 overflow-hidden lg:block ${
                openGroup === group.heading.title ? "block" : "hidden"
              }`}
            >
              {group.items.map((item) => (
                <li key={item.title}>
                  {item.linkType === "external" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setActiveImage(index)}
                      className="inline-flex text-xl text-sunrise-yellow/80 hover:text-white transition-colors duration-400 ease-in-out group items-center gap-2.5"
                    >
                      <div className="flex items-center">
                        <IconMarker className="transition-colors duration-400 ease-in-out text-sunrise-yellow/80 group-hover:text-white" />
                        <span className="w-0 h-px bg-wood-brown inline-block transition-all duration-400 ease-in-out group-hover:w-2.75 group-hover:bg-white"></span>
                      </div>
                      {item.title}
                      <IconExternalLink className="shrink-0" />
                    </a>
                  ) : (
                    <Link
                      prefetch={false}
                      href={item.href}
                      onMouseEnter={() => setActiveImage(index)}
                      className="inline-flex text-xl text-sunrise-yellow/80 hover:text-white transition-colors duration-400 ease-in-out group items-center gap-2.5"
                    >
                      <div className="flex items-center">
                        <IconMarker className="transition-colors duration-400 ease-in-out text-sunrise-yellow/80 group-hover:text-white" />
                        <span className="w-0 h-px bg-wood-brown inline-block transition-all duration-400 ease-in-out group-hover:w-2.75 group-hover:bg-white"></span>
                      </div>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default HeaderMainMenu;
