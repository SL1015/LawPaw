import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import CategoryPageDE from "./Pages/category/CategoryPageDE";
import CategoryPageEN from "./Pages/category/CategoryPageEN";
import CategoryPageFR from "./Pages/category/CategoryPageFR";
import ChatBotPage from "./Pages/chatbot/ChatBotPage";
import CantonPage from "./Pages/cantons/CantonPage";
import CantonPageDE from "./Pages/cantons/CantonPageDE";
import CantonPageFR from "./Pages/cantons/CantonPageFR";
import Intro from "./Pages/intro/intro";
import "./App.css";

function LanguagePage() {
  let { language } = useParams();

  const getCantonPageByLanguage = (language) => {
    switch (language) {
      case "de":
        return CantonPageDE;
      case "en":
        return CantonPage;
      case "fr":
        return CantonPageFR;
      default:
        return CantonPage;
    }
  };

  const SelectedLangPage = getCantonPageByLanguage(language);

  return <SelectedLangPage />;
}

function CategoryPage() {
  let { language } = useParams();

  const getCategoryPageByLanguage = (language) => {
    switch (language) {
      case "de":
        return CategoryPageDE;
      case "en":
        return CategoryPageEN;
      case "fr":
        return CategoryPageFR;
      default:
        return CategoryPageEN;
    }
  };

  const SelectedCatPage = getCategoryPageByLanguage(language);

  return <SelectedCatPage />;
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/:language" element={<LanguagePage />} />
          <Route path="/:language/:canton" element={<CategoryPage />} />
          <Route
            path="/:language/:canton/:category"
            element={<ChatBotPage />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
