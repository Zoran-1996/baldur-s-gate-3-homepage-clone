interface BaldurFrameProps {
  className?: string;
  fullScreenMobileAsset?: boolean;
  children: React.ReactNode;
  assetMobile: string;
  assetDesktop: string;
}

const BaldurFrame = ({
  className,
  fullScreenMobileAsset,
  children,
  assetMobile,
  assetDesktop,
}: BaldurFrameProps) => {
  return (
    <div className={`baldur-frame ${className ? className : ""}`}>
      <div className="container">
        <div className="p-2.5 relative flex flex-col justify-end">
          <div className="bg-black/35 text-center [mask:radial-gradient(16px_at_16px_16px,transparent_98%,#000)_-16px_-16px] lg:text-left lg:relative">
            <div
              className={`baldur-frame-inner py-10 px-5 md:px-25 lg:py-15 lg:px-15 lg:max-w-120 lg:w-full group lg:pb-15 ${fullScreenMobileAsset ? "pb-27.5" : " pb-0"}`}
            >
              {children}
            </div>
            <div className="baldur-frame-asset">
              <div
                className={`block lg:hidden w-full bg-top min-h-75 md:min-h-125 lg:min-h-auto md:bg-top lg:left-[initial] lg:w-[85%] lg:right-0 lg:h-full lg:bg-position-[0] bg-no-repeat bg-cover ${fullScreenMobileAsset ? "absolute min-h-auto top-0 left-0 w-full h-full -z-1 lg:hidden" : ""}`}
                style={{
                  backgroundImage: `url('${assetMobile}')`,
                }}
              ></div>
              <div
                className="hidden absolute -z-1 lg:block lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:right-0 w-full bg-top min-h-75 md:min-h-125 lg:min-h-auto md:bg-top lg:left-[initial] lg:w-[85%] lg:h-full lg:bg-position-[0] bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('${assetDesktop}')`,
                }}
              ></div>
            </div>
          </div>

          <div className="baldur-frame-decos">
            <div className="before:inline-block before:h-[calc(100%-34px)] before:bg-teak before:w-px before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:left-0 after:inline-block after:h-[calc(100%-34px)] after:bg-teak after:w-px after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:right-0"></div>
            <div className="before:inline-block before:h-px before:bg-[linear-gradient(90deg,#bf9875,#604b38_25%,#604b3800,#604b38_75%,#bf9875)] before:w-[calc(100%-34px)] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:top-0 after:inline-block after:h-px after:bg-[linear-gradient(90deg,#bf9875,#604b38_25%,#604b3800,#604b38_75%,#bf9875)] after:w-[calc(100%-34px)] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0"></div>
            <div className="-top-2.5 transform -translate-x-1/2 bg-[url('/icons/baldur-frame/baldur-frame-border-block-deco-mobile.svg')] md:bg-[url('/icons/baldur-frame/baldur-frame-border-block-deco.svg')] absolute w-[calc(100%-34px)] left-1/2 h-4.5 bg-no-repeat bg-contain bg-center"></div>
            <div className="-bottom-2.5 transform -translate-x-1/2 rotate-180 bg-[url('/icons/baldur-frame/baldur-frame-border-block-deco-mobile.svg')] md:bg-[url('/icons/baldur-frame/baldur-frame-border-block-deco.svg')] absolute w-[calc(100%-34px)] left-1/2 h-4.5 bg-no-repeat bg-contain bg-center"></div>
            <div className="before:inline-block before:h-4.5 before:w-4.5 before:absolute before:top-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] before:left-0 after:inline-block after:h-4.5 after:w-4.5 after:absolute after:top-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] after:right-0 after:transform after:rotate-90"></div>
            <div className="before:inline-block before:h-4.5 before:w-4.5 before:absolute before:bottom-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] before:left-0 before:transform before:-rotate-90 after:inline-block after:h-4.5 after:w-4.5 after:absolute after:bottom-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] after:right-0 after:transform after:rotate-180"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaldurFrame;
