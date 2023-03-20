import React from "react";
import './index.css'

function Header({handleRefresh}) {
  return (
    <div id="header">
      <div id="gallery-name">
        <p>Mi Galeria de Imagenes</p>
        <span></span>
      </div>
      <span id="refresh" onClick={handleRefresh}></span>
      <div id="social-medias-icons">
        <span id="whatsapp"></span>
        <span id="twitter"></span>
        <span id="instagram"></span>
      </div>
    </div>
  );
}
export default Header;
