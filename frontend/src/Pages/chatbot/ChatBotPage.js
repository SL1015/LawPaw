import React from "react";
import { useParams, Link } from "react-router-dom";
import ChatBox from "../../components/ChatBox";
// import ChatBox from "../../components/ChatBoxTest";
import { FaArrowLeft } from "react-icons/fa";
import "./ChatBotPage.css";

export default function ChatBotPage() {
  const { language, canton, category } = useParams();
  // console.log(`Lang: ${language}, Canton: ${canton}, Cat:   ${category} `)
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
        <ChatBox Language={language} Canton={canton} Category={category} />
      </section>
    </>
  );
}
