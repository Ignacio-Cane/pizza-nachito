
import Nav from '../../Nav/nav';
import React,{Fragment} from 'react';
import Footer from '../../Footer/footer';
import Pedido from '../pedido/pedido';
const Card = () => {
  return (
    <Fragment>
        <Nav/>
        <div>Menu de pizzas</div>
        <Pedido/>
        <Footer/>
    </Fragment>
  )
}

export default Card;