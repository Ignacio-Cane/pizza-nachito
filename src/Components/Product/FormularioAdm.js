//import React, { Fragment } from 'react';
import AddProduct from './AddProduct/AddProduct';
import Products from './Products/Products';
import { useState } from 'react';

const FormularioAdm = () => {
  
  const [ocultarProducto,setOcultarProducto]=useState(true);
  const[formOculto,setFormOculto] =useState(true);
  


  return (
    <main className="mt-5 d-flex flex-column align-items-center">
      <h2>Sitio de Administrador</h2>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-warning" type="button" onClick={()=>{setOcultarProducto(false);setFormOculto(true)}}>Mostrar Producto</button>
        <button className="btn btn-warning" type="button" onClick={()=>{setFormOculto(false);setOcultarProducto(true)}}>Cargar Producto</button>
        <a href='/'>Login</a>
      </div>

      {formOculto === false? 
        <section className='w-100 d-flex flex-column align-items-center'>
          <button type="button" className="btn btn-info align-self-end me-5" onClick={()=>setFormOculto(true)}>X</button>
        <AddProduct/>
        </section>:''}

      { ocultarProducto === false? 
        <section className='w-100 d-flex flex-column align-items-center p-3 '>
        <button type="button" className="btn btn-info align-self-end me-5" onClick={()=>setOcultarProducto(true)}>X</button>
          <Products modifDato={setFormOculto}/>
        </section>:''}

    </main>
    
  )
}

export default FormularioAdm 