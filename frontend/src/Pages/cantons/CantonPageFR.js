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
              className={`${selectedCanton === "ZH" ? "active" : ""}`}
              onClick={() => handleCantonClick("ZH")}
            >
              <span>Zurich</span>
            </button>
            <button
              className={`${selectedCanton === "BE" ? "active" : ""}`}
              onClick={() => handleCantonClick("BE")}
            >
              <span>Berne</span>
            </button>
            <button
              className={`${selectedCanton === "LU" ? "active" : ""}`}
              onClick={() => handleCantonClick("LU")}
            >
              <span>Lucerne</span>
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
              <span>Obwald</span>
            </button>
            <button
              className={`${selectedCanton === "NW" ? "active" : ""}`}
              onClick={() => handleCantonClick("NW")}
            >
              <span>Nidwald</span>
            </button>
            <button
              className={`${selectedCanton === "GL" ? "active" : ""}`}
              onClick={() => handleCantonClick("GL")}
            >
              <span>Glaris</span>
            </button>
            <button
              className={`${selectedCanton === "ZG" ? "active" : ""}`}
              onClick={() => handleCantonClick("ZG")}
            >
              <span>Zoug</span>
            </button>
            <button
              className={`${selectedCanton === "FR" ? "active" : ""}`}
              onClick={() => handleCantonClick("FR")}
            >
              <span>Fribourg</span>
            </button>
            <button
              className={`${selectedCanton === "SO" ? "active" : ""}`}
              onClick={() => handleCantonClick("SO")}
            >
              <span>Soleure</span>
            </button>
            <button
              className={`${selectedCanton === "BS" ? "active" : ""}`}
              onClick={() => handleCantonClick("BS")}
            >
              <span>Bâle-Ville</span>
            </button><button
              className={`${selectedCanton === "BL" ? "active" : ""}`}
              onClick={() => handleCantonClick("BL")}
            >
              <span>Bâle-Campagne</span>
            </button>
            <button
              className={`${selectedCanton === "SH" ? "active" : ""}`}
              onClick={() => handleCantonClick("SH")}
            >
              <span>Schaffhouse</span>
            </button>
            <button
              className={`${selectedCanton === "AR" ? "active" : ""}`}
              onClick={() => handleCantonClick("AR")}
            >
              <span>Appenzell Rhodes-Extérieures</span>
            </button><button
              className={`${selectedCanton === "AI" ? "active" : ""}`}
              onClick={() => handleCantonClick("AI")}
            >
              <span>Appenzell Rhodes-Intérieures</span>
            </button>
            <button
              className={`${selectedCanton === "SG" ? "active" : ""}`}
              onClick={() => handleCantonClick("SG")}
            >
              <span>Saint-Gall</span>
            </button>
            <button
              className={`${selectedCanton === "GR" ? "active" : ""}`}
              onClick={() => handleCantonClick("GR")}
            >
              <span>Grisons</span>
            </button>
            <button
              className={`${selectedCanton === "AG" ? "active" : ""}`}
              onClick={() => handleCantonClick("AG")}
            >
              <span>Argovie</span>
            </button>
            <button
              className={`${selectedCanton === "TG" ? "active" : ""}`}
              onClick={() => handleCantonClick("TG")}
            >
              <span>Thurgovie</span>
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
              <span>Vaud</span>
            </button>
            <button
              className={`${selectedCanton === "VS" ? "active" : ""}`}
              onClick={() => handleCantonClick("VS")}
            >
              <span>Valais</span>
            </button>
            <button
              className={`${selectedCanton === "NE" ? "active" : ""}`}
              onClick={() => handleCantonClick("NE")}
            >
              <span>Neuchâtel</span>
            </button>
            <button
              className={`${selectedCanton === "GE" ? "active" : ""}`}
              onClick={() => handleCantonClick("GE")}
            >
              <span>Genève</span>
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
