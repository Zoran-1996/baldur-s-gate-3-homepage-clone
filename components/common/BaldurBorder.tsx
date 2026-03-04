const BaldurBorder = ({ className }: { className?: string }) => {
  return (
    <div
      className={`baldur-border ${className ? className : ""} relative mx-auto w-[calc(100%-12px)] opacity-50 before:absolute before:bg-[url('/icons/baldur-border/border-deco.svg')] before:bg-contain before:bg-no-repeat before:h-1.5 before:w-1.5 before:z-1 before:top-1/2 before:transform before:-translate-y-1/2 before:-left-1.25 after:absolute after:bg-[url('/icons/baldur-border/border-deco.svg')] after:bg-contain after:bg-no-repeat after:h-1.5 after:w-1.5 after:z-1 after:transform after:-translate-y-1/2 after:-right-1.25`}
    >
      <div className="h-px bg-wood-brown"></div>
    </div>
  );
};
export default BaldurBorder;
