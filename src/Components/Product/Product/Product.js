import "./Product.css";

export default function Product ({info,desplegar}){

    const irAform =()=>{
        let data=JSON.stringify(info)
        localStorage.setItem('produGuardado',data)
        desplegar(false)
    }

  const eliminarProd=async()=>{

    await fetch("http://localhost:4000/productos/deleteProducts",{
      method:"DELETE",
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({"nombre": info.nombre})
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log("HAY UN ERROR!!" +error))
  }

  return (
    <div className="card bg-secondary text-white ">
      <div className="card-body">
        <ul className='list-group list-group-flush my-2'>
          <li className="list-group-item bg-secondary ">{info.nombre}</li>
          <li className="list-group-item bg-secondary ">{info.precio}</li>
          <img className='img-thumbnail ' src={info.imagen} alt='pizza'></img>
        </ul>  
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-info btn-eliminar" onClick={()=>irAform()} >Editar informacion</button>
          <button  className="btn btn-danger btn-eliminar me-2" onClick={()=>eliminarProd()}>Eliminar Producto</button>
        </div> 

      </div>
    </div>
  )
}


/* {actualizar === true?          ///onClick={()=>setActualizar(true)
        <form className='w-100 d-flex flex-column align-items-center' onSubmit={(e)=>updateProducts(e)} method='PUT'>
          <button type="button" className="btn btn-info align-self-end me-5" onClick={()=>{setActualizar(false);setOcultarProducto(false)}}>X</button>
          <section className='row card text-white bg-secondary m-3 align-items-center w-50'  method='PUT'>
            <label className="col-sm-2 col-form-label mb-2 w-100" formhtml='nombre_producto'>ACTUALIZAR NOMBRE DEL PRODUCTO</label>
            <input className='col-sm-10 form-control mb-3' type='text' id='nombre Producto' name='nombre_producto' value={formulario.nombre_de_producto} onChange={(e)=>{handleChange(e)}} ></input>
        
            <label className="col-sm-2 col-form-label mb-2 w-100" formhtml='precio'>ACTUALIZAR EL PRECIO DEL PRODUCTO</label>
            <input className='col-sm-10 form-control mb-3' type="number" id='precio Producto' name='precio' value={formulario.precio} onChange={(e)=>{handleChange(e)}} ></input>
        
            <label className="col-sm-2 col-form-label mb-2 w-100" formhtml='imagen'>ACTUALIZAR LA IMAGEN DEL PRODUCTO</label>
            <input className='col-sm-10 form-control mb-3' type="file" id='imagen Producto' name='imagen' placeholder={formulario.imagen} onChange={(e)=>{handleChange(e)}}  ></input>
            <input type='submit' value="Actualizar" className='btn btn-primary '/>
          </section>
        </form>:''
      } */