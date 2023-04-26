import React,{Fragment} from 'react';
import Nav from '../Nav/nav';
import Card from './Card/card';
import Pedido from './pedido/pedido';
import Footer from '../Footer/footer';

const Main = () => {
  return (
    <Fragment>
        <Nav/>
        <main>
            <h2>Carrito de Compra</h2>
            <div className='carrito'>
               0
            </div>
        <Card/>
        </main>
        <Pedido/>
        <Footer/> 
    </Fragment>
  )
}

export default Main; 