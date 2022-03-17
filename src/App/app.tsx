import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInitial from "../pages";
import TalkChat from "../pages/chat";
import ContextDarlModelMode from "../context/context";
import { GlobalStyles } from "../styles/styleGlobal";


const App: React.FC = () => {
  const [darkModelMode, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("darkModelMode")) {
      setDark(true);
    };

  }, []);

  return (
    <ContextDarlModelMode.Provider value={{ darkModeModel: darkModelMode, setDark: setDark }}>
      <GlobalStyles bgDark={darkModelMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageInitial />} />
          <Route path="/talks" element={<TalkChat />} />
        </Routes>
      </BrowserRouter>
    </ContextDarlModelMode.Provider>
  );
};

export default App;
