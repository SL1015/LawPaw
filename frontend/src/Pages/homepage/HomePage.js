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
  };

  const handleNavigateClick = () => {
    navigate(`/${selectedLanguage}`);
  };

  return (
    <>
      <section className="main-nav">
        <div className="progress-title">
          <h4>Step 1: Legal Lingo</h4>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-one"></div>
        </div>
        <br></br>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>Choose Your <br />Legal Lingo</h1>
            <p>
            Pick your language for comfy law guidance.
            </p>
          </div>
          <div className="lang-select-container">
            <button
              className={`lang-en ${selectedLanguage === "en" ? "active" : ""}`}
              onClick={() => handleLanguageClick("en")}
            >
              <img src={GBlogo}></img>
              <span>Hello</span>
            </button>
            <button
              className={`lang-de ${selectedLanguage === "de" ? "active" : ""}`}
              onClick={() => handleLanguageClick("de")}
            >
            <img src={CHlogo}></img>
              <span>Grüezi</span>
            </button>
            <button
              className={`lang-fr ${selectedLanguage === "fr" ? "active" : ""}`}
              onClick={() => handleLanguageClick("fr")}
            >
            <img src={FRlogo}></img>
              <span>Salut</span>
            </button>
          </div>
        </div>
        {/* <div className="canton-select-container">
          <button className="canton-VD" onClick={() => handleNavigateClick("VD")}>
            <h2>VD</h2>
          </button>
          <button className="canton-zH" onClick={() => handleNavigateClick("ZH")}>
            <h2>ZH</h2>
          </button>
          <button className="canton-BE" onClick={() => handleNavigateClick("BE")}>
            <h2>BE</h2>
          </button>
        </div> */}
        <nav className="navigation-bar">
          <button className="homepage-button" onClick={() => handleNavigateClick({selectedLanguage})}>Continue</button>
        </nav>
      </section>
    </>
  );
};

export default HomePage;
