import React, { useEffect, useRef, useState } from "react";
import "./ChatInput.css";
import SendBtn from "./Images/icons/send.svg";
import SendBtnInactive from "./Images/icons/send-inactive.svg";

const ChatInput = ({
  message,
  textareaHeight,
  onTextareaChange,
  onSubmit,
  Language,
  isLoading
}) => {
  const myFormRef = useRef(null);
  const [isMessageEmpty, setIsMessageEmpty] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsMessageEmpty(!message.trim());
  }, [message]);

  useEffect(() => {
    const onTouchStart = () => setIsTouchDevice(true);
    window.addEventListener("touchstart", onTouchStart);

    return () => window.removeEventListener("touchstart", onTouchStart);
  }, []);

  const onEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isTouchDevice) {
      e.preventDefault();
      if (!isMessageEmpty) {
        myFormRef.current.requestSubmit();
      }
    }
  };

  const placeholders = {
    en: "Ask your LawPaw...",
    de: "Fragen sie ihren LawPaw...",
    fr: "Demandez à votre LawPaw...",
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
          <img
            src={isMessageEmpty || isLoading ? SendBtnInactive : SendBtn}
            alt="Send Message But"
          />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
