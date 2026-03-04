import { useRef, useState, useEffect } from "react";
import { classesData, ClassData } from "@/data/classes/classes";
import IconCustomLeftArrow from "@/components/icons/IconCustomLeftArrow";
import Image from "next/image";
import OverlayCard from "./OverlayCard";

const FADE_DURATION = 200;

const Classes = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const [overlayCurrent, setOverlayCurrent] = useState<{
    data: ClassData | null;
    rect: DOMRect | null;
    visible: boolean;
  }>({ data: null, rect: null, visible: false });

  const [overlayNext, setOverlayNext] = useState<{
    data: ClassData | null;
    rect: DOMRect | null;
    visible: boolean;
  }>({ data: null, rect: null, visible: false });

  const handleClick = (
    data: ClassData,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    if (overlayCurrent.visible) {
      setOverlayNext({ data, rect, visible: false });
      setOverlayCurrent((prev) => ({ ...prev, visible: false }));
    } else {
      setOverlayCurrent({ data, rect, visible: false });
      setTimeout(() => {
        setOverlayCurrent({ data, rect, visible: true });
      }, 10);
    }
  };

  const handleClose = () => {
    setOverlayCurrent((prev) => ({ ...prev, visible: false }));
  };

  useEffect(() => {
    if (!overlayNext.data) return;

    const timeout = setTimeout(() => {
      setOverlayCurrent({ ...overlayNext, visible: true });
      setOverlayNext({ data: null, rect: null, visible: false });
    }, FADE_DURATION);

    return () => clearTimeout(timeout);
  }, [overlayNext]);

  return (
    <div
      ref={gridRef}
      className="relative grid lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {classesData.map((cls) => (
        <button
          key={cls.id}
          onClick={(e) => handleClick(cls, e)}
          className="flex h-65 flex-col group items-center justify-center text-center backdrop-blur-[10px] bg-black/50 [mask:radial-gradient(5px_at_5px_5px,transparent_98%,#000)_-5px_-5px] px-10 py-7.5 relative after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_0,#b18f69_0,#b18f6800_84%)] after:opacity-20 after:pointer-events-none after:h-full after:w-full hover:after:opacity-40 after:transition-opacity after:duration-200 after:ease-in"
        >
          <Image
            src={cls.icon}
            alt={cls.name}
            width={140}
            height={140}
            className="h-auto w-auto"
            style={{ objectFit: "contain" }}
          />
          <h4 className="text-3xl uppercase text-baldur-gradient lg:text-2xl">
            {cls.name}
          </h4>

          <div className="mt-3 flex items-center gap-2 text-sm relative">
            <IconCustomLeftArrow className="absolute left-0 w-6 transition-[color, transform] duration-400 ease delay-100 text-sunrise-yellow transform group-hover:text-white group-hover:translate-x-18.75" />
            <span className="inline-block [-webkit-text-fill-color:transparent] bg-[linear-gradient(90deg,#fff,#fff_50%,#fbcea0_0)] bg-clip-text bg-size-[200%_100%] bg-position-[100%_0] transition-[background-position, transform] duration-400 delay-100 ease ml-8.5 uppercase text-sunrise-yellow transform group-hover:-translate-x-8.5 group-hover:bg-position-[0_100%]">
              See More
            </span>
          </div>

          <div className="pointer-events-none absolute inset-0 h-full w-full">
            <div className="absolute top-0 left-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-0 right-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain rotate-90"></div>
            <div className="absolute bottom-0 left-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain scale-x-[-1] rotate-180"></div>
            <div className="absolute bottom-0 right-0 h-23.5 w-23.5 bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-no-repeat bg-contain scale-x-[-1] rotate-90"></div>
          </div>
        </button>
      ))}

      <OverlayCard
        key={overlayCurrent.data?.id || "current"}
        data={overlayCurrent.data}
        cardRect={overlayCurrent.rect}
        gridRef={gridRef}
        visible={overlayCurrent.visible}
        onClose={handleClose}
      />

      {overlayNext.data && (
        <OverlayCard
          key={overlayNext.data.id}
          data={overlayNext.data}
          cardRect={overlayNext.rect}
          gridRef={gridRef}
          visible={overlayNext.visible}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Classes;
