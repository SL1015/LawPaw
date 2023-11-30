import React, { useEffect, useRef, useState } from "react";
import "./ChatInput.css";
import SendBtn from "./Images/icons/send.svg"
import SendBtnInactive from "./Images/icons/send-inactive.svg"

const ChatInput = ({ message, textareaHeight, onTextareaChange, onSubmit, Language }) => {
  const myFormRef = useRef(null);
  const [isMessageEmpty, setIsMessageEmpty] = useState(true);

  useEffect(() => {
    setIsMessageEmpty(!message.trim());
  }, [message]);

  const onEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isMessageEmpty) {
        myFormRef.current.requestSubmit();
      }
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
          <img src={isMessageEmpty ? SendBtnInactive : SendBtn} alt="Send Message But"/>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
