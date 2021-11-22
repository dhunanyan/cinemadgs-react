import React from "react";

import "./message.styles.scss";

const Message = ({ message, onClose }) => {
  const closeMessage = () => {};

  return (
    <div className="message">
      <div className="message__content">
        <p className="message__descr">{message}</p>
        <button className="message__button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Message;
