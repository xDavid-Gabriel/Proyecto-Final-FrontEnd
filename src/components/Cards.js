import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import Card from './Card'

import { obtenerLocal} from "../Services/localServices";

function Cards() {

    const [locales,setLocales]= useState([]);

    const getLocales=async()=>{

        try {
            const localesObtenidos=await obtenerLocal();
            console.table(localesObtenidos);
            setLocales(localesObtenidos);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getLocales();
    }, []);


    return (
        <div className="container d-flex justyfy-content-center h-100 align-items-center ">
            
                       
            <div className="row">
                {locales.map(card =>(
                        <div className="col-md-3" key ={card.id}>
                            <Card title={card.titulo} price={card.precio} imageSource={card.imagen} description={card.descripcion} ubicacion={card.ubicacion}/>
                        </div>
                    ))
                }
            
            </div>

           
        </div>
    )
}

export default Cards


