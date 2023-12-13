import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CantonPage.css";
import FlipAlert from "../../components/FlipAlert";
// import ScrollDownIcon from "../../components/ScrollDownIcon";

const HomePage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [selectedCanton, setSelectedCanton] = useState("");

  const handleCantonClick = (canton) => {
    setSelectedCanton(canton);
  };

  const handleNavigateClick = () => {
    if (selectedCanton === "") {
      window.alert("Please Select one option first.");
    } else {
      
    navigate(`/${language}/${selectedCanton}`);
    }
  };

  const handleBackClick = () => {
    navigate("/homepage");
  };

  const cantonsEN = [
    { abbreviation: "all", name: "All Cantons" },
    { abbreviation: "ag", name: "Aargau" },
    { abbreviation: "ai", name: "Appenzell Inner-Rhodes" },
    { abbreviation: "ar", name: "Appenzell Outer-Rhodes" },
    { abbreviation: "be", name: "Bern" },
    { abbreviation: "bl", name: "Basel-Country" },
    { abbreviation: "bs", name: "Basel-City" },
    { abbreviation: "fr", name: "Fribourg" },
    { abbreviation: "ge", name: "Geneva" },
    { abbreviation: "gl", name: "Glarus" },
    { abbreviation: "gr", name: "Graubünden" },
    { abbreviation: "ju", name: "Jura" },
    { abbreviation: "lu", name: "Lucerne" },
    { abbreviation: "ne", name: "Neuchâtel" },
    { abbreviation: "nw", name: "Nidwalden" },
    { abbreviation: "ow", name: "Obwalden" },
    { abbreviation: "sg", name: "St. Gallen" },
    { abbreviation: "sh", name: "Schaffhausen" },
    { abbreviation: "so", name: "Solothurn" },
    { abbreviation: "sz", name: "Schwyz" },
    { abbreviation: "tg", name: "Thurgau" },
    { abbreviation: "ti", name: "Ticino" },
    { abbreviation: "ur", name: "Uri" },
    { abbreviation: "vd", name: "Vaud" },
    { abbreviation: "vs", name: "Valais" },
    { abbreviation: "zg", name: "Zug" },
    { abbreviation: "zh", name: "Zurich" },
  ];
  

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
            {cantonsEN.map((canton) => (
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
