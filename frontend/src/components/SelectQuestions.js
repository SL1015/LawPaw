import "./SelectQuestions.css";
import React, { useState } from "react";
import lawLogo from "./Images/LawPaw.png";
import { useParams } from "react-router-dom";

const SelectQuestions = ({ onSelectQuestion, submitted }) => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const { language, category } = useParams();


  // const questionData = {
  //   en: [
  //     "Can you advise on key contract considerations?",
  //     "What remedies apply to civil wrongs?",
  //     "Any tips for buying property?",
  //     "Could you explain basics of child custody?",
  //     "Can you guide me on starting a business?",
  //     "How does the inheritance process work?",
  //   ],
  //   fr: [
  //     "Conseils sur les points essentiels d'un contrat?",
  //     "Quels recours en cas torts civils?",
  //     "Des conseils pour l'achat d'un bien immobilier?",
  //     "Les principes de base de la garde des enfants?",
  //     "Guide pour la création d'une entreprise?",
  //     "Comment fonctionne le processus d'héritage?",
  //   ],
  //   de: [
  //     "Beratung Vertragsaspekte?",
  //     "Zivilrecht Rechtsbehelfe?",
  //     "Irgendwelche Tipps für den Immobilienkauf?",
  //     "Grundlagen Kinder-Sorgerecht?",
  //     "Unternehmensgründung Hilfe?",
  //     "Wie funktioniert das Erbschaftsverfahren?",
  //   ],
  // };

  const questionData = {
    en: {
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
    de: {
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
    fr: {
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
  };

  const sugestedQuetionsTitle = {
    en: "How can I help you today?",
    de: "Wie kann ich Ihnen heute helfen?",
    fr: "Comment puis-je vous aider aujourd'hui?",
  }

  const spanTxt = {
    en: "Share more about your situation for better assistance.",
    de: "Teilen Sie uns mehr über Ihre Situation mit, damit wir Ihnen besser helfen können.",
    fr: "Expliquez votre situation pour obtenir une meilleure assistance.",
  }

  const title = sugestedQuetionsTitle[language];
  const questions = questionData[language][category] || [];
  console.log(questions);
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
      <span>{spanTxt[language]}</span>
    </div>
  );
};

export default SelectQuestions;
