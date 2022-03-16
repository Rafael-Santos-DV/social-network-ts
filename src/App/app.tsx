import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInitial from "../pages";
import TalkChat from "../pages/chat";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInitial />} />
        <Route path="/talks" element={<TalkChat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
