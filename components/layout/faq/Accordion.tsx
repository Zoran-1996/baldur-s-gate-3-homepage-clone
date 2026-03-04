interface AccordionProps {
  className?: string;
  children: React.ReactNode;
}

const Accordion = ({ className, children }: AccordionProps) => {
  return (
    <div
      className={`accordion grid gap-3.75 items-start lg:grid-cols-2 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Accordion;
