import React from 'react';

function PlayButton() {
  return (
    <svg
      width="186"
      height="143"
      viewBox="0 0 186 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <g filter="url(#filter1_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 49.1269V103H124.322L145.417 85.9875V32.1143H53.0956L32 49.1269Z"
            fill="#2563EB"
          />
        </g>
        <path
          d="M79.8792 82.8158L79.8792 52.2726L106.33 67.5442L79.8792 82.8158Z"
          fill="#EFF6FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0.114258"
          width="185.417"
          height="142.886"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="18" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.145098 0 0 0 0 0.388235 0 0 0 0 0.921569 0 0 0 0.64 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="20"
          y="24.1143"
          width="137.417"
          height="94.8859"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.358333 0 0 0 0 0.8845 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default PlayButton;
