import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./ChatMessages.css";
import botIcon from "./Images/bot.png"
import clientIcon from "./Images/client.png"

const ChatMessages = ({ clientInput, aiBotResponse, isLoading, formSubmitted }) => {
    return (
      <div className="chat-messages">
        {formSubmitted && (
          <>
            <div className="client-inputmsg">
              <p>{clientInput}</p>
              <img src={clientIcon} alt="Client icon"/>
            </div>
            <div className="bot-response">
              <img src={botIcon} alt="AI icon"/>
              <p>{isLoading ? <LoadingSpinner /> : aiBotResponse}</p>
            </div>
          </>
        )}
      </div>
    );
  };
  

export default ChatMessages;
