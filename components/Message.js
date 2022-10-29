import React from "react";

const Message = ({ icon, header, msg }) => {
  return (
    <div className="message">
      {icon}
      <h3 className="message__header">{header}</h3>
      <p className="message__msg">{msg}</p>
    </div>
  );
};

export default Message;
