import React from 'react'
import "./Cabecera.css"
import cabecImage from '../images/fondo_sonrisa.jpg'
const lnkPropietario = "http://lorempixel.com";

function Cabecera() {
    return (
       <div className="container d-flex  h-100" >
            <img src={cabecImage} alt="imagen" className="img-responsive"/>
                   
            <div className="img-overlay">
                
                <h4 className="intro-1">Alquila cocinas</h4>
                <h4 className="intro-2">fantasma Aqui!!!</h4>
                <br />
                <form >
                    <input className="buscar" type="text" placeholder="Buscar por zonas Ejemplo : Miraflores"/>
                </form>
             
                <a href={lnkPropietario} className="btn btn-outline-info h-0"> 
                        Soy propietario</a> 
                        
                <a href={lnkPropietario} className="btn btn-outline-info w-20"> 
                        Ingresar</a> 
                   
            </div>               
        </div> 
    )
}
export default Cabecera
