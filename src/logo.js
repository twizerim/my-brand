import React from 'react';

const StarLogo = ({ className }) => {
  return (
    <svg
      viewBox="0 0 102 102"
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="starLogoTitle"
      role="img"
      className={className}
    >
      <title id="starLogoTitle">Star Logo</title>
      {/* Combined Star Shape */}
      <path
        d="M51 0 L63.5 36.5 H102 L69 59.5 L81.5 96 L51 73.5 L20.5 96 L33 59.5 L0 36.5 H38.5 Z"
        fill="none"
        stroke="white"
        strokeWidth="10"
      />
      {/* Top Section */}
      <path
        d="M51 0 L63.5 36.5 H102 L69 59.5 L81.5 96 L51 73.5 Z"
        fill="#F0147A
"
      />
      {/* Bottom Left Section */}
      <path
        d="M51 73.5 L20.5 96 L33 59.5 L0 36.5 H38.5 L51 0 Z"
        fill="#F0147A
"
      />
      {/* Bottom Right Section */}
      <path
        d="M51 73.5 L81.5 96 L69 59.5 L102 36.5 H63.5 L51 0 Z"
        fill="#1E4087
"
      />
    </svg>
  );
};

export default StarLogo;
