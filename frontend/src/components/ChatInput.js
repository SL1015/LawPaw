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
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
