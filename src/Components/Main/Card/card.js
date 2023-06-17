import '../Card/card.css';
import React,{Fragment} from 'react';

  let contador=0
  
  const agregarACarrito=()=>{
    contador =contador+1;
    document.querySelector(".carrito").textContent=contador
  }


const Card = ({infor}) => {
  return (
    <Fragment>
        <section className="a-sec" >
            <div className='a-div'>
                <ul className=' list-group'>
                  <li className='list-group-item'>{infor.nombre}</li>
                  <li className='list-group-item'>{infor.precio}</li>
                  <img className='a-img' src={infor.imagen} alt='pizza'></img>
                </ul>
                <button type='button' className=' btn btn-primary' onClick={()=>{agregarACarrito()}}>Comprar</button>
                <button className=' btn btn-primary'>Agregar al Carrito</button>
            </div>
        </section>
        
    </Fragment>
  )
}

export default Card; 