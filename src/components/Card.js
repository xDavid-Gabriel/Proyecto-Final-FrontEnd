import React from 'react'
/*import { Route,BrowserRouter as Router,Link ,Routes} from "react-router-dom";*/
import PropTypes from 'prop-types'
import './cards.css'


function Card({title,price,imageSource,description,ubicacion}) {
    const url="https://getbootstrap.com/";
    return (
        <div className="card text-left ">
            <img src={imageSource} alt="imagen" />
          <div className="card-body">
            <h4 className="card-title ">{title}</h4>
            <h4 className="card-text text-secondary ">S/.{price} X mes</h4>
            <p className="card-text text-secondary">{description}</p>
            <p className="card-text text-secondary ">Localización: {ubicacion}</p>

           
              <a href={url} className="btn btn-outline-secondary" > 
                  Ver detalle</a>    
                  
          </div>
                                           
        </div>
    )
}

Card.propTypes={
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    imageSource:PropTypes.string
}
export default Card
