import React from 'react'
import Card from './Card'
import image1 from '../images/cocina1.jpg'
import image2 from '../images/cocin2.jpg'
import image3 from '../images/cocina1.jpg'



const  tarjetas=[
    {
        id:1,
        title:'item1',
        image:image1,
        url:"https://faztweb.com/"
    },
    {
        id:2,
        title:'item2',
        image:image2,
        url:"https://blog.faztweb.com/"
    },
    {
        id:3,
        title:'item3',
        image:image2,
        url:"https://youtube.com/fazttech"
    },

    {
        id:4,
        title:'item4',
        image:image3,
        url:"https://youtube.com/fazttech"
    }

];
function Cards() {
    return (
        <div className="container d-flex justyfy-content-center h-100 align-items-center ">
            
                       
            <div className="row">
                { 
                    tarjetas.map(card =>(
                        <div className="col-md-3" key ={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url}/>
                        </div>
                    ))
                }
            
            </div>

           
        </div>
    )
}

export default Cards


