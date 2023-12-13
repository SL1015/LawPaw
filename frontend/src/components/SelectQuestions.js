import "./SelectQuestions.css";
import React, { useState } from "react";
import lawLogo from "./Images/LawPaw.png";
import { useParams } from "react-router-dom";

const SelectQuestions = ({ onSelectQuestion, submitted, submitQuestion }) => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const { language, category } = useParams();

  const questionData = {
    en: { // English
      1: [ // Contract
        "What are the three “written” forms of contract?",
        "What can I do if I don't agree with the terms of the contract?",
        "Which contracts can be signed digitally?",
      ],
      2: [ // Employment
        "Can my employer fire me when I'm sick?",
        "Does the employment contract have to include a notice period?",
        "How can I become self-employed?",
      ],
      3: [ // Rental
        "My landlord has said that my partner can't move in with me. Is this allowed?",
        "When can I contest the rent?",
        "After how many years am I entitled to have a rental apartment renovated?",
      ],
      4: [ // Family
        "Our child is studying in another country. Can we still receive child allowances?",
        "How long is the maternity leave?",
        "What is the difference between marriage and a civil partnership?",
      ],
      5: [ // Inheritance
        "What is part of inheritance?",
        "Do I have to pay taxes on my inheritance?",
        "Are my stepbrothers or stepsisters legally entitled to inherit?",
      ],
      6: [ // Others
        "Can my employer fire me when I’m sick?",
        "How long is the maternity leave?",
        "When can I contest rent?",
      ],
    },
    de: { // German
      1: [ // Contract
        "What are the three “written” forms of contract?",
        "What can I do if I don't agree with the terms of the contract?",
        "Which contracts can be signed digitally?",
      ],
      2: [ // Employment
        "Can my employer fire me when I'm sick?",
        "Does the employment contract have to include a notice period?",
        "How can I become self-employed?",
      ],
      3: [ // Rental
        "My landlord has said that my partner can't move in with me. Is this allowed?",
        "When can I contest the rent?",
        "After how many years am I entitled to have a rental apartment renovated?",
      ],
      4: [ // Family
        "Our child is studying in another country. Can we still receive child allowances?",
        "How long is the maternity leave?",
        "What is the difference between marriage and a civil partnership?",
      ],
      5: [ // Inheritance
        "What is part of inheritance?",
        "Do I have to pay taxes on my inheritance?",
        "Are my stepbrothers or stepsisters legally entitled to inherit?",
      ],
      6: [ // Others
        "Can my employer fire me when I’m sick?",
        "How long is the maternity leave?",
        "When can I contest rent?",
      ],
    },
    fr: { // French
      1: [ // Contract
        "What are the three “written” forms of contract?",
        "What can I do if I don't agree with the terms of the contract?",
        "Which contracts can be signed digitally?",
      ],
      2: [ // Employment
        "Can my employer fire me when I'm sick?",
        "Does the employment contract have to include a notice period?",
        "How can I become self-employed?",
      ],
      3: [ // Rental
        "My landlord has said that my partner can't move in with me. Is this allowed?",
        "When can I contest the rent?",
        "After how many years am I entitled to have a rental apartment renovated?",
      ],
      4: [ // Family
        "Our child is studying in another country. Can we still receive child allowances?",
        "How long is the maternity leave?",
        "What is the difference between marriage and a civil partnership?",
      ],
      5: [ // Inheritance
        "What is part of inheritance?",
        "Do I have to pay taxes on my inheritance?",
        "Are my stepbrothers or stepsisters legally entitled to inherit?",
      ],
      6: [ // Others
        "Can my employer fire me when I'm sick?",
        "How long is the maternity leave?",
        "When can I contest rent?",
      ],
    },
  };

  const sugestedQuetionsTitle = {
    en: "How can I help you today?",
    de: "Wie kann ich Ihnen heute helfen?",
    fr: "Comment puis-je vous aider aujourd'hui?",
  }

  const title = sugestedQuetionsTitle[language];
  const questions = questionData[language][category] || [];
  return (
    <div className={`questions-container ${submitted ? "submitted" : ""}`} >
      <img className="questions-logo" src={lawLogo} alt="LawPaw Logo" />
      <p>{title}</p>
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
