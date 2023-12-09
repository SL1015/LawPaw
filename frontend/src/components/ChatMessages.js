import React, { useEffect, useRef, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./ChatMessages.css";
import botIcon from "./Images/bot.png";
import clientIcon from "./Images/client.png";
// import clientIcon from "./Images/Ellipse.png";
import Typed from "react-typed";
// import AutoLinkText from "react-autolink-text2";

const ChatMessages = ({ clientInputs, botResponses, isLoading }) => {
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [botResponses, clientInputs]);

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
      // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading, responseIndex, botResponses]);

  const MsgClickableLinks = (message) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return message.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        let link = part.replace(/[\])}]+$/, "");
        let last = part.slice(-1);
        return (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            Link🔗{last}
          </a>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

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
            <span className="botreponseSpan">
              {index === botResponses.length && isLoading ? (
                <LoadingSpinner />
              ) : index === responseIndex ? (
                <Typed strings={[`${botResponses[index]}`]} typeSpeed={5} />
              ) : (
                MsgClickableLinks(botResponses[index])
              )}
              {/* {index === botResponses.length && isLoading ? (
                <LoadingSpinner />
              ) : (
                <Typed
                  strings={[`${botResponses[index]}`]}
                  typeSpeed={15}
                />
              )} */}
            </span>
          </div>
        </div>
      ))}
      <div id="anchor" ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
