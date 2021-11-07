import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

function Card({title,imageSource,url}) {
    
    return (
        <div className="card text-center ">
            <img src={imageSource} alt="imagen" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Tempora molestias id obcaecati natus illo enim asperiores 
                 qui saepe eveniet mollitia soluta rem</p>

                  <a href={url} className="btn btn-outline-secondary" target="_blank"> 
                  Go to this web site</a>
                  
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
