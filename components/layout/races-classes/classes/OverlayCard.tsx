import { useLayoutEffect, useState } from "react";
import { ClassData } from "@/data/classes/classes";
import IconClose from "@/components/icons/IconClose";
import Image from "next/image";
import BaldurBorder from "@/components/common/BaldurBorder";

interface OverlayCardProps {
  data: ClassData | null;
  cardRect: DOMRect | null;
  gridRef: React.RefObject<HTMLDivElement | null>;
  visible: boolean;
  onClose: () => void;
}

const MOBILE_HEIGHT = 820;
const BREAKPOINT = 1280;

const OverlayCard = ({
  data,
  cardRect,
  gridRef,
  visible,
  onClose,
}: OverlayCardProps) => {
  const [style, setStyle] = useState<React.CSSProperties>();

  useLayoutEffect(() => {
    if (!gridRef.current || !cardRect || !data) return;

    const gridRect = gridRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < BREAKPOINT;

    const left = cardRect.left - gridRect.left;
    const width = cardRect.width;
    const height = isMobile ? MOBILE_HEIGHT : gridRect.height;

    let top = 0;

    if (isMobile) {
      const rawTop = cardRect.top - gridRect.top;
      const maxTop = gridRect.height - height;
      top = Math.min(Math.max(rawTop, 0), maxTop);
    }

    setStyle({
      position: "absolute",
      top,
      left,
      width,
      height,
      zIndex: 50,
    });
  }, [cardRect, data, gridRef]);

  if (!data || !cardRect || !style) return null;

  return (
    <div
      style={style}
      className={`class-overlay-card relative px-10 py-7.5 flex flex-col overflow-hidden backdrop-blur-[20px] bg-black/50 shadow-xl transition-opacity duration-200 ease-in-out
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6.25 right-7.5 text-sunrise-yellow text-sm opacity-70 hover:opacity-100 transition-opacity"
      >
        <IconClose className="w-4 h-4" />
      </button>

      <Image
        src={data.icon}
        alt={data.name}
        width={170}
        height={164}
        style={{
          objectFit: "contain",
        }}
        className="mx-auto"
      />

      <h3 className="text-3xl text-center uppercase text-baldur-gradient">
        {data.name}
      </h3>

      <p className="my-5 text-center">{data.description}</p>

      <h4 className="uppercase text-sunrise-yellow tracking-widest text-sm">
        Subclasses:
      </h4>

      <ul className="mt-2 grid gap-2 text-sm overflow-y-auto custom-scrollbar">
        {data.subclasses.map((sub) => (
          <li key={sub.id} className="flex items-center gap-2.5">
            <div className="shrink-0 flex flex-col">
              <Image
                src={sub.icon}
                alt={sub.title}
                width={60}
                height={60}
                className="object-contain"
              />
              {sub.new && (
                <span className="text-jade text-base text-center">NEW</span>
              )}
            </div>

            <div className="grid gap-2.5 w-full">
              <span className="text-base text-baldur-gradient lg:text-lg">
                {sub.title}
              </span>
              <BaldurBorder />
            </div>
          </li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain" />
        <div className="absolute top-0 right-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] rotate-90 bg-no-repeat bg-contain" />
        <div className="absolute bottom-0 left-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] scale-x-[-1] rotate-180 bg-no-repeat bg-contain" />
        <div className="absolute bottom-0 right-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] scale-x-[-1] rotate-90 bg-no-repeat bg-contain" />
      </div>
    </div>
  );
};

export default OverlayCard;
