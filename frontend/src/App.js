import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import CategoryPageDE from "./Pages/category/CategoryPageDE";
import CategoryPageEN from "./Pages/category/CategoryPageEN";
import CategoryPageFR from "./Pages/category/CategoryPageFR";
import ChatBotPage from "./Pages/chatbot/ChatBotPage";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/de/:canton" element={<CategoryPageDE />} />
          <Route path="/en/:canton" element={<CategoryPageEN />} />
          <Route path="/fr/:canton" element={<CategoryPageFR />} />
          <Route path="/:language/:canton/:category" element={<ChatBotPage />} />
          <Route path="/0" element={<ChatBotPage />} />
          
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
