import React from "react";
import ChatBotIcon from "./ChatBotIcon";

const Chatmsg = ({ chat }) => {
  return (
    <div className={`msg ${chat.role === "model" ? "bot" : "user"}-msg`}>
      {chat.role === "model" && <ChatBotIcon />}
      <p className="msg-text">{chat.text}</p>
    </div>
  );
};

export default Chatmsg;
