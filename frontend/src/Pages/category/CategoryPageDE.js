import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CategoryPage.css";
import Cat1 from "../../components/Images/Card-0.png";
import Cat2 from "../../components/Images/Card-1.png";
import Cat3 from "../../components/Images/Card-2.png";
import Cat4 from "../../components/Images/Card-3.png";
import Cat5 from "../../components/Images/Card-4.png";
import Cat6 from "../../components/Images/Card-5.png";
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
          <h4>Schritt 3: Rechtlicher Weg</h4>
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
              Wählen Sie Ihren <br />
              Rechtlichen Weg
            </h1>
            <p>
              Wählen Sie Ihre Rechtskategorie und öffnen Sie die Tür zu einer
              persönlichen Beratung, die nur für Sie bestimmt ist.
            </p>
          </div>
          <div className="cat-select-container">
            <button
              className={`${selectedCat === "1" ? "active" : ""}`}
              onClick={() => handleCatClick("1")}
            >
              <img src={Cat1} />
            </button>
            <button
              className={`${selectedCat === "2" ? "active" : ""}`}
              onClick={() => handleCatClick("2")}
            >
              <img src={Cat2} />
            </button>
            <button
              className={`${selectedCat === "3" ? "active" : ""}`}
              onClick={() => handleCatClick("3")}
            >
              <img src={Cat3} />
            </button>
            <button
              className={`${selectedCat === "4" ? "active" : ""}`}
              onClick={() => handleCatClick("4")}
            >
              <img src={Cat4} />
            </button>
            <button
              className={`${selectedCat === "5" ? "active" : ""}`}
              onClick={() => handleCatClick("5")}
            >
              <img src={Cat5} />
            </button>
            <button
              className={`${selectedCat === "6" ? "active" : ""}`}
              onClick={() => handleCatClick("6")}
            >
              <img src={Cat6} />
            </button>
          </div>
        </div>
        <button className="idk-button" onClick={() => handleSkipClick()}>
          I don’t know
        </button>
        <div className="nav-bar-cat">
          <button className="back-button" onClick={() => handleBackClick()}>
            Back
          </button>
          <button
            className="continue-button"
            onClick={() => handleNavigateClick(selectedCat)}
          >
            Continue
          </button>
        </div>
      </section>
    </>
  );
};

export default CategoryPageEN;
