import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CantonPage.css";
import FlipAlert from "../../components/FlipAlert";
// import ScrollDownIcon from "../../components/ScrollDownIcon";

const HomePage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [selectedCanton, setSelectedCanton] = useState("all");

  const handleCantonClick = (canton) => {
    setSelectedCanton(canton);
  };

  const handleNavigateClick = () => {
    navigate(`/${language}/${selectedCanton}`);
  };

  const handleBackClick = () => {
    navigate("/homepage");
  };

  const cantonsDE = [
    { abbreviation: "all", name: "Alle Kantone" },
    { abbreviation: "ag", name: "Aargau" },
    { abbreviation: "ai", name: "Appenzell Innerrhoden" },
    { abbreviation: "ar", name: "Appenzell Ausserrhoden" },
    { abbreviation: "be", name: "Bern" },
    { abbreviation: "bl", name: "Basel-Landschaft" },
    { abbreviation: "bs", name: "Basel-Stadt" },
    { abbreviation: "fr", name: "Freiburg" },
    { abbreviation: "ge", name: "Genf" },
    { abbreviation: "gl", name: "Glarus" },
    { abbreviation: "gr", name: "Graubünden" },
    { abbreviation: "ju", name: "Jura" },
    { abbreviation: "lu", name: "Luzern" },
    { abbreviation: "ne", name: "Neuenburg" },
    { abbreviation: "nw", name: "Nidwald" },
    { abbreviation: "ow", name: "Obwald" },
    { abbreviation: "sg", name: "St. Gallen" },
    { abbreviation: "sh", name: "Schaffhausen" },
    { abbreviation: "so", name: "Soleure" },
    { abbreviation: "sz", name: "Schwyz" },
    { abbreviation: "tg", name: "Thurgovie" },
    { abbreviation: "ti", name: "Tessin" },
    { abbreviation: "ur", name: "Uri" },
    { abbreviation: "vd", name: "Waadt" },
    { abbreviation: "vs", name: "Wallis" },
    { abbreviation: "zg", name: "Zoug" },
    { abbreviation: "zh", name: "Zurich" },
  ];
  

  return (
    <>
    <FlipAlert />
      <section className="main-nav">
        <div className="progress-title">
          <h4>Schritt 3: Kanton</h4>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-two"></div>
        </div>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>
              Wählen Sie <br />
              Ihre Kanton
            </h1>
            <p>
              Die Auswahl Ihres Kantons ermöglicht Ihnen massgeschneidete
              Rechtsberatung.
            </p>
          </div>
          <div className="canton-select-container">
          {cantonsDE.map((canton) => (
              <button
              key={canton.abbreviation}
              className={`${selectedCanton === canton.abbreviation ? "active" : ""}`}
              onClick={() => handleCantonClick(canton.abbreviation)}
              >
                <span>{canton.name}</span>
              </button>
            ))}
            {/* <ScrollDownIcon /> */}
          </div>
        </div>
        <div className="nav-bar-canton">
          <button className="back-button" onClick={() => handleBackClick()}>
            Zurück
          </button>
          <button
            className="continue-button"
            onClick={() => handleNavigateClick({ selectedCanton })}
          >
            Weiter
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
