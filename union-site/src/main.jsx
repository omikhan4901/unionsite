import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Pages/Home.jsx";
import Services from "../Pages/Services";
import Form from "../Pages/Form";
import FAQ from "../Pages/FAQ";
import Navbar from "../Components/Navbar.jsx";
import App from "./App.jsx"
createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <App />
  </StrictMode>
);
