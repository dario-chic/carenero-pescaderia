import React from "react";

const Star = ({ modifier }) => {
  return (
    <svg
      id={modifier}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.55253 11.4362L11.9436 14.0864L10.7783 9.09143L14.6578 5.73064L9.54911 5.29011L7.55253 0.586426L5.55595 5.29011L0.447266 5.73064L4.31963 9.09143L3.16148 14.0864L7.55253 11.4362Z"
        fill="#42C3F7"
      />
    </svg>
  );
};

export default Star;
