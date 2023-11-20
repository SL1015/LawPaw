import React, { useMemo } from "react";
import { useChat } from "ai/react";
import { useParams, Link } from "react-router-dom";
import { sendMessageToAPI } from "../../api/chat/api";
import ChatBox from "../../components/ChatBox";
import { FaArrowLeft } from "react-icons/fa";
import "./ChatBotPage.css";

export default function ChatBotPage() {
  return (
    <>
      <section className="botpage-nav">
        <div className="progress-title">
          <Link to ="/homepage"><span><FaArrowLeft /></span></Link>
          <h4>LawPaw</h4>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-full"></div>
        </div>
        <br></br>
      </section>
      <section className="chatbox-section">
        <ChatBox />
      </section>
    </>
  );
}
