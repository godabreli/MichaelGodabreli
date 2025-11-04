import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Datenschutz from "./Pages/Datenschutz";
import DownloadGallery from "./Pages/DownloadGallery";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/gallery/:galleryName" element={<DownloadGallery />} />
      </Routes>
    </>
  );
}

export default App;
