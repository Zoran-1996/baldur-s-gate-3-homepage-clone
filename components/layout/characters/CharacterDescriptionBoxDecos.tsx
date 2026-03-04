const CharacterDescriptionBoxDecos = () => {
  return (
    <div className="character-description-box-decos absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="before:absolute before:-z-1 before:top-px before:left-0 before:w-full before:h-2.75 before:bg-[url('/icons/heroes/border-pattern.svg')] before:bg-repeat before:bg-contain before:border-b before:border-dune after:absolute after:-z-1 after:bottom-px after:left-0 after:h-2.75 after:w-full after:bg-[url('/icons/heroes/border-pattern.svg')] after:bg-repeat after:bg-contain after:border-b after:border-dune after:transform after:scale-y-[-1]"></div>
      <div className="before:absolute before:-z-1 before:top-0 before:left-px before:h-full before:w-2.75 before:bg-[url('/icons/heroes/border-pattern-vertical.svg')] before:bg-repeat before:bg-contain before:border-r before:border-dune after:absolute after:-z-1 after:top-0 after:right-px after:h-full after:w-2.75 after:bg-[url('/icons/heroes/border-pattern-vertical.svg')] after:bg-repeat after:bg-contain after:border-r after:border-dune after:transform after:scale-x-[-1]"></div>

      <div className="w-20.25 h-19.5 absolute bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-contain bg-no-repeat top-0 left-0" />
      <div className="w-20.25 h-19.5 absolute bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-contain bg-no-repeat top-0 right-0 transform rotate-90" />
      <div className="w-20.25 h-19.5 absolute bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-contain bg-no-repeat bottom-0 left-0 transform -scale-x-[1] rotate-180" />
      <div className="w-20.25 h-19.5 absolute bg-[url('/icons/accordion/accordion-deco-corner.svg')] bg-contain bg-no-repeat bottom-0 right-0 transform -scale-x-[1] rotate-90" />
    </div>
  );
};

export default CharacterDescriptionBoxDecos;
