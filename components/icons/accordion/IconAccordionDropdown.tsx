type IconAccordionDropdownProps = {
  size?: number;
  className?: string;
};

const IconAccordionDropdown = ({
  size = 24,
  className,
}: IconAccordionDropdownProps) => {
  return (
    <svg
      viewBox="0 0 46 50"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={`icon-accordion-dropdown ${className ?? ""}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="linearGradient-uld1nnj4_a-1"
          x1="50%"
          y1="99.9644886%"
          x2="50%"
          y2="0%"
        >
          <stop stopColor="#C19976" offset="0%" />
          <stop stopColor="#E5C5A8" offset="99.9644886%" />
        </linearGradient>

        <linearGradient
          id="linearGradient-uld1nnj4_a-2"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
        >
          <stop stopColor="#E5C5A8" offset="0%" />
          <stop stopColor="#E0BEA1" offset="100%" />
        </linearGradient>

        <linearGradient
          id="linearGradient-uld1nnj4_a-3"
          x1="0%"
          y1="44.382595%"
          x2="100%"
          y2="56.6197229%"
        >
          <stop stopColor="#DDC9A7" offset="0%" />
          <stop stopColor="#B78F6D" offset="100%" />
        </linearGradient>
      </defs>

      <g stroke="none" fill="none" fillRule="evenodd">
        <g transform="translate(1, 2)">
          <g strokeWidth="1.3" vectorEffect="non-scaling-stroke">
            <path
              className="background group-hover:fill-[rgb(144,106,75)] group-hover:fill-opacity-35 [&.active]:fill-[rgb(144,106,75)] [&.active]:fill-opacity-35"
              fill="#000"
              fillOpacity="0.5"
              stroke="url(#linearGradient-uld1nnj4_a-1)"
              d="M4.51377143,11.59719
                 C7.70754286,7.57597471
                 9.88365714,6.2666247
                 14.7544571,4.60286889
                 C19.6252571,2.93974258
                 22,0
                 22,0
                 C22,0
                 24.3753714,2.93974258
                 29.2461714,4.60286889
                 C34.1169714,6.2666247
                 36.2930857,7.57597471
                 39.4868571,11.59719
                 C42.3179429,15.3049168
                 44,19.9398899
                 44,24.9676681
                 C44,37.1358102
                 34.1502857,47
                 22,47
                 C9.84971429,47
                 0,37.1358102
                 0,24.9676681
                 C0,19.9398899
                 1.68205714,15.3049168
                 4.51314286,11.5965605
                 Z"
            />

            <path
              stroke="url(#linearGradient-uld1nnj4_a-2)"
              d="M32.6403943,5.91756961
                 C29.6471371,4.6082196
                 27.5489657,3.87171022
                 26.42068,1.82522133
                 C23.7071371,2.59257597
                 22.0005657,4.78258977
                 22.0005657,4.78258977
                 C22.0005657,4.78258977
                 20.2933657,2.59257597
                 17.5798229,1.82522133
                 C16.4521657,3.87171022
                 14.3533657,4.6082196
                 11.3601086,5.91756961"
            />
          </g>

          <g
            transform="translate(11, 14)"
            fill="url(#linearGradient-uld1nnj4_a-3)"
            fillRule="nonzero"
            className="arrow group-hover:fill-white [&.active]:fill-white"
          >
            <path
              d="M10.88637,17.4291992
                     L1.81530217,8.34314575
                     L1.10819538,6.22182541
                     L3.22951573,6.92893219
                     L10.7841954,14.6928254
                     L18.5432242,6.92893219
                     L20.6645446,6.22182541
                     L19.9574378,8.34314575
                     L11,17.4291992
                     Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconAccordionDropdown;
