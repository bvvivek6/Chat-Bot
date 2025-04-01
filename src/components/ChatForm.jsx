import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();
  const fileInputRef = useRef();
  const [imagePreview, setImagePreview] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userMsg = inputRef.current.value.trim();
    const file = fileInputRef.current.files[0];

    if (!userMsg && !file) return;
    inputRef.current.value = "";
    fileInputRef.current.value = null;
    setImagePreview(null);

    let base64Image = null;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      base64Image = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
      });
    }

    const newHistory = [
      ...chatHistory,
      { role: "user", text: userMsg, image: base64Image },
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

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="chat-inp">
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="msg-inp"
      />

      <label htmlFor="file-upload" className="custom-file-upload">
        <FiUpload size={15} />
        Upload Image
      </label>
      <input
        ref={fileInputRef}
        type="file"
        id="file-upload"
        accept="image/*"
        className="file-inp"
        onChange={handleImagePreview}
      />
      {imagePreview && (
        <img src={imagePreview} alt="Preview" className="preview-img" />
      )}
    </form>
  );
};

export default ChatForm;
