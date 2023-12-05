import React, { useState } from "react";
import "./ChatBox.css";
// import callBotApi from "../api/chat/APIbot";
import axios from "axios";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import SelectQuestions from "./SelectQuestions";

const ChatBox = ({ Language, Canton, Category }) => {
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  // const [aiBotResponse, setAiBotResponse] = useState("");
  // const [clientInput, setClientInput] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clientInputs, setClientInputs] = useState([]);
  const [botResponses, setBotResponses] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!message.trim()) {
  //     return;
  //   }
  //   const userMessage = message.trim();
  //   setClientInputs((prevClientInputs) => [...prevClientInputs, userMessage]);
  //   setClientInput(message);
  //   setMessage("");
  //   setTextareaHeight("auto");
  //   setFormSubmitted(true);
  //   console.log(`Lang: ${Language}, Canton: ${Canton}, Cat: ${Category} `);
  // };

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
      // const response = await callBotApi(userMessage);
      const response = await axios.post('http://89.217.241.28:5000/receive', { input: userMessage });
      setIsLoading(false);
      
      setBotResponses((prevBotResponses) => [...prevBotResponses, response.data.botResponse]);
    } catch (error) {
      console.error("Error calling callBotApi:", error);
      setIsLoading(false);
    }
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

  const handleSelectedQuestion = (question) => {
    setMessage(question);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (clientInput) {
  //       setIsLoading(true);

  //       try {
  //         const response = await callBotApi(clientInput);
  //         let currentResponse = "";
  //         setIsLoading(false);
  //         for (let i = 0; i < response.length; i++) {
  //           currentResponse += response.charAt(i);
  //           setAiBotResponse(currentResponse);
  //           await new Promise((resolve) => setTimeout(resolve, 15));
  //         }
  //       } catch (error) {
  //         console.error("Error calling callBotApi:", error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [clientInput]);

  // return (
  //   <>
  //     <section className="chat-window">
  //       <ChatMessages
  //         clientInput={clientInput}
  //         aiBotResponse={aiBotResponse}
  //         isLoading={isLoading}
  //         formSubmitted={formSubmitted}
  //       />
  //       <ChatInput
  //         message={message}
  //         textareaHeight={textareaHeight}
  //         onTextareaChange={handleTextareaChange}
  //         onSubmit={handleSubmit}
  //         Language={Language}
  //       />
  //     </section>
  //     <SelectQuestions
  //       onSelectQuestion={handleSelectedQuestion}
  //       submitted={formSubmitted}
  //     />
  //   </>
  // );

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
