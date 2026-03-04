interface BaldurHeadingProps {
  className?: string;
  children: React.ReactNode;
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const BaldurHeading = ({
  children,
  heading = "h2",
  className,
}: BaldurHeadingProps) => {
  const baseClassName = "text-baldur-gradient text-4xl uppercase";

  switch (heading) {
    case "h1":
      return (
        <h1 className={`${baseClassName} ${className || ""}`}>{children}</h1>
      );
    case "h3":
      return (
        <h3 className={`${baseClassName} ${className || ""}`}>{children}</h3>
      );
    case "h4":
      return (
        <h4 className={`${baseClassName} ${className || ""}`}>{children}</h4>
      );
    case "h5":
      return (
        <h5 className={`${baseClassName} ${className || ""}`}>{children}</h5>
      );
    case "h6":
      return (
        <h6 className={`${baseClassName} ${className || ""}`}>{children}</h6>
      );
    default:
      return (
        <h2 className={`${baseClassName} ${className || ""}`}>{children}</h2>
      );
  }
};

export default BaldurHeading;
