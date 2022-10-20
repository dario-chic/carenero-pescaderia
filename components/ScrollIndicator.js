import React, { useEffect, useRef, useState } from "react";

const ScrollIndicator = () => {
  const [scrollActive, setScrollActive] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (
        window.scrollYOffset > 160 ||
        document.documentElement.scrollTop > 160
      ) {
        setScrollActive(false);
      } else {
        setScrollActive(true);
      }
    });
  }, []);

  return (
    <div className={`scroll-animation ${scrollActive ? "active" : "inactive"}`}>
      {/* <div className="scroll-animation__circle"></div>
       */}
      <div className="box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
