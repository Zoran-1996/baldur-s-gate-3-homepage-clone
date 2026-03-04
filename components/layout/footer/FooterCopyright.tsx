const FooterCopyright = ({ className }: { className?: string }) => {
  return (
    <div className={`footer-copyright text-sm text-wood-brown ${className}`}>
      <p>
        © 2025 Larian Studios. Larian Studios and the Larian Studios logo are
        registered trademarks of Larian Studios Games Limited affiliates. © 2025
        Wizards of the Coast. Wizards of the Coast, Baldur&apos;s Gate, Dungeons
        & Dragons, D&D, Forgotten Realms and their respective logos are
        registered trademarks of Wizards of the Coast LLC. All rights reserved.
      </p>
      <p className="mt-4">
        Code and Design:{" "}
        <a
          className="text-white/80 transition-colors duration-300 ease-in hover:text-white"
          href="https://larian.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Larian Studios
        </a>
      </p>
    </div>
  );
};
export default FooterCopyright;
