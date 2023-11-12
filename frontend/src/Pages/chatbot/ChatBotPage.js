import React, { useMemo } from "react";
import { useChat } from "ai/react";
import { useParams, Link } from "react-router-dom";
import { sendMessageToAPI } from "../../api/chat/api";
import ChatBox from "../../components/ChatBox"
import "./ChatBotPage.css";

export default function ChatBotPage() {
  

  return (
    <>
      <h1>CHAT BOT</h1>
      <ChatBox />
    </>
  );
}
