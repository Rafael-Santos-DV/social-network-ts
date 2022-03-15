import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInitial from "../../pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInitial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
