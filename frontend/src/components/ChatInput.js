import React, { useRef } from "react";
import "./ChatInput.css";
import SendBtn from "./Images/icons/send.svg"

const ChatInput = ({ message, textareaHeight, onTextareaChange, onSubmit, Language }) => {
  const myFormRef = useRef(null);
  const onEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      myFormRef.current.requestSubmit();
    }
  };

  const placeholders = {
    en: "Ask your LawPaw...",
    de: "Fragen sie ihren LawPaw...",
    fr: "Demandez à votre LawPaw..."
    
  };

  return (
    <div className="chat-input">
      <form onSubmit={onSubmit} ref={myFormRef}>
        <textarea
          id="prompt-input"
          style={{ height: textareaHeight }}
          rows="1"
          cols="50"
          name="input-msg"
          placeholder={placeholders[Language]}
          value={message}
          onChange={onTextareaChange}
          onKeyDown={onEnterPress}
        ></textarea>
        <button type="submit">
          <img src={SendBtn} alt="Send Message But"/>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
