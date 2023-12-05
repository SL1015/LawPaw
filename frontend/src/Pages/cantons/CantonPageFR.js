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

return (
    <>
    <FlipAlert />
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
            className={`${selectedCanton === "all" ? "active" : ""}`}
            onClick={() => handleCantonClick("all")}
            >
            <span>Tous les cantons</span>
            </button>
            <button
              className={`${selectedCanton === "zh" ? "active" : ""}`}
              onClick={() => handleCantonClick("zh")}
            >
              <span>Zurich</span>
            </button>
            <button
              className={`${selectedCanton === "be" ? "active" : ""}`}
              onClick={() => handleCantonClick("be")}
            >
              <span>Berne</span>
            </button>
            <button
              className={`${selectedCanton === "lu" ? "active" : ""}`}
              onClick={() => handleCantonClick("lu")}
            >
              <span>Lucerne</span>
            </button>
            <button
              className={`${selectedCanton === "ur" ? "active" : ""}`}
              onClick={() => handleCantonClick("ur")}
            >
              <span>Uri</span>
            </button>
            <button
              className={`${selectedCanton === "sz" ? "active" : ""}`}
              onClick={() => handleCantonClick("sz")}
            >
              <span>Schwyz</span>
            </button>
            <button
              className={`${selectedCanton === "ow" ? "active" : ""}`}
              onClick={() => handleCantonClick("ow")}
            >
              <span>Obwald</span>
            </button>
            <button
              className={`${selectedCanton === "nw" ? "active" : ""}`}
              onClick={() => handleCantonClick("nw")}
            >
              <span>Nidwald</span>
            </button>
            <button
              className={`${selectedCanton === "gl" ? "active" : ""}`}
              onClick={() => handleCantonClick("gl")}
            >
              <span>Glaris</span>
            </button>
            <button
              className={`${selectedCanton === "zg" ? "active" : ""}`}
              onClick={() => handleCantonClick("zg")}
            >
              <span>Zoug</span>
            </button>
            <button
              className={`${selectedCanton === "fr" ? "active" : ""}`}
              onClick={() => handleCantonClick("fr")}
            >
              <span>Fribourg</span>
            </button>
            <button
              className={`${selectedCanton === "so" ? "active" : ""}`}
              onClick={() => handleCantonClick("so")}
            >
              <span>Soleure</span>
            </button>
            <button
              className={`${selectedCanton === "bs" ? "active" : ""}`}
              onClick={() => handleCantonClick("bs")}
            >
              <span>Bâle-Ville</span>
            </button><button
              className={`${selectedCanton === "bl" ? "active" : ""}`}
              onClick={() => handleCantonClick("bl")}
            >
              <span>Bâle-Campagne</span>
            </button>
            <button
              className={`${selectedCanton === "sh" ? "active" : ""}`}
              onClick={() => handleCantonClick("sh")}
            >
              <span>Schaffhouse</span>
            </button>
            <button
              className={`${selectedCanton === "ar" ? "active" : ""}`}
              onClick={() => handleCantonClick("ar")}
            >
              <span>Appenzell Rhodes-Extérieures</span>
            </button><button
              className={`${selectedCanton === "ai" ? "active" : ""}`}
              onClick={() => handleCantonClick("ai")}
            >
              <span>Appenzell Rhodes-Intérieures</span>
            </button>
            <button
              className={`${selectedCanton === "sg" ? "active" : ""}`}
              onClick={() => handleCantonClick("sg")}
            >
              <span>Saint-Gall</span>
            </button>
            <button
              className={`${selectedCanton === "gr" ? "active" : ""}`}
              onClick={() => handleCantonClick("gr")}
            >
              <span>Grisons</span>
            </button>
            <button
              className={`${selectedCanton === "ag" ? "active" : ""}`}
              onClick={() => handleCantonClick("ag")}
            >
              <span>Argovie</span>
            </button>
            <button
              className={`${selectedCanton === "tg" ? "active" : ""}`}
              onClick={() => handleCantonClick("tg")}
            >
              <span>Thurgovie</span>
            </button>
            <button
              className={`${selectedCanton === "ti" ? "active" : ""}`}
              onClick={() => handleCantonClick("ti")}
            >
              <span>Tessin</span>
            </button>
            <button
              className={`${selectedCanton === "vd" ? "active" : ""}`}
              onClick={() => handleCantonClick("vd")}
            >
              <span>Vaud</span>
            </button>
            <button
              className={`${selectedCanton === "vs" ? "active" : ""}`}
              onClick={() => handleCantonClick("vs")}
            >
              <span>Valais</span>
            </button>
            <button
              className={`${selectedCanton === "ne" ? "active" : ""}`}
              onClick={() => handleCantonClick("ne")}
            >
              <span>Neuchâtel</span>
            </button>
            <button
              className={`${selectedCanton === "ge" ? "active" : ""}`}
              onClick={() => handleCantonClick("ge")}
            >
              <span>Genève</span>
            </button>
            <button
              className={`${selectedCanton === "ju" ? "active" : ""}`}
              onClick={() => handleCantonClick("ju")}
            >
              <span>Jura</span>
            </button>
            {/* <ScrollDownIcon /> */}
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
