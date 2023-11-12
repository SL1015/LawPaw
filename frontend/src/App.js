import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import CategoryPageDE from "./Pages/category/CategoryPageDE";
import CategoryPageEN from "./Pages/category/CategoryPageEN";
import CategoryPageFR from "./Pages/category/CategoryPageFR";
import ChatBotPage from "./Pages/chatbot/ChatBotPage";
import CantonPage from "./Pages/cantons/CantonPage";
import CantonPageDE from "./Pages/cantons/CantonPageDE";
import Intro from "./Pages/intro/intro"
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/:language" element={<CantonPage />} />
          <Route path="/de/:canton" element={<CategoryPageDE />} />
          <Route path="/en/:canton" element={<CategoryPageEN />} />
          <Route path="/fr/:canton" element={<CategoryPageFR />} />
          <Route path="/:language/:canton/:category" element={<ChatBotPage />} />
          <Route path="/:language/:canton/0" element={<ChatBotPage />} />
          <Route path="/de" element={<CantonPageDE />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
