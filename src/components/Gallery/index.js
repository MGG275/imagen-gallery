import React from "react";
import "./index.css";
//import Images from "../Images";

export default function Gallery({ arrayGallery, handleClic }) {
  return (
    <div id="img-container">
      {arrayGallery.map((value, position) => (
        <img
          key={position}
          onClick={() => {
            handleClic(position);
          }}
          id={`image${position}`}
          src={value}
          alt=""
        />
      ))}
    </div>
  );
}
