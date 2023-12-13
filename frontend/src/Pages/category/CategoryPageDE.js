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
// import ScrollDownIcon from "../../components/ScrollDownIcon";

const CategoryPageEN = () => {
  const { language, canton } = useParams();
  // console.log("Language:", language);
  // console.log("Canton:", canton);
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState("");

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleSkipClick = () => {
    navigate(`/${language}/${canton}/0`);
  };

  const handleNavigateClick = () => {
    if (selectedCat === "") {
      window.alert("Please Select one option first.");
    } else {
      navigate(`/${language}/${canton}/${selectedCat}`);
    }
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
          <p onClick={() => handleSkipClick()}>Skip</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-three"></div>
        </div>
      </section>
      <section className="main-section category-page">
        <div className="options-container">
          <div className="title-container">
            <h1>
              Wählen Sie Ihren <br />
              Rechtlichen Weg
            </h1>
            <p>Rechtskategorie wählen für individuelle Beratung.</p>
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
                <h4>Vertrag</h4>
                <p>
                  Ihr Kumpel für das Verständnis von Verträgen und
                  Vereinbarungen.
                </p>
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
                <h4>Beschäftigung</h4>
                <p>
                  Wir führen Sie durch die Welt der Beschäftigung und ihrer
                  Vorschriften.
                </p>
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
                <h4>Vermietung</h4>
                <p>
                  Ein Kumpel, der Ihnen bei Mietproblemen hilft und die Regeln
                  erklärt.
                </p>
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
                <h4>Familie</h4>
                <p>Unterstützung in Heirat, Scheidung und Sorgerecht.</p>
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
                <h4>Vererbung</h4>
                <p>Ihr Verbündeter in Erbschafts- und Nachfolgefragen.</p>
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
                <h4>Andere</h4>
                <p>Unabhängig von der Rechtskategorie, Ihr Buddy ist da, um zu helfen!</p>
              </div>
            </button>
            {/* <ScrollDownIcon /> */}
          </div>
        </div>
        {/* <button className="idk-button" onClick={() => handleSkipClick()}>
          Ich weiß es nicht.
        </button> */}
        <div className="nav-bar-cat">
          <button className="back-button" onClick={() => handleBackClick()}>
            Zurück
          </button>
          <button
            className="continue-button"
            onClick={() => handleNavigateClick(selectedCat)}
          >
            Weiter
          </button>
        </div>
      </section>
    </>
  );
};

export default CategoryPageEN;
