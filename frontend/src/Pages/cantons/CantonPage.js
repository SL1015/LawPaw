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
              className={`${selectedCanton === "all" ? "active" : ""}`}
              onClick={() => handleCantonClick("all")}
            >
              <span>All Cantons</span>
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
              <span>Bern</span>
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
              <span>Obwalden</span>
            </button>
            <button
              className={`${selectedCanton === "nw" ? "active" : ""}`}
              onClick={() => handleCantonClick("nw")}
            >
              <span>Nidwalden</span>
            </button>
            <button
              className={`${selectedCanton === "gl" ? "active" : ""}`}
              onClick={() => handleCantonClick("gl")}
            >
              <span>Glarus</span>
            </button>
            <button
              className={`${selectedCanton === "zg" ? "active" : ""}`}
              onClick={() => handleCantonClick("zg")}
            >
              <span>Zug</span>
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
              <span>Solothurn</span>
            </button>
            <button
              className={`${selectedCanton === "bs" ? "active" : ""}`}
              onClick={() => handleCantonClick("bs")}
            >
              <span>Basel-City</span>
            </button><button
              className={`${selectedCanton === "bl" ? "active" : ""}`}
              onClick={() => handleCantonClick("bl")}
            >
              <span>Basel-Country</span>
            </button>
            <button
              className={`${selectedCanton === "sh" ? "active" : ""}`}
              onClick={() => handleCantonClick("sh")}
            >
              <span>Schaffhausen</span>
            </button>
            <button
              className={`${selectedCanton === "ar" ? "active" : ""}`}
              onClick={() => handleCantonClick("ar")}
            >
              <span>Appenzell Outer-Rhodes</span>
            </button><button
              className={`${selectedCanton === "ai" ? "active" : ""}`}
              onClick={() => handleCantonClick("ai")}
            >
              <span>Appenzell Inner-Rhodes</span>
            </button>
            <button
              className={`${selectedCanton === "sg" ? "active" : ""}`}
              onClick={() => handleCantonClick("sg")}
            >
              <span>St. Gallen</span>
            </button>
            <button
              className={`${selectedCanton === "gr" ? "active" : ""}`}
              onClick={() => handleCantonClick("gr")}
            >
              <span>Graubünden</span>
            </button>
            <button
              className={`${selectedCanton === "ag" ? "active" : ""}`}
              onClick={() => handleCantonClick("ag")}
            >
              <span>Aargau</span>
            </button>
            <button
              className={`${selectedCanton === "tg" ? "active" : ""}`}
              onClick={() => handleCantonClick("tg")}
            >
              <span>Thurgau</span>
            </button>
            <button
              className={`${selectedCanton === "ti" ? "active" : ""}`}
              onClick={() => handleCantonClick("ti")}
            >
              <span>Ticino</span>
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
              <span>Geneva</span>
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
