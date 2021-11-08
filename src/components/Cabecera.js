import React from 'react'
import "./Cabecera.css"
import cabecImage from '../images/fondo_sonrisa.jpg'
const lnkPropietario = "http://lorempixel.com";

function Cabecera() {
    return (
       <div className="container d-flex  h-100" >
            <img src={cabecImage} alt="imagen" className="img-responsive"/>
                   
            <div className="img-overlay">
                
                <h4 className="intro-1">Alquila cocinas fantasma Aqui!!!</h4>
                {/* <h4 className="intro-2"></h4> */}
                <br />
                <form >
                    <div className="input-group mb-3 buscar d-flex justify-content-center">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg> 
                            </span>
                        </div>
                        <input type="text" className="form-control " placeholder="Buscar por zonas Ejemplo : Miraflores" />
                    </div>
                    {/* <input className="buscar" type="text" placeholder=""/> */}
                </form>
                <div className="rows">
                    <div className="col-md-6">
                        <a href={lnkPropietario} className="botonIng">Ingresar</a>&nbsp;&nbsp;
                        <a href={lnkPropietario} className="botonProp">Soy propietario</a>
                        <br/><br/>
                    </div>
                </div>
                <div className="rows"></div> 
            </div>               
        </div> 
    )
}
export default Cabecera
