import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CategoryPage.css";
import Cat1 from "../../components/Images/icons/cat1.svg";
import Cat2 from "../../components/Images/icons/cat2.svg";
import Cat3 from "../../components/Images/icons/cat3.svg";
import Cat4 from "../../components/Images/icons/cat4.svg";
import Cat5 from "../../components/Images/icons/cat5.svg";
import Cat6 from "../../components/Images/icons/cat6.svg";
import FlipAlert from "../../components/FlipAlert";

const CategoryPageEN = () => {
  const { language, canton } = useParams();
  console.log("Language:", language);
  console.log("Canton:", canton);
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState("1");

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleSkipClick = () => {
    // navigate(`/en/${canton}/0`)
  };

  const handleNavigateClick = () => {
    navigate(`/${language}/${canton}/${selectedCat}`);
  };

  const handleBackClick = () => {
    navigate(`/${language}`);
  };

  return (
    <>
      <FlipAlert />
      <section className="main-nav">
        <div className="progress-title">
          <h4>Étape 3 : Voie Juridique</h4>
          <p onClick={handleSkipClick()}>Skip</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-three"></div>
        </div>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>
              Choisissez Votre <br />
              Voie Juridique
            </h1>
            <p>
              Choisissez votre catégorie de droit et ouvrez la porte à des
              conseils personnalisés. personnalisés, faits pour vous.
            </p>
          </div>
          <div className="cat-select-container">
          <button
              className={`cat-button cat-one ${
                selectedCat === "1" ? "active" : ""
              }`}
              onClick={() => handleCatClick("1")}
            >
              <img src={Cat1} alt="Contract icon" />
              <div className="info-container">
                <h4>Contrat</h4>
                <p>Votre ami pour comprendre les contrats et les accords.</p>
              </div>
            </button>
            <button
              className={`cat-button cat-two ${
                selectedCat === "2" ? "active" : ""
              }`}
              onClick={() => handleCatClick("2")}
            >
              <img src={Cat2} alt="Employment icon" />
              <div className="info-container">
                <h4>Emploi</h4>
                <p>Vous guider dans le monde de l'emploi et de sa réglementation.</p>
              </div>
            </button>
            <button
              className={`cat-button cat-three ${
                selectedCat === "3" ? "active" : ""
              }`}
              onClick={() => handleCatClick("3")}
            >
              <img src={Cat3} alt="Rental icon" />
              <div className="info-container">
                <h4>Location</h4>
                <p>Un copain qui vous guidera en cas de problème de location et vous expliquera les règles.</p>
              </div>
            </button>
            <button
              className={`cat-button cat-four ${
                selectedCat === "4" ? "active" : ""
              }`}
              onClick={() => handleCatClick("4")}
            >
              <img src={Cat4} alt="Family icon" />
              <div className="info-container">
                <h4>Famille</h4>
                <p>Vous aider à naviguer à travers le mariage, le divorce et la garde des enfants.</p>
              </div>
            </button>
            <button
              className={`cat-button cat-five ${
                selectedCat === "5" ? "active" : ""
              }`}
              onClick={() => handleCatClick("5")}
            >
              <img src={Cat5} alt="Inheritance Icon" />
              <div className="info-container">
                <h4>Héritage</h4>
                <p>Votre allié en matière d'héritage et de succession.</p>
              </div>
            </button>
            <button
              className={`cat-button cat-six ${
                selectedCat === "6" ? "active" : ""
              }`}
              onClick={() => handleCatClick("6")}
            >
              <img src={Cat6} alt="Tort icon" />
              <div className="info-container">
                <h4>Resp. Civile</h4>
                <p>Conseils amicaux sur les préjudices civils, les blessures et les recours.</p>
              </div>
            </button>
          </div>
        </div>
        <button className="idk-button" onClick={() => handleSkipClick()}>
          Je ne sais pas
        </button>
        <div className="nav-bar-cat">
          <button className="back-button" onClick={() => handleBackClick()}>
            Retour
          </button>
          <button
            className="continue-button"
            onClick={() => handleNavigateClick(selectedCat)}
          >
            Poursuivre
          </button>
        </div>
      </section>
    </>
  );
};

export default CategoryPageEN;
