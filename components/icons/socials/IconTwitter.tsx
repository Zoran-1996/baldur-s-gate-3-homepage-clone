const IconTwitter = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`social-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
    >
      <defs>
        {/* Main gradient */}
        <linearGradient
          id="icons-gradient"
          x1="11.136%"
          x2="69.008%"
          y1="12.291%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#DDC9A7" />
          <stop offset="100%" stopColor="#B78F6D" />
        </linearGradient>

        {/* Hover / white gradient */}
        <linearGradient
          id="icons-gradient-white"
          x1="11.136%"
          x2="69.008%"
          y1="12.291%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#d1d1d1" />
        </linearGradient>
      </defs>

      {/* Main path */}
      <path
        fill="url(#icons-gradient)"
        fillRule="evenodd"
        d="M20.9199662,1 L14.0712594,8.70392323 L8.06329337,1 L0,1 L9.97850217,13.7953307 L0.996225313,23.8991718 L1.11538496,24 L4.02384597,24 L11.4352054,15.6632226 L17.9367066,24 L26,24 L15.5279626,10.5718151 L24.0372215,1 L20.9199662,1 Z M4.8116302,3.42300695 L7.03089039,3.42300695 L21.1201945,21.4895473 L18.9009048,21.4895473 L4.8116302,3.42300695 Z"
      />

      {/* Hover path */}
      <path
        className="hover group-hover:opacity-100 opacity-0 transition-opacity duration-400 ease-in-out"
        fill="url(#icons-gradient-white)"
        fillRule="evenodd"
        d="M20.9199662,1 L14.0712594,8.70392323 L8.06329337,1 L0,1 L9.97850217,13.7953307 L0.996225313,23.8991718 L1.11538496,24 L4.02384597,24 L11.4352054,15.6632226 L17.9367066,24 L26,24 L15.5279626,10.5718151 L24.0372215,1 L20.9199662,1 Z M4.8116302,3.42300695 L7.03089039,3.42300695 L21.1201945,21.4895473 L18.9009048,21.4895473 L4.8116302,3.42300695 Z"
      />
    </svg>
  );
};

export default IconTwitter;
