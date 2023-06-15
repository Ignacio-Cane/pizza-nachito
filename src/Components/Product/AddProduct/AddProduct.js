import { Fragment, useState,useEffect } from 'react';

export default function CargarProducto(){
  const[mensajeOculto,setMensajeOculto]=useState(true);
    const [metodo,setMetodo]=useState('');
    const[form,setForm]=useState({
        nombre:'',
        precio:'',
        imagen:''
    });


//toma el objeto creado y cambia los valores del evento solamente
    const handleChange= (e)=>{
            setForm({...form,[e.target.name]:e.target.value})

        
    };



    const handleChangeInput= (e)=>{
            let fileInfo=e.target.files[0]
            console.log(fileInfo)
            setForm({...form,[e.target.name]: fileInfo})   
        
    };


    const addProduct=async (event)=>{
        event.preventDefault();
        let formData;
        let infoHeaders;
        let idProd='';
        
        if(metodo === 'POST'){
            formData= new FormData(event.target)//objeto con toda la data recaudada del formulario
             infoHeaders={
                'Context-Type':'multipart/form-data'
            }
            idProd='';
        }else{
            formData=JSON.stringify(form)
            infoHeaders={ 'Content-Type': 'application/json' }
            idProd=form.id;
            console.log(form.id)
        }
        
            const response= await fetch(`http://localhost:4000/productos/addProducts/${idProd}`,{
            method:metodo,
            headers:infoHeaders,
            body:formData
        })
        if(response.ok){
            
          //  en la response voy a tener el token que lo voy a guardar  en una variable
            setMensajeOculto(false);
            localStorage.removeItem("produGuardado")
        }
    }

    useEffect(()=>{
        //si la data la traigo con localStorage
        //la agregamos al estado form para que figure ya completo el formulario
         let data = localStorage.getItem("produGuardado");
        if(data !== null){
            setForm(JSON.parse(data))
            setMetodo("PUT")
        }else{
            setMetodo("POST")
        }
        //si la data viene como propo
        // if(data !== ''){
        //     setForm(data)
        // }
        // if(id !== ''){
        //     setIdCard(id)
        // }
     },[])


  return (
    <Fragment>
      { mensajeOculto === true?
        <form className=" w-75 mb-5" onSubmit={(event)=>{addProduct(event)}}>
          <label  htmlFor='nombre' className="form-label">INGRESE EL NOMBRE DEL PRODUCTO</label>
          <input  type='text' className="form-control" id='nombre' name='nombre'value={form.nombre} onChange={(event)=>handleChange(event)} ></input>
        
          <label htmlFor='precio' className="form-label">INGRESE EL PRECIO DEL PRODUCTO</label>
          <input type="number" id='precio' name='precio' className="form-control" min="100" value={form.precio} onChange={(event)=>handleChange(event)}></input>

          <input type="file" id='imagen' name='imagen' placeholder={form.imagen} onChange={(event)=>handleChangeInput(event)} /> 

          <button type="submit"  className='btn btn-primary w-25'>Agregar</button>
        </form>
        :
        <div className="alert alert-dismissible alert-success mt-4">
           <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=> setMensajeOculto(true)}></button>
          <strong> Producto Cargado Exitosamente!</strong>
        </div> 
      }
    </Fragment>
  )
}

 
  