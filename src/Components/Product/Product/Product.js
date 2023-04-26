//import { useState } from "react"

export const Product = ({info}) => {

  
  const elimProduct=()=>{ 
      
      console.log(info);

    }     


  return (
    <div className="d-flex align-items-center justify-content-center">
        <p className="col-5">{info.nombre}</p>
        <p className="col-1">{info.precio}</p>
        <div className="col-6 d-flex my-3">
            <button className="btn btn-primary me-2">Mas informacion</button>
            <button onClick={elimProduct} className="btn btn-primary">Eliminar Producto</button>
        </div>

    </div>
  )
}
