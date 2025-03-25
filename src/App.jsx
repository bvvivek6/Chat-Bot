import React from "react";
import ChatBotIcon from "./components/chatBotIcon";
import ChatForm from "./components/ChatForm";

const App = () => {
  return (
    <div className="container">
      <div className="chat-bot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chat Bot</h2>
          </div>
          <button class="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        <div className="chat-body">
          <div className="msg bot-msg">
            <ChatBotIcon />
            <p clasName="msg-text">Hello there good moring</p>
          </div>
          <div className="msg user-msg">
            <p className="msg-text">Hello man i want some help!</p>
          </div>
        </div>
        <div className="chat-footer">
          <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default App;
