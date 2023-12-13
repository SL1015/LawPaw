import React, { useState } from "react";
import "./ChatBox.css";
import { sendMessageToAPI } from "../api/chat/api";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import SelectQuestions from "./SelectQuestions";

const ChatBox = ({ Language, Canton, Category }) => {
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clientInputs, setClientInputs] = useState([]);
  const [botResponses, setBotResponses] = useState([]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim() || isLoading) {
      return;
    }

    const userMessage = message.trim();
    setClientInputs((prevClientInputs) => [...prevClientInputs, userMessage]);
    setMessage("");
    setTextareaHeight("auto");

    try {
      setFormSubmitted(true)
      setIsLoading(true);
      const response = await sendMessageToAPI(userMessage, Language, Canton, Category);
      setIsLoading(false);

      setBotResponses((prevBotResponses) => [...prevBotResponses, response]);
    } catch (error) {
      console.error("Error calling callBotApi:", error);
      setIsLoading(false);
    }
  };

  // const handleTextareaChange = (event) => {
  //   setMessage(event.target.value);
  //   const currentHeight = event.target.style.height;
  //   const scrollHeight = event.target.scrollHeight + "px";
  //   if (scrollHeight !== currentHeight) {
  //     if (currentHeight >= "200px") {
  //       event.preventDefault();
  //       setTextareaHeight(scrollHeight);
  //     } else {
  //       event.preventDefault();
  //       setTextareaHeight(currentHeight);
  //     }
  //   }
  // };

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
    const textarea = event.target;  
    textarea.style.height = '0';  
    const newHeight = textarea.scrollHeight;  
    const maxHeight = 110;
    if (newHeight > maxHeight) {
      textarea.style.height = `${maxHeight}px`;
      setTextareaHeight(`${maxHeight}px`);
    } else {
      textarea.style.height = `${newHeight}px`;
      setTextareaHeight(`${newHeight}px`);
    }
  };

  const handleSelectedQuestion = (question) => {
    setMessage(question);
  };

  return (
    <>
      <section className="chat-window">
        <ChatMessages
          clientInputs={clientInputs}
          botResponses={botResponses}
          isLoading={isLoading}
        />
        <ChatInput
          message={message}
          textareaHeight={textareaHeight}
          onTextareaChange={handleTextareaChange}
          onSubmit={handleSubmit}
          Language={Language}
          isLoading={isLoading}
          formSubmited={formSubmitted}
        />
      </section>
      <SelectQuestions
         onSelectQuestion={handleSelectedQuestion}
         submitted={formSubmitted}
       />
    </>
  );
};

export default ChatBox;
