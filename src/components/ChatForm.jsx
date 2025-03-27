import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;
    inputRef.current.value = "";

    const newHistory = [
      ...chatHistory,
      { role: "user", text: userMsg },
      { role: "model", text: "Analysing..." },
    ];

    setChatHistory(newHistory);

    const response = await generateBotResponse(newHistory);
    setChatHistory((prev) =>
      prev.map((msg, index) =>
        index === prev.length - 1 ? { role: "model", text: response } : msg
      )
    );
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
    </form>
  );
};

export default ChatForm;
