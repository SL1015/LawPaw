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
        <h4>Étape 2 : Canton</h4>
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
            Choisissez votre  <br />
            Zone légale
            </h1>
            <p>
            Choisir son canton, c'est bénéficier d'un accompagnement juridique sur mesure
            </p>
        </div>
        <div className="canton-select-container">
        <button
            className={`${selectedCanton === "ALL" ? "active" : ""}`}
            onClick={() => handleCantonClick("ALL")}
            >
            <span>Tous les cantons</span>
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
            <span>Geneve</span>
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
            Retour
        </button>
        <button
            className="continue-button"
            onClick={() => handleNavigateClick({selectedCanton})}
        >
            Poursuivre
        </button>
        </div>
    </section>
    </>
);
};

export default HomePage;
