import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import GBlogo from "../../components/Images/GB.png"
import CHlogo from "../../components/Images/CH.png"
import FRlogo from "../../components/Images/FR.png"

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    console.log(selectedLanguage);
  };

  const handleNavigateClick = () => {
    navigate(`/${selectedLanguage}`);
  };

  const navTitle = {
    en: "Step 1: Legal Lingo",
    de: "Schritt 1: Sprache",
    fr: "Étape 1 : Langue" 
  }; 
  const pagTitleOne = {
    en: "Choose Your",
    de: "Wählen Sie ",
    fr: "Choisissez" 
  }; 
  const pagTitleTwo = {
    en: "Legal Lingo",
    de: "Ihr Sprache",
    fr: "Votre Langue" 
  }; 
  const subtitle = {
    en: "Pick your language for comfy law guidance.",
    de: "Wähle Sprache für rechtliche Beratung.",
    fr: "Choisissez langue pour conseils juridiques." 
  }
  const buttonText = {
    en: "Continue",
    de: "Weiter",
    fr: "Poursuivre"
  }

  return (
    <>
      <section className="main-nav">
        <div className="progress-title">
          <h4>{navTitle[selectedLanguage]}</h4>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-one"></div>
        </div>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>{pagTitleOne[selectedLanguage]}<br />{pagTitleTwo[selectedLanguage]}</h1>
            <p>
            {subtitle[selectedLanguage]}
            </p>
          </div>
          <div className="lang-select-container">
            <button
              className={`lang-en ${selectedLanguage === "en" ? "active" : ""}`}
              onClick={() => handleLanguageClick("en")}
            >
              <img src={GBlogo} alt="English Flag"></img>
              <span>Hello</span>
            </button>
            <button
              className={`lang-de ${selectedLanguage === "de" ? "active" : ""}`}
              onClick={() => handleLanguageClick("de")}
            >
            <img src={CHlogo} alt="Switzerland Flag"></img>
              <span>Grüezi</span>
            </button>
            <button
              className={`lang-fr ${selectedLanguage === "fr" ? "active" : ""}`}
              onClick={() => handleLanguageClick("fr")}
            >
            <img src={FRlogo} alt="French Flag"></img>
              <span>Salut</span>
            </button>
          </div>
        </div>
        <nav className="navigation-bar">
          <button className="homepage-button" onClick={() => handleNavigateClick({selectedLanguage})}>{buttonText[selectedLanguage]}</button>
        </nav>
      </section>
    </>
  );
};

export default HomePage;
