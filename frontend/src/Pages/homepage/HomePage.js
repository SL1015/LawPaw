import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleNavigateClick = (canton) => {
    navigate(`/${selectedLanguage}/${canton}`);
  };

  return (
    <>
      <section className="main-nav">
        <div className="progress-title">
          <h3>Step 1: Language</h3>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-one"></div>
        </div>
        <br></br>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>Select your language</h1>
            <p>
              This will help us give you the most precise law guidance based on
              your canton.
            </p>
          </div>
          <div className="lang-select-container">
            <button
              className={`lang-en ${selectedLanguage === "en" ? "active" : ""}`}
              onClick={() => handleLanguageClick("en")}
            >
              <span>Hello</span>
            </button>
            <button
              className={`lang-de ${selectedLanguage === "de" ? "active" : ""}`}
              onClick={() => handleLanguageClick("de")}
            >
              <span>Hallo</span>
            </button>
            <button
              className={`lang-fr ${selectedLanguage === "fr" ? "active" : ""}`}
              onClick={() => handleLanguageClick("fr")}
            >
              <span>Bonjour</span>
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
          <button className="homepage-button">Continue</button>
        </nav>
      </section>
    </>
  );
};

export default HomePage;
