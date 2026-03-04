import IconMouse from "@/components/icons/hero/IconMouse";

const HeroScrollDown = () => {
  return (
    <div className="hero-scroll-down hidden absolute right-12.5 flex-col items-center gap-5 cursor-default lg:flex lg:bottom-45 xl:bottom-10">
      <span className="text-xs inline-block uppercase text-sunrise-yellow [writing-mode:sideways-lr]">
        Scroll down
      </span>
      <IconMouse />
    </div>
  );
};

export default HeroScrollDown;
