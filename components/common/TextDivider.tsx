const TextDivider = ({ className = "" }: { className?: string }) => {
  const hasWidth = className.includes("w-");

  return (
    <div className={`text-deco ${hasWidth ? "" : "w-47.5"} ${className}`} />
  );
};

export default TextDivider;
