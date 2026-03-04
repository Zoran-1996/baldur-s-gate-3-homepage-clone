import { useEffect } from "react";
import IconClose from "@/components/icons/IconClose";

interface HeroVideoModalProps {
  setActiveVideoModal: (value: boolean) => void;
}

const HeroVideoModal = ({ setActiveVideoModal }: HeroVideoModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setActiveVideoModal]);

  return (
    <div className="hero-video-modal fixed top-0 left-0 w-full h-full z-101 bg-night-rider/50 flex items-center justify-center p-10">
      <div className="relative w-full max-w-480 max-h-[90vh] aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/XuCfkgaaa08?si=oZOjUI9n8u62w6yn"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={() => setActiveVideoModal(false)}
        className="absolute top-5 right-5 z-50"
      >
        <IconClose className="text-white w-4 h-4" />
      </button>
    </div>
  );
};

export default HeroVideoModal;
