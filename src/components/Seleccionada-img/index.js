import React from "react";
import "./index.css";

function SeleccionadaImg({ urlImg, close }) {
  return (
    <div id="img-seleccionada">
      <div id="div-child-img-selected">
        <img src={urlImg} alt="" />
        <button onClick={close}>X</button>
      </div>
    </div>
  );
}

export default SeleccionadaImg;
