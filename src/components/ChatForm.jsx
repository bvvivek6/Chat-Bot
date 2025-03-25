import React, { useRef } from "react";

const ChatForm = () => {
  const inputRef = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;
    console.log(userMsg);
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
