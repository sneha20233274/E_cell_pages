import React, { useState } from "react";
import "./Grid.css";
import logo from "../assets/ecelllogo.png";

const Body = () => {
  const [gridColors, setGridColors] = useState(Array(9).fill("#003B71"));
  const [clickSequence, setClickSequence] = useState([]);

  const handleSquareClick = (index) => {
    const newColors = [...gridColors];
    newColors[index] = "#8B0000"; 
    setGridColors(newColors);

    if (index === 8) {
      const updatedColors = [...newColors];
      clickSequence.forEach((clickedIndex, i) => {
        setTimeout(() => {
          updatedColors[clickedIndex] = "#003B71"; 
          setGridColors([...updatedColors]);
        }, i * 400);
      });
      setGridColors(updatedColors);
    } else {
      setClickSequence([...clickSequence, index]);
    }
  };

  return (
    <div className="body-content">
      <div className="section gradient-section"></div>
      <div className="section logo-section">
        <img src={logo} alt="E-Cell Logo" className="logo" />
      </div>
      <div className="section grid-section">
        <div className="grid-container">
          {gridColors.map((color, index) => (
            <div
              key={index}
              className={`grid-square ${clickSequence.includes(index) ? "clicked" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => handleSquareClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
