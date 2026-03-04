const IconRing = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`social-link-ring ${className} w-13 h-13 md:w-16 md:h-16`}
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="64"
      viewBox="0 0 58 64"
    >
      <defs>
        <linearGradient
          id="a-ring-gradient"
          x1="50%"
          x2="50%"
          y1="99.964%"
          y2="0%"
        >
          <stop
            className="first-gradient"
            offset="0%"
            stopColor="#C19976"
          ></stop>
          <stop
            className="second-gradient"
            offset="99.964%"
            stopColor="#E5C5A8"
          ></stop>
        </linearGradient>
        <linearGradient
          id="b-ring-gradient"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop
            className="first-gradient"
            offset="0%"
            stopColor="#E5C5A8"
          ></stop>
          <stop
            className="second-gradient"
            offset="100%"
            stopColor="#E0BEA1"
          ></stop>
        </linearGradient>
        <linearGradient
          id="a-ring-gradient-hover"
          x1="50%"
          x2="50%"
          y1="99.964%"
          y2="0%"
        >
          <stop
            className="first-gradient"
            offset="0%"
            stopColor="#EBDED2"
          ></stop>
          <stop
            className="second-gradient"
            offset="99.964%"
            stopColor="#D1B9A3"
          ></stop>
        </linearGradient>
        <linearGradient
          id="b-ring-gradient-hover"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop
            className="first-gradient"
            offset="0%"
            stopColor="#EBDED2"
          ></stop>
          <stop
            className="second-gradient"
            offset="100%"
            stopColor="#E8D9CC"
          ></stop>
        </linearGradient>
      </defs>
      <g
        className="normal"
        fill="none"
        fillRule="evenodd"
        transform="translate(1 2)"
      >
        <path
          className="ring-bg"
          fill="#000"
          fillOpacity=".5"
          stroke="url(#a-ring-gradient)"
          strokeWidth="1.4"
          d="M5.7448,14.8049235 C9.8096,9.67145708 12.5792,7.99994643 18.7784,5.87600284 C24.9776,3.75286286 28,0 28,0 C28,0 31.0232,3.75286286 37.2224,5.87600284 C43.4216,7.99994643 46.1912,9.67145708 50.256,14.8049235 L50.256,14.8049235 C53.8592,19.5381916 56,25.4551786 56,31.8736188 C56,47.4074173 43.464,60 28,60 C12.536,60 7.10542736e-16,47.4074173 7.10542736e-16,31.8736188 C7.10542736e-16,25.4551786 2.1408,19.5381916 5.744,14.8041198 L5.7448,14.8049235 Z"
        ></path>
        <path
          className="ring-stroke-1"
          stroke="#F1E1D1"
          d="M29.3796,4.70361491 C30.6668,5.68000214 32.9228,7.10721509 36.4284,8.43799472 L37.1604,8.7168477 C46.3228,12.3772953 52.7996,21.3656831 52.7996,31.8736992 C52.7996,40.9175361 48.114,48.5735371 40.9844,53.1075097 C34.7116,57.0966342 27.9996,56.7856368 27.9996,56.7856368 C27.9996,56.7856368 21.2876,57.0966342 15.0156,53.1075097 C7.886,48.5735371 3.1996,40.9175361 3.1996,31.8736992 C3.1996,21.3656831 9.6772,12.3772953 18.8396,8.7168477 L19.5708,8.43799472 C23.0772,7.10641148 25.3332,5.67919853 26.6204,4.70361491"
          opacity=".25"
        ></path>
        <path
          className="ring-stroke-2"
          stroke="url(#b-ring-gradient)"
          strokeWidth="1.4"
          d="M41.54232,7.55434419 C37.73272,5.88283353 35.06232,4.94260879 33.62632,2.33006978 C30.17272,3.30967146 28.00072,6.10543375 28.00072,6.10543375 C28.00072,6.10543375 25.82792,3.30967146 22.37432,2.33006978 C20.93912,4.94260879 18.26792,5.88283353 14.45832,7.55434419"
        ></path>
      </g>
      <g
        className="hover"
        fill="none"
        fillRule="evenodd"
        transform="translate(1 2)"
      >
        <path
          className="group-hover:opacity-100 opacity-0 transition-opacity duration-400 ease-in-out"
          fill="#906a4b"
          fillOpacity=".3"
          stroke="url(#a-ring-gradient-hover)"
          strokeWidth="1.4"
          d="M5.7448,14.8049235 C9.8096,9.67145708 12.5792,7.99994643 18.7784,5.87600284 C24.9776,3.75286286 28,0 28,0 C28,0 31.0232,3.75286286 37.2224,5.87600284 C43.4216,7.99994643 46.1912,9.67145708 50.256,14.8049235 L50.256,14.8049235 C53.8592,19.5381916 56,25.4551786 56,31.8736188 C56,47.4074173 43.464,60 28,60 C12.536,60 7.10542736e-16,47.4074173 7.10542736e-16,31.8736188 C7.10542736e-16,25.4551786 2.1408,19.5381916 5.744,14.8041198 L5.7448,14.8049235 Z"
        ></path>
        <path
          className="ring-stroke-1"
          stroke="#F1E1D1"
          d="M29.3796,4.70361491 C30.6668,5.68000214 32.9228,7.10721509 36.4284,8.43799472 L37.1604,8.7168477 C46.3228,12.3772953 52.7996,21.3656831 52.7996,31.8736992 C52.7996,40.9175361 48.114,48.5735371 40.9844,53.1075097 C34.7116,57.0966342 27.9996,56.7856368 27.9996,56.7856368 C27.9996,56.7856368 21.2876,57.0966342 15.0156,53.1075097 C7.886,48.5735371 3.1996,40.9175361 3.1996,31.8736992 C3.1996,21.3656831 9.6772,12.3772953 18.8396,8.7168477 L19.5708,8.43799472 C23.0772,7.10641148 25.3332,5.67919853 26.6204,4.70361491"
          opacity=".4"
        ></path>
        <path
          stroke="url(#b-ring-gradient-hover)"
          strokeWidth="1.4"
          d="M41.54232,7.55434419 C37.73272,5.88283353 35.06232,4.94260879 33.62632,2.33006978 C30.17272,3.30967146 28.00072,6.10543375 28.00072,6.10543375 C28.00072,6.10543375 25.82792,3.30967146 22.37432,2.33006978 C20.93912,4.94260879 18.26792,5.88283353 14.45832,7.55434419"
        ></path>
      </g>
    </svg>
  );
};
export default IconRing;
