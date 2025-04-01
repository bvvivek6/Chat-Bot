import React from "react";
import ChatBotIcon from "./ChatBotIcon";

const Chatmsg = ({ chat }) => {
  return (
    <div className={`msg ${chat.role}-msg`}>
      {chat.image && (
        <img
          src={`data:image/jpeg;base64,${chat.image}`}
          alt="User Upload"
          className="chat-img"
        />
      )}
      <p className="msg-text">{chat.text}</p>
    </div>
  );
};

export default Chatmsg;
