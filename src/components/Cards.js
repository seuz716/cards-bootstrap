import React from 'react';
import Card from './Card';

import image1 from '../assets/floresBlancas.png';
import image2 from '../assets/abejaGirasol.png';
import image3 from '../assets/PlantaFloresAzules.png';

const cards = [
    {
        id:1,
        title:'Fazt Web',
        image: image1,
        url:'https://www.linkedin.com/feed/'
    },
    {
        id:3,
        title:'Fazt Web',
        image: image3,
        url:'https://www.linkedin.com/feed/'
    },
    {
        id:4,
        title:'Cesar Web',
        url:'https://www.linkedin.com/feed/',
        text:'Se llama trébol a una variedad de hierba que se caracteriza por tener un tamaño pequeño (alrededor de 50 centímetros), perteneciente a la familia papilionáceas y cuya hojas se encuentran partidas por tres lóbulos.'
    },
];

function Cards() {
      return <div className='container d-flex justify-content-center h-100 align-items-center  ' >
            
            <div className='row' >
                {
                    cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
                    </div>
                 ))    
                }
            </div>
            

        </div>

}

export default Cards;
