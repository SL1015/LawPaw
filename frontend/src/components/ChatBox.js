import React, { useState, useEffect } from "react";
import "./ChatBox.css";
// import callBotApi from "../api/chat/APIbot";
import { sendMessageToAPI } from "../api//chat/api";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [aiBotResponse, setAiBotResponse] = useState("");
  const [clientInput, setClientInput] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }
    setClientInput(message);
    setMessage("");
    setTextareaHeight("auto");
    setFormSubmitted(true);
  };

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
    const currentHeight = event.target.style.height;
    const scrollHeight = event.target.scrollHeight + "px";
    if (scrollHeight !== currentHeight) {
      if (currentHeight >= "200px") {
        setTextareaHeight(scrollHeight);
      } else {
        setTextareaHeight("150px");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (clientInput) {
        setIsLoading(true);

        try {
          
          const response = await sendMessageToAPI(clientInput, "en");
          
          
          if (typeof response === "string") {
            setAiBotResponse(response);
          }

          setIsLoading(false);
        } catch (error) {
          console.error("Error calling sendMessageToAPI:", error);
        } finally {
          
          setFormSubmitted(true);
        }
      }
    };

    fetchData();
  }, [clientInput]);

  return (
    <>
      <section className="chat-window">
        <ChatMessages
          clientInput={clientInput}
          aiBotResponse={aiBotResponse}
          isLoading={isLoading}
          formSubmitted={formSubmitted}
        />
        <ChatInput
          message={message}
          textareaHeight={textareaHeight}
          onTextareaChange={handleTextareaChange}
          onSubmit={handleSubmit}
        />
      </section>
    </>
  );
};

export default ChatBox;
