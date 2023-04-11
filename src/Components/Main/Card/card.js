import '../Card/card.css';
import React,{Fragment} from 'react';



  let contador=0
  
  const agregarACarrito=()=>{
    contador =contador+1;
    document.querySelector(".carrito").textContent=contador
  }

const Card = () => {
  return (
    <Fragment>
        <section>
            <div className='a-div'>
                <h3 className='a-h3'>Pizza Napolitana</h3>
                <img className='a-img' src='./assents/img/pizza-napolitana.png' alt='pizza'></img>
                <button type='button' className='btn btn-primary' onClick={()=>{agregarACarrito()}}>Comprar</button>
                <button className='btn btn-primary'>Agregar al Carrito</button>
            </div>
        </section>
        
    </Fragment>
  )
}

export default Card; 