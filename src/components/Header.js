import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="app-header">
      <h1>Sarju's Daily Tracker</h1>
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;
