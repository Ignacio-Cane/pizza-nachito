import React, { useEffect, useState } from 'react'
import { Product } from '../Product/Product';


const Products = () => {

    let [datos, setDatos]=useState([]);

    const traerInfo=async()=>{
        await fetch("http://localhost:4000/getProduct")
                .then((res)=>res.json())
                .then((data)=>setDatos(data))
                .catch((err)=>console.log(err))
    }

    useEffect(()=>{ 
        traerInfo()

        setTimeout(()=>{console.log(datos)},5000)
    },[])

 
  return (
    <section className= 'row card text-white bg-secondary m-3 align-items-center w-50'>
        {datos.map((dato)=>{
            return <Product key={datos.indexOf(dato)} info={dato} />
        })}

    </section>
  )
}

export default Products