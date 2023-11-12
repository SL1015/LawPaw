import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CantonPage.css";

const HomePage = () => {
    const { language } = useParams();
const navigate = useNavigate();
const [selectedCanton, setSelectedCanton] = useState("AG");

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
    <section className="main-nav">
        <div className="progress-title">
        <h4>Schritt 3: Kanton</h4>
        </div>
        <div className="progress-bar-container">
        <div className="progress-bar-two"></div>
        </div>
        <br></br>
    </section>
    <section className="main-section">
        <div className="options-container">
        <div className="title-container">
            <h1>
            Wählen Sie  <br />
            Ihre Kanton
            </h1>
            <p>
            Die Auswahl Ihres Kantons ermöglicht Ihnen massgeschneidete Rechtsberatung.
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
            className={`${selectedCanton === "AG" ? "active" : ""}`}
            onClick={() => handleCantonClick("AG")}
            >
            <span>Aargau</span>
            </button>
            <button
            className={`${selectedCanton === "GE" ? "active" : ""}`}
            onClick={() => handleCantonClick("GE")}
            >
            <span>Genf</span>
            </button>
            <button
            className={`${selectedCanton === "ZG" ? "active" : ""}`}
            onClick={() => handleCantonClick("ZG")}
            >
            <span>Zug</span>
            </button>
            <button
            className={`${selectedCanton === "ZH" ? "active" : ""}`}
            onClick={() => handleCantonClick("ZH")}
            >
            <span>Zurich</span>
            </button>
            <button
            className={`${selectedCanton === "VD" ? "active" : ""}`}
            onClick={() => handleCantonClick("VD")}
            >
            <span>Vaud</span>
            </button>
            <button
            className={`${selectedCanton === "BE" ? "active" : ""}`}
            onClick={() => handleCantonClick("BE")}
            >
            <span>Basel</span>
            </button>
        </div>
        </div>
        <div className="nav-bar-canton">
        <button
            className="back-button"
            onClick={() => handleBackClick()}
        >
            Zurück
        </button>
        <button
            className="continue-button"
            onClick={() => handleNavigateClick({selectedCanton})}
        >
            Weiter
        </button>
        </div>
    </section>
    </>
);
};

export default HomePage;
