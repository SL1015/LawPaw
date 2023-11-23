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
          <h4>Step 2: Legal Zone</h4>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-two"></div>
        </div>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>
              Choose Your <br />
              Legal Zone
            </h1>
            <p>
              Choosing your canton unlocks law guidance tailored just for you
            </p>
          </div>
          <div className="canton-select-container">
            <button
              className={`${selectedCanton === "ALL" ? "active" : ""}`}
              onClick={() => handleCantonClick("ALL")}
            >
              <span>All Cantons</span>
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
              <span>Bern</span>
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
              <span>Fribourg</span>
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
              <span>Basel-City</span>
            </button><button
              className={`${selectedCanton === "BL" ? "active" : ""}`}
              onClick={() => handleCantonClick("BL")}
            >
              <span>Basel-Country</span>
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
              <span>Appenzell Outer-Rhodes</span>
            </button><button
              className={`${selectedCanton === "AI" ? "active" : ""}`}
              onClick={() => handleCantonClick("AI")}
            >
              <span>Appenzell Inner-Rhodes</span>
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
              <span>Ticino</span>
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
              <span>Geneva</span>
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
            Back
          </button>
          <button
            className="continue-button"
            onClick={() => handleNavigateClick({ selectedCanton })}
          >
            Continue
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
