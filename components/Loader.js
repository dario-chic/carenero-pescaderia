import React from "react";

const Loader = ({ modifier }) => {
  return (
    <svg className={`ring ${modifier}`} viewBox="25 25 50 50" strokeWidth="5">
      <circle cx="50" cy="50" r="20" />
    </svg>
  );
};

export default Loader;
