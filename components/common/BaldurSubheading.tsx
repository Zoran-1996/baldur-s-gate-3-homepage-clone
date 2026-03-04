interface BaldurSubheadingProps {
  children: string;
  className?: string;
}

const BaldurSubheading = ({ children, className }: BaldurSubheadingProps) => {
  return (
    <span
      className={`text-sunrise-yellow inline-block text-sm uppercase tracking-widest font-crimson ${className || ""}`}
    >
      {children}
    </span>
  );
};

export default BaldurSubheading;
