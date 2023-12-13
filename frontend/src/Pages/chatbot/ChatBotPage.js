import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ChatBox from "../../components/ChatBox";
// import ChatBox from "../../components/ChatBoxTest";
import { FaArrowLeft } from "react-icons/fa";
import "./ChatBotPage.css";
import FlipAlert from "../../components/FlipAlert";
import SettingsIcon from "../../components/Images/icons/settings.svg";
import closeIcon from "../../components/Images/icons/close.svg";

export default function ChatBotPage() {
  const { language, canton, category } = useParams();
  const navigate = useNavigate();
  const [settingsBox, setSettingsBox] = useState(false);
  const [settingsLanguage, setSettingsLanguage] = useState(language);
  const [settingsCanton, setSettingsCanton] = useState(canton);
  const [settingsCategory, setSettingsCategory] = useState(category);
  const [showMoreCantons, setShowMoreCantons] = useState(false);
  // console.log(`Lang: ${language}, Canton: ${canton}, Cat: ${category} `)

  const handleOpenSettings = () => {
    setSettingsBox(true);
  };

  const handleCloseSettings = () => {
    setSettingsBox(false);
    setShowMoreCantons(false);
    setSettingsLanguage(language);
    setSettingsCanton(canton);
    setSettingsCategory(category);
  };

  const handleSubmitSettings = () => {
    setSettingsBox(false);
    setShowMoreCantons(false);
    navigate(`/${settingsLanguage}/${settingsCanton}/${settingsCategory}`);
  };

  const handleChangeLanguage = (lang) => {
    setSettingsLanguage(lang);
  };

  const handleChangeCat = (cat) => {
    setSettingsCategory(cat);
  };

  const handleChangeCanton = (cant) => {
    setSettingsCanton(cant);
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

  const cantonsDE = [
    { abbreviation: "all", name: "Alle Kantone" },
    { abbreviation: "ag", name: "Aargau" },
    { abbreviation: "ai", name: "Appenzell Innerrhoden" },
    { abbreviation: "ar", name: "Appenzell Ausserrhoden" },
    { abbreviation: "be", name: "Bern" },
    { abbreviation: "bl", name: "Basel-Landschaft" },
    { abbreviation: "bs", name: "Basel-Stadt" },
    { abbreviation: "fr", name: "Freiburg" },
    { abbreviation: "ge", name: "Genf" },
    { abbreviation: "gl", name: "Glarus" },
    { abbreviation: "gr", name: "Graubünden" },
    { abbreviation: "ju", name: "Jura" },
    { abbreviation: "lu", name: "Luzern" },
    { abbreviation: "ne", name: "Neuenburg" },
    { abbreviation: "nw", name: "Nidwald" },
    { abbreviation: "ow", name: "Obwald" },
    { abbreviation: "sg", name: "St. Gallen" },
    { abbreviation: "sh", name: "Schaffhausen" },
    { abbreviation: "so", name: "Soleure" },
    { abbreviation: "sz", name: "Schwyz" },
    { abbreviation: "tg", name: "Thurgovie" },
    { abbreviation: "ti", name: "Tessin" },
    { abbreviation: "ur", name: "Uri" },
    { abbreviation: "vd", name: "Waadt" },
    { abbreviation: "vs", name: "Wallis" },
    { abbreviation: "zg", name: "Zoug" },
    { abbreviation: "zh", name: "Zurich" },
  ];

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

  let cantonsLanguages = [];

  if (language === "en") {
    cantonsLanguages = cantonsEN;
  } else if (language === "de") {
    cantonsLanguages = cantonsDE;
  } else if (language === "fr") {
    cantonsLanguages = cantonsFR
  }

  const firstFilteredCantons = cantonsLanguages.filter((c) => c.abbreviation !== canton);
  const filteredCantons = showMoreCantons ? firstFilteredCantons : firstFilteredCantons.slice(0, 4);
  const selectedCanton = cantonsLanguages.find((c) => c.abbreviation === canton);

  return (
    <>
      <FlipAlert />
      <section className="botpage-nav">
        <div className="progress-title">
          <Link to={`/${language}/${canton}`}>
            <span>
              <FaArrowLeft />
            </span>
          </Link>
          <h4>LawPaw</h4>
          <img
            src={SettingsIcon}
            alt="Settings Icon"
            onClick={handleOpenSettings}
          />
        </div>
      </section>
      <section className="chatbox-section">
        <ChatBox Language={language} Canton={canton} Category={category} />
      </section>
      <div className={`settings-container ${settingsBox ? "active" : ""}`}>
        <div className="settings-nav">
          <img src={closeIcon} alt="Close icon" onClick={handleCloseSettings} />
          <h4>Settings</h4>
          <span onClick={handleSubmitSettings}>Done</span>
        </div>
        <div className="settings-options-container">
          <div className="options-div settings-language">
            <h3>Language</h3>
            <div className="settings-button-container">
              <button
                className={settingsLanguage === "en" ? "active" : ""}
                onClick={() => handleChangeLanguage("en")}
              >
                English
              </button>
              <button
                className={settingsLanguage === "de" ? "active" : ""}
                onClick={() => handleChangeLanguage("de")}
              >
                German
              </button>
              <button
                className={settingsLanguage === "fr" ? "active" : ""}
                onClick={() => handleChangeLanguage("fr")}
              >
                French
              </button>
            </div>
          </div>
          <div className="options-div settings-canton">
            <h3>Canton</h3>
            <div className="settings-button-container">
              {/* <button
                className={settingsCanton === "all" ? "active" : ""}
                onClick={() => handleChangeCanton("all")}
              >
                All Cantons
              </button>
              <button
                className={settingsCanton === "ag" ? "active" : ""}
                onClick={() => handleChangeCanton("ag")}
              >
                Aargau
              </button>
              <button
                className={settingsCanton === "ai" ? "active" : ""}
                onClick={() => handleChangeCanton("ai")}
              >
                Appenzell Inner-Rhodes
              </button>
              <button
                className={settingsCanton === "ar" ? "active" : ""}
                onClick={() => handleChangeCanton("ar")}
              >
                Appenzell Outer-Rhodes
              </button>
              <button
                className={settingsCanton === "be" ? "active" : ""}
                onClick={() => handleChangeCanton("be")}
              >
                Bern
              </button>
              <button
                className={settingsCanton === "bl" ? "active" : ""}
                onClick={() => handleChangeCanton("bl")}
              >
                Basel-Country
              </button>
              <button
                className={settingsCanton === "bs" ? "active" : ""}
                onClick={() => handleChangeCanton("bs")}
              >
                Basel-City
              </button> */}
              <button
                key={selectedCanton.abbreviation}
                className={
                  settingsCanton === selectedCanton.abbreviation ? "active" : ""
                }
                onClick={() => handleChangeCanton(selectedCanton.abbreviation)}
              >
                {selectedCanton.name}
              </button>
              {filteredCantons.map((canton) => (
                <button
                  key={canton.abbreviation}
                  className={
                    settingsCanton === canton.abbreviation ? "active" : ""
                  }
                  onClick={() => handleChangeCanton(canton.abbreviation)}
                >
                  {canton.name}
                </button>
              ))}
            </div>

            <span onClick={() => setShowMoreCantons(!showMoreCantons)}>
              {showMoreCantons ? "Show less" : "Show more"}
            </span>
          </div>
          <div className="options-div settings-category">
            <h3>Category</h3>
            <div className="settings-button-container">
              <button
                className={settingsCategory === "1" ? "active" : ""}
                onClick={() => handleChangeCat("1")}
              >
                Contract
              </button>
              <button
                className={settingsCategory === "2" ? "active" : ""}
                onClick={() => handleChangeCat("2")}
              >
                Rental
              </button>
              <button
                className={settingsCategory === "3" ? "active" : ""}
                onClick={() => handleChangeCat("3")}
              >
                Family
              </button>
              <button
                className={settingsCategory === "4" ? "active" : ""}
                onClick={() => handleChangeCat("4")}
              >
                Employment
              </button>
              <button
                className={settingsCategory === "5" ? "active" : ""}
                onClick={() => handleChangeCat("5")}
              >
                Inheritance
              </button>
              <button
                className={settingsCategory === "6" ? "active" : ""}
                onClick={() => handleChangeCat("6")}
              >
                Others
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
