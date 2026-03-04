const BaldurDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`baldur-divider ${className ? className : ""} relative mx-auto w-[calc(100%-48px)] before:absolute before:bg-[url('/icons/baldur-divider/divider-deco.svg')] before:bg-contain before:bg-no-repeat before:h-1.25 before:w-7.5 before:-top-px before:z-1 before:-left-5.75 after:absolute after:bg-[url('/icons/baldur-divider/divider-deco.svg')] after:bg-contain after:bg-no-repeat after:h-1.25 after:w-7.5 after:-top-px after:z-1 after:-right-5.75 after:transform after:scale-x-[-1]`}
    >
      <div className="relative border-t border-b border-t-weathered-oak border-b-burnt-umber -top-px h-1.25"></div>
    </div>
  );
};
export default BaldurDivider;
