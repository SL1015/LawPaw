import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <span className="spinner">
      <span className="bounce1"></span>
      <span className="bounce2"></span>
      <span className="bounce3"></span>
    </span>
  );
};

export default LoadingSpinner;
