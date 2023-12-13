import React, { useEffect, useRef, useState } from "react";
import "./ChatInput.css";
import { useParams } from "react-router-dom";
// import SendBtn from "./Images/icons/send.svg";
// import SendBtnInactive from "./Images/icons/send-inactive.svg";

const ChatInput = ({
  message,
  textareaHeight,
  onTextareaChange,
  onSubmit,
  Language,
  isLoading,
  formSubmited
}) => {
  const {language} = useParams();
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

  const spanTxt = {
    en: "Share more about your situation for better assistance.",
    de: "Teilen Sie uns mehr über Ihre Situation mit, damit wir Ihnen besser helfen können.",
    fr: "Expliquez votre situation pour obtenir une meilleure assistance.",
  }



  return (
    <>
    <span className={`info-input ${formSubmited ? "off" : ""}`}>{spanTxt[language]}</span>
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
          {/* <img
            // src={isMessageEmpty || isLoading ? SendBtnInactive : SendBtn}
            src={SendBtn}
            alt="Send Message But"
          /> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            className="active"
          >
            <g clip-path="url(#clip0_232_1702)">
              <path
                d="M26.1429 14.9658L13.1793 14.9658"
                stroke={isMessageEmpty || isLoading ? "#7e8a8c" : "#012E40" }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2331 22.6261L26.143 14.9658L10.2331 7.30547L13.1794 14.9658L10.2331 22.6261Z"
                stroke={isMessageEmpty || isLoading ? "#7e8a8c" : "#012E40" }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_232_1702">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(14.3579 0.823654) rotate(45)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>
    </div>
    </>
  );
};

export default ChatInput;
