import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CantonPage.css";
import FlipAlert from "../../components/FlipAlert";

const HomePage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [selectedCanton, setSelectedCanton] = useState("ALL");

  const handleCantonClick = (canton) => {
    setSelectedCanton(canton);
  };

  const handleNavigateClick = () => {
    navigate(`/${language}/${selectedCanton}`);
  };

  const handleBackClick = () => {
    navigate("/homepage");
  };

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
            <button
              className={`${selectedCanton === "ALL" ? "active" : ""}`}
              onClick={() => handleCantonClick("ALL")}
            >
              <span>Alle Kantone</span>
            </button>
            <button
              className={`${selectedCanton === "ZH" ? "active" : ""}`}
              onClick={() => handleCantonClick("ZH")}
            >
              <span>Zürich</span>
            </button>
            <button
              className={`${selectedCanton === "BE" ? "active" : ""}`}
              onClick={() => handleCantonClick("BE")}
            >
              <span>Bern</span>
            </button>
            <button
              className={`${selectedCanton === "LU" ? "active" : ""}`}
              onClick={() => handleCantonClick("LU")}
            >
              <span>Luzern</span>
            </button>
            <button
              className={`${selectedCanton === "UR" ? "active" : ""}`}
              onClick={() => handleCantonClick("UR")}
            >
              <span>Uri</span>
            </button>
            <button
              className={`${selectedCanton === "SZ" ? "active" : ""}`}
              onClick={() => handleCantonClick("SZ")}
            >
              <span>Schwyz</span>
            </button>
            <button
              className={`${selectedCanton === "OW" ? "active" : ""}`}
              onClick={() => handleCantonClick("OW")}
            >
              <span>Obwalden</span>
            </button>
            <button
              className={`${selectedCanton === "NW" ? "active" : ""}`}
              onClick={() => handleCantonClick("NW")}
            >
              <span>Nidwalden</span>
            </button>
            <button
              className={`${selectedCanton === "GL" ? "active" : ""}`}
              onClick={() => handleCantonClick("GL")}
            >
              <span>Glarus</span>
            </button>
            <button
              className={`${selectedCanton === "ZG" ? "active" : ""}`}
              onClick={() => handleCantonClick("ZG")}
            >
              <span>Zug</span>
            </button>
            <button
              className={`${selectedCanton === "FR" ? "active" : ""}`}
              onClick={() => handleCantonClick("FR")}
            >
              <span>Freiburg</span>
            </button>
            <button
              className={`${selectedCanton === "SO" ? "active" : ""}`}
              onClick={() => handleCantonClick("SO")}
            >
              <span>Solothurn</span>
            </button>
            <button
              className={`${selectedCanton === "BS" ? "active" : ""}`}
              onClick={() => handleCantonClick("BS")}
            >
              <span>Basel-Stadt</span>
            </button>
            <button
              className={`${selectedCanton === "BL" ? "active" : ""}`}
              onClick={() => handleCantonClick("BL")}
            >
              <span>Basel-Landschaft</span>
            </button>
            <button
              className={`${selectedCanton === "SH" ? "active" : ""}`}
              onClick={() => handleCantonClick("SH")}
            >
              <span>Schaffhausen</span>
            </button>
            <button
              className={`${selectedCanton === "AR" ? "active" : ""}`}
              onClick={() => handleCantonClick("AR")}
            >
              <span>Appenzell Ausserrhoden</span>
            </button>
            <button
              className={`${selectedCanton === "AI" ? "active" : ""}`}
              onClick={() => handleCantonClick("AI")}
            >
              <span>Appenzell Innerrhoden</span>
            </button>
            <button
              className={`${selectedCanton === "SG" ? "active" : ""}`}
              onClick={() => handleCantonClick("SG")}
            >
              <span>St. Gallen</span>
            </button>
            <button
              className={`${selectedCanton === "GR" ? "active" : ""}`}
              onClick={() => handleCantonClick("GR")}
            >
              <span>Graubünden</span>
            </button>
            <button
              className={`${selectedCanton === "AG" ? "active" : ""}`}
              onClick={() => handleCantonClick("AG")}
            >
              <span>Aargau</span>
            </button>
            <button
              className={`${selectedCanton === "TG" ? "active" : ""}`}
              onClick={() => handleCantonClick("TG")}
            >
              <span>Thurgau</span>
            </button>
            <button
              className={`${selectedCanton === "TI" ? "active" : ""}`}
              onClick={() => handleCantonClick("TI")}
            >
              <span>Tessin</span>
            </button>
            <button
              className={`${selectedCanton === "VD" ? "active" : ""}`}
              onClick={() => handleCantonClick("VD")}
            >
              <span>Waadt</span>
            </button>
            <button
              className={`${selectedCanton === "VS" ? "active" : ""}`}
              onClick={() => handleCantonClick("VS")}
            >
              <span>Wallis</span>
            </button>
            <button
              className={`${selectedCanton === "NE" ? "active" : ""}`}
              onClick={() => handleCantonClick("NE")}
            >
              <span>Neuenburg</span>
            </button>
            <button
              className={`${selectedCanton === "GE" ? "active" : ""}`}
              onClick={() => handleCantonClick("GE")}
            >
              <span>Genf</span>
            </button>
            <button
              className={`${selectedCanton === "JU" ? "active" : ""}`}
              onClick={() => handleCantonClick("JU")}
            >
              <span>Jura</span>
            </button>
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
