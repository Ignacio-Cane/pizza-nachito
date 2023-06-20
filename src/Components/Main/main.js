import React,{Fragment,useEffect, useState} from 'react';
import Nav from '../Nav/nav';
import Card from './Card/card';
import Pedido from './pedido/pedido';
import Footer from '../Footer/footer';
import '../Main/main.css';

const Main = () => {
  let [datos, setDatos]=useState([]);

  const traerInfo=async()=>{
    let infor= await fetch("https://api-proyecto-a0km.onrender.com/productos/allProducts")
       .then((res)=>res.json())
       .then((data)=>setDatos(data))
       .catch((error)=>console.log("HAY UN ERROR !! "+error))
    return infor   
 }
 useEffect(()=>{ 
     traerInfo()

     // setTimeout(()=>{console.log(datos)},5000)
 },[])
 
  return (
    <Fragment>
        <Nav/>
        <main>
            <h2>Carrito de Compra</h2>
            <div className='carrito'>
               0
            </div>
            <div className= 'section-cards'>
              {datos.map((dato)=>{
                return <Card key={dato.id} infor={dato}/>
                })}
            </div>
        </main>
        <Pedido/>
        <Footer/> 
    </Fragment>
  )
}

export default Main; 