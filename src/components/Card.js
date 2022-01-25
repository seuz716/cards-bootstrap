import React from 'react';
import PropTypes from 'prop-types';
import imagen from '../assets/treboles.png';
import './card.css'




function Card({title, imageSource, url, text}) {

  return( 
  
    <div className='card text-center animate__animated animate__bounceInUp bg-dark ' >

        <div className='overflow'>
            <img src={imageSource ? imageSource:imagen  } alt='' className='card-img-top'/>
        </div>
        <div className='card-body text-light' >
          <h4 className='card-title'> {title} </h4>
              <p className='card-text text-secondary'> {text ? text :"Ea et excepteur sint cupidatat eu id ullamco. Aute sint consectetur enim labore. Dolore enim laboris aute deserunt sit. Ipsum in nulla et cupidatat pariatur velit exercitation." } 
               </p>
               <a href={url} className='btn btn-outline-primary  rounded:0' target="_blank" >
                 Go to this website
               </a>
      </div>
    </div>
)}

Card.propTypes ={
 title: PropTypes.string.isRequired,
 url:  PropTypes.string,
 imageSource :PropTypes.string,
 text: PropTypes.string

}

export default Card;
