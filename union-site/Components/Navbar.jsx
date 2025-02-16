import React from "react";
import styles from "./Navbar.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function Navbar({ setLanguage, appLanguage }) {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_items}>
        <div href="#home" className={styles.navbar_item}>
          <a href="#home"> Home</a>
        </div>
        <div href="#how_it_works" className={styles.navbar_item}>
        <a href="#how_it_works"> Services</a>
        </div>
        <div href="#contact" className={styles.navbar_item}>
        <a href="#contact"> Contact</a>
        </div>
        <div href="#faq" className={styles.navbar_item}>
        <a href="#faq"> FAQ</a>
        </div>
      </div>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Language"
      >
        <ToggleButton
          onClick={() => {
            if (appLanguage === "ger") {
              setLanguage("en");
            }
          }}
          sx={{ fontStyle: "italic", color: "white" }}
          value="en"
        >
          en
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            if (appLanguage === "en") {
              setLanguage("ger");
            }
          }}
          sx={{ color: "white", fontStyle: "italic" }}
          value="ger"
        >
          Ger
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
