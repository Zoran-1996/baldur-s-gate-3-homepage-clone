"use client";

import TextDivider from "@/components/common/TextDivider";
import IconAccordionDropdown from "@/components/icons/accordion/IconAccordionDropdown";
import { useEffect, useRef, useState } from "react";

interface AccordionItemProps {
  heading: string;
  children: React.ReactNode;
}

const AccordionItem = ({ heading, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`accordion-item flex flex-col justify-center relative p-7.5 group before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-1 before:backdrop-blur-[7px] before:bg-[#00000036] before:[mask:radial-gradient(5px_at_5px_5px,transparent_98%,#000)_-5px_-5px] [&.active]:before:content-[''] [&.active]:before:absolute [&.active]:before:inset-0 [&.active]:before:bg-[#00000080] [&.active]:before:bg-[radial-gradient(circle_at_51%,#b18f6859_0,#b18f6800_120%)] ${isOpen ? "active" : ""}`}
    >
      <h3>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="accordion-item-button text-baldur-gradient uppercase text-left w-full text-xl min-h-19.75 lg:min-h-15 before:absolute before:top-0 before:left-0 before:w-full before:h-full group-hover:bg-none group-hover:bg-clip-border group-hover:text-white group-hover:[-webkit-text-fill-color:unset] [&.active]:bg-none [&.active]:bg-clip-border [&.active]:text-white [&.active]:[-webkit-text-fill-color:unset]"
        >
          <div className="min-h-19.75 lg:min-h-15 flex items-center justify-between gap-10">
            <span className="max-w-95">{heading}</span>
            <IconAccordionDropdown
              className={`shrink-0 w-11 h-auto transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
      </h3>
      <div>
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight }}
          ref={contentRef}
        >
          <TextDivider className={`my-4 ${isOpen ? "w-30" : "w-0"}`} />
          {children}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <div className="absolute top-0 left-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain" />
        <div className="absolute top-0 right-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain rotate-90" />
        <div className="absolute bottom-0 left-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain scale-x-[-1] rotate-180" />
        <div className="absolute bottom-0 right-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain scale-x-[-1] rotate-90" />
      </div>
    </div>
  );
};

export default AccordionItem;
