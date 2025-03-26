import { useRef } from "react";
import "./Navbar.css";
import SettingsList from "./SettingsList/SettingsList";

function Navbar() {
  const settingsList = useRef(null);

  const toggleSettings = () => {
    settingsList.current.classList.toggle("visible");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>
          Typing<b>Practice</b>
        </h2>
      </div>
      <div className="navbar-right">
        <button className="practice-button">More Practice</button>
        <button className="settings-button" onClick={toggleSettings}>
          <i className="uil uil-setting"></i>
        </button>
      </div>
      <SettingsList settingsList={settingsList} />
    </div>
  );
}

export default Navbar;
