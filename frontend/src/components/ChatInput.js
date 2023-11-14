import React, { useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import "./ChatInput.css";

const ChatInput = ({ message, textareaHeight, onTextareaChange, onSubmit }) => {
  const myFormRef = useRef(null);

  const onEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      myFormRef.current.requestSubmit();
    }
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
          placeholder="Ask your LawPaw..."
          value={message}
          onChange={onTextareaChange}
          onKeyDown={onEnterPress}
        ></textarea>
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <g clip-path="url(#clip0_106_1386)">
              <path
                d="M26.6429 15L13.6793 15"
                stroke="#012E40"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.7331 22.6603L26.643 15L10.7331 7.33968L13.6794 15L10.7331 22.6603Z"
                stroke="#012E40"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_106_1386">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(14.8579 0.857864) rotate(45)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
