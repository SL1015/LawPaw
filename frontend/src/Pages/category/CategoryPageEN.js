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
  console.log("Language:", language);
  console.log("Canton:", canton);
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState("1");

  const handleCatClick = (cat) => {
    if (cat === "0") {
      setSelectedCat(cat);
      handleSkipClick();
    }
    setSelectedCat(cat);
  };

  const handleSkipClick = () => {
    navigate(`/${language}/${canton}/0`);
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
          <h4>Step 3: Legal Path</h4>
          <p onClick={() => handleCatClick("0")}>Skip</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-three"></div>
        </div>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>
              Choose Your <br />
              Legal Path
            </h1>
            <p>
              Choose your law category and open the door to personalized
              guidance, made just for you.
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
                <h4>Contract</h4>
                <p>Your buddy for understanding contracts and agreements.</p>
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
                <h4>Employment</h4>
                <p>Guiding you through the world of employment and its regulations.</p>
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
                <h4>Rental</h4>
                <p>A buddy to guide you through any rental problems and explain the rules.</p>
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
                <h4>Family</h4>
                <p>Helping you navigate through marriage, divorce, and child custody.</p>
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
                <h4>Inheritance</h4>
                <p>Your ally in matters of inheritance and succession.</p>
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
                <h4>Tort law</h4>
                <p>Friendly advice on civil wrongs, injuries, and remedies.</p>
              </div>
            </button>
            {/* <ScrollDownIcon /> */}
          </div>
        </div>
        {/* <button className="idk-button" onClick={() => handleCatClick("0")}>
          I don’t know
        </button> */}
        <div className="nav-bar-cat">
          <button className="back-button" onClick={() => handleBackClick()}>
            Back
          </button>
          <button
            className="continue-button"
            onClick={() => handleNavigateClick(selectedCat)}
          >
            Start Chat
          </button>
        </div>
      </section>
    </>
  );
};

export default CategoryPageEN;
