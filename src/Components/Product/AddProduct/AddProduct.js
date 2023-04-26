import React from 'react'

export default function AddProduct(){
  return (
    <form className='row card text-white bg-secondary m-3 align-items-center w-50' action='http://localhost:4000/addProducts' method='POST'>
        <label className="col-sm-2 col-form-label mb-2 w-100" formhtml='nombre'>INGRESE EL PRODUCTO</label>
        <input className='col-sm-10 form-control mb-3' type='text' id='nombre' name='nombre' ></input>
        
        <label className="col-sm-2 col-form-label mb-2 w-100" formhtml='precio'>INGRESE EL PRECIO</label>
        <input className='col-sm-10 form-control mb-3' type="number" id='precio' name='precio' ></input>

        <input type='submit' value="Agregar" className='btn btn-primary w-25'/>
    </form>
  )
}

  