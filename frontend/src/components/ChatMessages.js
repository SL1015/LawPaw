import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { AiFillRobot, AiFillMeh } from "react-icons/ai";
import "./ChatMessages.css";

const ChatMessages = ({ clientInput, aiBotResponse, isLoading, formSubmitted }) => {
    return (
      <div className="chat-messages">
        {formSubmitted && (
          <>
            <div className="client-inputmsg">
              <strong><AiFillMeh /></strong>
              <p>{clientInput}</p>
            </div>
            <div className="bot-response">
              <strong><AiFillRobot /></strong>
              <p>{isLoading ? <LoadingSpinner /> : aiBotResponse}</p>
            </div>
          </>
        )}
      </div>
    );
  };
  

export default ChatMessages;
