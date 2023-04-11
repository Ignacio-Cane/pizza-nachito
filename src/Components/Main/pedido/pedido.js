import React, { Fragment } from 'react';
import './pedido.css';

const Pedido = () => {
  return (
    <Fragment>
        <section>
            <div className='cabecera-pedido'>
                <h1 className='cabecera-titulo'>Las Pizzas de Nachito</h1>
                <p className='cabecera-parrafo'>Algo que siempre me gusto de chico fueron las pizzas, entre amigos, familiares, en cumpleaños diria que para cualquier momento de la vida.. como tal vez una simple cena con alguien.
                    Estoy orgulloso de este emprendimiento familiar, nos dedicamos a esto 100% te vamos asegurar felicidad plena, no dudes en pasar un buen momento... </p>
                    <a className='cabecera-a' href='https://wa.me/3537668071'>
                    <img className='cabecera-wa' src='../../assents/img/wa.png' alt='wa'/>
                    </a>
                </div>
        </section>
    </Fragment>
  )
}

export default Pedido; 