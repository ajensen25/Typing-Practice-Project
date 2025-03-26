import { useState } from "react";
import "./SettingsList.css";

function SettingsList({ settingsList }) {
  const root = document.documentElement;
  let [selectedFont, setSelectedFont] = useState("Poppins");
  let [selectedTheme, setSelectedTheme] = useState("dark");

  const toggleTheme = () => {
    if (selectedTheme === "dark") {
      root.style.setProperty("--primary-color", "white");
      root.style.setProperty("--primary-color-hover", "rgb(240, 240, 240)");
      root.style.setProperty("--secondary-color", "rgb(230, 84, 0)");
      root.style.setProperty("--border-color", "black");
      root.style.setProperty("--shadow-color", "black");
      root.style.setProperty("--white-color", "black");
      setSelectedTheme("light");
    } else {
      root.style.setProperty("--primary-color", "rgb(50, 50, 50)");
      root.style.setProperty("--primary-color-hover", "rgb(65, 65, 65)");
      root.style.setProperty("--secondary-color", "rgb(255, 165, 92)");
      root.style.setProperty("--border-color", "white");
      root.style.setProperty("--shadow-color", "white");
      root.style.setProperty("--white-color", "white");
      setSelectedTheme("dark");
    }
  };

  const toggleFont = () => {
    if (selectedFont === "Poppins") {
      root.style.setProperty("--selected-font", "'Roboto', sans-serif");
      setSelectedFont("Roboto");
    } else if (selectedFont === "Roboto") {
      root.style.setProperty("--selected-font", "'Raleway', sans-serif");
      setSelectedFont("Raleway");
    } else {
      root.style.setProperty("--selected-font", "'Poppins', serif");
      setSelectedFont("Poppins");
    }
  };

  return (
    <ul className="settings-list" ref={settingsList}>
      <button className="setting" onClick={toggleTheme}>
        <i
          className={selectedTheme === "dark" ? "uil uil-moon" : "uil uil-sun"}
        ></i>
        <p>Theme</p>
      </button>
      <button className="setting" onClick={toggleFont}>
        <i className="uil uil-font"></i>
        <p>{selectedFont}</p>
      </button>
    </ul>
  );
}

export default SettingsList;
