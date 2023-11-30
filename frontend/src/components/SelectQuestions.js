import "./SelectQuestions.css";
import React, { useState } from "react";
import lawLogo from "./Images/LawPaw.png";

const SelectQuestions = ({ onSelectQuestion, submitted }) => {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const questions = [
    "Can you advise on key contract considerations?",
    "What remedies apply to civil wrongs?",
    "Any tips for buying property?",
    "Could you explain basics of child custody?",
    "Can you guide me on starting a business?",
    "How does the inheritance process work?",
  ];

  return (
    <div className={`questions-container ${submitted ? "submitted" : ""}`} >
      <img className="questions-logo" src={lawLogo} alt="LawPaw Logo" />
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <button
              onClick={() => {
                onSelectQuestion(question);
                setSelectedQuestion(question);
              }}
              className={selectedQuestion === question ? "active" : "" }
            >
              {question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectQuestions;
