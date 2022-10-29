import React from "react";

const Steps = ({ steps }) => {
  return (
    <div className="steps">
      <h2 className="steps__current">
        {steps === "a" ? "Información" : "Confirmación"}
      </h2>
      <div className={`steps__bar ${steps}`}></div>
    </div>
  );
};

export default Steps;
