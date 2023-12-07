import React, { useEffect, useRef, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./ChatMessages.css";
import botIcon from "./Images/bot.png";
import clientIcon from "./Images/client.png";
import Typed from "react-typed";

const ChatMessages = ({ clientInputs, botResponses, isLoading }) => {
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const messagesEndRef = useRef(null);
  const [botResponsesLength, setBotResponsesLength] = useState("")

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    
  }, [botResponses, clientInputs])

  useEffect(() => {
    if (botResponses.length > 0 && responseIndex < botResponses.length) {
      const response = botResponses[responseIndex];
      let currentCharacter = 0;

      const typingEffect = setInterval(() => {
        setDisplayedResponse(
          (prevResponse) => prevResponse + response[currentCharacter]
        );
        currentCharacter++;
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        if (currentCharacter === response.length) {
          clearInterval(typingEffect);
          setResponseIndex(responseIndex + 1);
        }
      }, 10);

      return () => clearInterval(typingEffect);
    }
  }, [botResponses, responseIndex, messagesEndRef]);

  useEffect(() => {
    if (responseIndex === botResponses.length && isLoading) {
      setDisplayedResponse("");
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading, responseIndex, botResponses]);

  
  
  

  return (
    <div className="chat-messages">
      {clientInputs.map((clientInput, index) => (
        <div key={index} className="message-container">
          <div className="client-inputmsg">
            <p>{clientInput}</p>
            <img src={clientIcon} alt="Client icon" />
          </div>
          <div className="bot-response">
            <img src={botIcon} alt="AI icon" />
            <p>
              {index === botResponses.length && isLoading ? (
                <LoadingSpinner />
              ) : index === responseIndex ? (
                displayedResponse
              ) : (
                botResponses[index]
              )}
              {/* {index === botResponses.length && isLoading ? (
                <LoadingSpinner />
              ) : (
                <Typed
                  strings={[`${botResponses[index]}`]}
                  typeSpeed={15}
                />
              )} */}
            </p>
          </div>
        </div>
      ))}
      <div id="anchor" ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
