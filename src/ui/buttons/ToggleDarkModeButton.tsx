"use client";

import { useState, useEffect } from "react";

const ToggleDarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Implementuj logikę przechowywania trybu ciemnego w localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // Zastosuj tryb ciemny do całej strony
    document.documentElement.classList.toggle("dark", darkMode);

    // Zapisz tryb ciemny w localStorage
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <button
      className="bg-gray-500 p-2 text-white dark:bg-gray-800 dark:text-gray-200"
      onClick={toggleDarkMode}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleDarkModeButton;
