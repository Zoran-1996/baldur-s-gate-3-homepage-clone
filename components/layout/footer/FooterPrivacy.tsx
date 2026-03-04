const FooterPrivacy = () => {
  return (
    <ul className="footer-privacy flex flex-wrap gap-1">
      <li className="relative flex items-center gap-1 after:content-['|'] after:text-sunrise-yellow">
        <a
          href="https://larian.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunrise-yellow hover:text-white transition-colors duration-400 ease-in-out"
        >
          Privacy Policy
        </a>
      </li>
      <li className="relative flex items-center gap-1 after:content-['|'] after:text-sunrise-yellow">
        <a
          href="https://larian.com/fan-content-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunrise-yellow hover:text-white transition-colors duration-400 ease-in-out"
        >
          Fan Content Policy
        </a>
      </li>
      <li className="relative">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunrise-yellow hover:text-white transition-colors duration-400 ease-in-out"
        >
          Cookie Settings
        </a>
      </li>
    </ul>
  );
};
export default FooterPrivacy;
