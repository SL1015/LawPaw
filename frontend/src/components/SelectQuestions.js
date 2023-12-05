import "./SelectQuestions.css";
import React, { useState } from "react";
import lawLogo from "./Images/LawPaw.png";
import { useParams } from "react-router-dom";

const SelectQuestions = ({ onSelectQuestion, submitted }) => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const { language } = useParams();


  const questionData = {
    en: [
      "Can you advise on key contract considerations?",
      "What remedies apply to civil wrongs?",
      "Any tips for buying property?",
      "Could you explain basics of child custody?",
      "Can you guide me on starting a business?",
      "How does the inheritance process work?",
    ],
    fr: [
      "Conseils sur les points essentiels d'un contrat?",
      "Quels recours en cas torts civils?",
      "Des conseils pour l'achat d'un bien immobilier?",
      "Les principes de base de la garde des enfants?",
      "Guide pour la création d'une entreprise?",
      "Comment fonctionne le processus d'héritage?",
    ],
    de: [
      "Beratung Vertragsaspekte?",
      "Zivilrecht Rechtsbehelfe?",
      "Irgendwelche Tipps für den Immobilienkauf?",
      "Grundlagen Kinder-Sorgerecht?",
      "Unternehmensgründung Hilfe?",
      "Wie funktioniert das Erbschaftsverfahren?",
    ],
  };

  const questions = questionData[language] || [];

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
