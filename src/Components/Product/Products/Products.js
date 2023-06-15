import React, { useEffect, useState } from 'react'
import  Product  from '../Product/Product';


export default function Products({modifDato}){

    let [datos, setDatos]=useState([]);

    const traerInfo=async()=>{
       let info= await fetch("http://localhost:4000/productos/allProducts")
          .then((res)=>res.json())
          .then((data)=>setDatos(data))
          .catch((error)=>console.log("HAY UN ERROR !! "+error))
       return info   
    }

    useEffect(()=>{ 
        traerInfo()

        // setTimeout(()=>{console.log(datos)},5000)
    },[])

 
  return (
    <div className= 'section-cards d-flex justify-content-center flex-wrap '>
        {datos.map((dato)=>{
            return <Product key={dato.id} info={dato} desplegar={modifDato}/>
        })}
    </div>
  )
}

