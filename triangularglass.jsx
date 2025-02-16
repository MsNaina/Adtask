import React from "react";
import "./triangularglass.css"; // Import the styles

const TriangularGlass = ({ children, width = "250px", height = "250px", blur = ".2px" }) => {
  return (
    <div className="triangle-container">
      <div className="triangle" style={{ width, height, backdropFilter: `blur(${blur})` }}></div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TriangularGlass;
