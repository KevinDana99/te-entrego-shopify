const EnableShipmentStatus = () => {
  return (
    <svg
      width="60"
      height="62"
      viewBox="0 0 60 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="25" fill="#76CCFB" />
      <g filter="url(#filter0_d_263_114)">
        <circle cx="30" cy="30" r="20" fill="white" />
      </g>
      <path
        d="M35.5233 24L28 31.7113L24.476 28.3707L22 30.848L28 36.6667L38 26.4767L35.5233 24Z"
        fill="#36B289"
      />
      <defs>
        <filter
          id="filter0_d_263_114"
          x="2"
          y="6"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.196078 0 0 0 0 0.286275 0 0 0 0 0.392157 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_263_114"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_263_114"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default EnableShipmentStatus;
