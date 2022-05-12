import React from "react";
import "./Switch.css";

const Switch = ({ tabIndex, handleSwitch }) => {
  const buttonStyles = (value) => {
    return tabIndex === value 
      ? "btn bg-blue-600 text-xl font-semibold hover:bg-blue-700 p-2 w-36 clicked"
      : "btn bg-blue-400 text-xl font-semibold hover:bg-blue-700 p-2 w-36";
  }
  return (
    <div className="absolute float-right text-white switch-container">
      <button
        className={buttonStyles(1) + " rounded-l-full pl-5"}
        onClick={() => handleSwitch(1)}
      >
        <span className="material-symbols-outlined mr-1">extension</span>
        Blocks
      </button>
      <button
        className={buttonStyles(2) + " rounded-r-full pr-5"}
        onClick={() => handleSwitch(2)}
      >
        <span className="material-symbols-outlined mr-1">code</span>
        SmartPy
      </button>
    </div>
  );
};

export default Switch;
