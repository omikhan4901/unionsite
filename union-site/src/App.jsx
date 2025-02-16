import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Pages/Home.jsx";
import Services from "../Pages/Services";
import Form from "../Pages/Form";
import FAQ from "../Pages/FAQ";
import Navbar from "../Components/Navbar.jsx";
function App() {
  const [appLanguage, setAppLanguage] = useState("en")
  return (
    <>
      <Navbar setLanguage = {setAppLanguage} appLanguage = {appLanguage} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home appLanguage = {appLanguage}/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/form" element={<Form />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
