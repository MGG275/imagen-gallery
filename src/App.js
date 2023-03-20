//import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import SeleccionadaImg from "./components/Seleccionada-img";

function App() {
  const galleryImages = [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/700/400?random=2",
    "https://picsum.photos/700/400?random=3",
    "https://picsum.photos/700/400?random=4",
    "https://picsum.photos/400/500?random=5",
    "https://picsum.photos/400/500?random=6",
    "https://picsum.photos/400/500?random=7",
    "https://picsum.photos/400/500?random=8",
    "https://picsum.photos/400/600?random=9",
    "https://picsum.photos/700/400?random=10",
    "https://picsum.photos/700/400?random=11",
    "https://picsum.photos/400/500?random=12",

  ];

  const [imagenSeleccionada, setImagenSeleccionada] = useState("");
  const [mostrarImgen, setMostrarImagen] = useState(false);

  const handleClic = (i) => {
    if (galleryImages[i] && mostrarImgen === false) {
      setImagenSeleccionada(galleryImages[i]);
      setMostrarImagen(true);
    }
  };
  const handleClose = () => setMostrarImagen(!mostrarImgen);

  const handleRefresh = () => window.location.reload()

  return (
    <div id="main-div">
      <Header handleRefresh={handleRefresh}/>
      <Gallery arrayGallery={galleryImages} handleClic={handleClic} />
      {mostrarImgen ? (
        <SeleccionadaImg urlImg={imagenSeleccionada} close={handleClose} />
      ) : null}
    </div>
  );
}

export default App;
