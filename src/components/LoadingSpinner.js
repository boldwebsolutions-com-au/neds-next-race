import React from "react";
import "../assets/styles/spinner.css";

export default function LoadingSpinner({ message }) {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p>{message || `Please wait while we fetch the next to jump`}</p>
    </div>
  );
}
