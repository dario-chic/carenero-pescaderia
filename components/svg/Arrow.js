import React from "react";

const Arrow = ({ modifier }) => {
  return (
    <svg
      id={modifier}
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.29169 0.875L5.91669 5.5L10.5417 0.875"
        stroke="#000B0F"
        strokeWidth="0.770833"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
