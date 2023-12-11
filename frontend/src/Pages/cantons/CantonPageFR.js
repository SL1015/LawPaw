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

const cantonsFR = [
  { abbreviation: "all", name: "Tous les cantons" },
  { abbreviation: "ag", name: "Argovie" },
  { abbreviation: "ai", name: "Appenzell Rhodes-Intérieures" },
  { abbreviation: "ar", name: "Appenzell Rhodes-Extérieures" },
  { abbreviation: "be", name: "Berne" },
  { abbreviation: "bl", name: "Bâle-Campagne" },
  { abbreviation: "bs", name: "Bâle-Ville" },
  { abbreviation: "fr", name: "Fribourg" },
  { abbreviation: "ge", name: "Genève" },
  { abbreviation: "gl", name: "Glaris" },
  { abbreviation: "gr", name: "Grisons" },
  { abbreviation: "ju", name: "Jura" },
  { abbreviation: "lu", name: "Lucerne" },
  { abbreviation: "ne", name: "Neuchâtel" },
  { abbreviation: "nw", name: "Nidwald" },
  { abbreviation: "ow", name: "Obwald" },
  { abbreviation: "sg", name: "Saint-Gall" },
  { abbreviation: "sh", name: "Schaffhouse" },
  { abbreviation: "so", name: "Soleure" },
  { abbreviation: "sz", name: "Schwyz" },
  { abbreviation: "tg", name: "Thurgovie" },
  { abbreviation: "ti", name: "Tessin" },
  { abbreviation: "ur", name: "Uri" },
  { abbreviation: "vd", name: "Vaud" },
  { abbreviation: "vs", name: "Valais" },
  { abbreviation: "zg", name: "Zoug" },
  { abbreviation: "zh", name: "Zurich" },
];


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
        {cantonsFR.map((canton) => (
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
