import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;
    inputRef.current.value = "";

    setChatHistory((history) => {
      const newHistory = [...history, { role: "user", text: userMsg }];
      generateBotResponse(newHistory);
      return newHistory;
    });

    setChatHistory((history) => [
      ...history,
      { role: "model", text: "Analysing..." },
    ]);
  };

  return (
    <form onSubmit={handleOnSubmit} action="#" className="chat-inp">
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="msg-inp"
        required
      />
      <button
        style={{ transform: "rotate(180deg)" }}
        className="material-symbols-rounded"
      >
        keyboard_arrow_down
      </button>
    </form>
  );
};

export default ChatForm;
