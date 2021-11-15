import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./Css/estilos.css"
import Header from "./components/Header"
import Carrusel from "./components/Carrusel";
import Cards from "./components/Cards";



export default function App() {
  return (
    <div className="contenedor">
      <div className="principal">
        <Header/>
        <Carrusel/>
      </div>
      <div className="tarjetas">
          <Cards/>
      </div>
    </div>
  )
}

