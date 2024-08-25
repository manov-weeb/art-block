// src/components/DarkModeToggle.js

import { useContext } from "react";

import styles from "./darkModeToggle.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext); // Use context

  return (
    <div className={styles.toggleContainer} onClick={toggleDarkMode}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className={styles.toggle}
      />
      <span className={styles.toggleLabel}>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default DarkModeToggle;
