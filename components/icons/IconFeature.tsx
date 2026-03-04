interface IconFeatureProps {
  className?: string;
  imageSrc: string;
}

const IconFeature = ({ className, imageSrc }: IconFeatureProps) => {
  return (
    <svg
      className={`group cursor-pointer ${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 48 48"
      width="48"
      height="48"
    >
      <defs>
        <linearGradient
          id="feature-linear-gradient"
          x1="3.862"
          x2="44.962"
          y1="3.486"
          y2="44.587"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b78f6d"></stop>
          <stop offset="1" stopColor="#6d523b"></stop>
        </linearGradient>
        <linearGradient
          id="feature-linear-gradient-2"
          x1="3.862"
          x2="44.962"
          y1="3.486"
          y2="44.587"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset=".997" stopColor="#d8ae8a"></stop>
        </linearGradient>
        <clipPath id="feature-clippath">
          <path
            id="mask_photo"
            d="M41.976 0 48 6.024v35.525L41.549 48H6.776L0 41.224V7.349L7.349 0h34.627z"
            className="cls-4"
          ></path>
        </clipPath>
        <clipPath id="feature-clippath-1">
          <path
            id="mask_photo-2"
            d="M41.976 0 48 6.024v35.525L41.549 48H6.776L0 41.224V7.349L7.349 0h34.627z"
            className="cls-4"
            data-name="mask_photo"
          ></path>
        </clipPath>
      </defs>
      <g id="Normal">
        <g id="Shape" clipPath="url(#feature-clippath)">
          <image xlinkHref={imageSrc} id="image" width="48" height="48"></image>
        </g>
        <path
          id="outline"
          fill="url(#feature-linear-gradient)"
          d="M41.562 1 47 6.438v34.697L41.135 47H7.19L1 40.81V7.763L7.763 1h33.799m.414-1H7.349L0 7.349v33.875L6.776 48h34.773L48 41.549V6.024L41.976 0Z"
        ></path>
      </g>
      <g
        id="Hover"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <g id="Shape-2" clipPath="url(#feature-clippath-1)" data-name="Shape">
          <image xlinkHref={imageSrc} id="image" width="48" height="48"></image>
        </g>
        <path
          id="outline-2"
          fill="url(#feature-linear-gradient-2)"
          d="M41.148 2 46 6.852v33.869L40.72 46H7.605L2 40.396V8.177L8.177 2h32.97m.829-2H7.349L0 7.349v33.875L6.776 48h34.773L48 41.549V6.024L41.976 0Z"
          data-name="outline"
        ></path>
      </g>
    </svg>
  );
};

export default IconFeature;
