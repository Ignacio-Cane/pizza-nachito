import Footer from '../Footer/footer';
import Title from '../Log/Title/title';
import React,{Fragment, useState} from 'react';
import './check.css';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';


const Check = () => {
    const [mensaje,setMensajeRegistro]= useState(true)
    //const navigate= useNavigate();

    // function handleClick (){
    //     navigate('/')
    // }
    
    // const [form, setForm] = useState({
    //     usuario:'',
    //     contraseña:''
    // });
    // const handleChang=(e)=>{
    //     setForm({
    //         ...form,
    //         [e.target.name] : e.target.value
    //     }) 
    // };

    const registrarse=async(event)=>{
        event.preventDefault();
        let formData=JSON.stringify({
            "usuario": event.target[0].value,
            "contraseña": event.target[1].value
        });

        const response=await fetch('https://api-proyecto-a0km.onrender.com/usuario/check', {
                method:'POST',
                body: formData ,
                headers:{
                    'Content-Type': 'application/json'
                }
                })
        if(response.ok){
            console.log(response)
            setMensajeRegistro(false)
        }
    }
//value={form.usuario} onChange={(event)=>{handleChang(event)}}
   
  return (
    <Fragment>
        {mensaje === true? 
        <form className='container' onSubmit={(event)=>{registrarse(event)}} method="POST">
            <Title text='Registrarse'/>
            <div className='row cabecera-reg'>
                <label htmlFor='usuario' className='form-label'>Registre su nombre de usuario</label>
                <input className='form-control' type='text' id='usuario' name='usuario' placeholder='Ingrese su nombre de usuario' />

                <label htmlFor='contraseña' className='form-label'>Registre su Contraseña</label>
                <input className='form-control' type='password' id='contraseña' name='contraseña' placeholder='Ingrese su Contraseña' />

                <div className='col-12'>
                    <button type='submit' className='bot-log btn btn-primary'>Registrarse</button>
                    <Link to={'/'} className='bot-log btn btn-primary'>Login</Link>
                </div> 
            </div>
        </form> :
        <div className="d-flex justify-content-center align-items-center flex-column alert alert-dismissible alert-success m-5 p-5 gap-5">
            <button type="button" className=" btn-close" data-bs-dismiss="alert" onClick={()=> setMensajeRegistro(false)}></button>
            <p className='fs-1'> Usuario Registrado</p>
             <Link to={'/'} className='bot-log btn btn-primary'>Login</Link> 
        </div>}

        <Footer/>
    </Fragment>
  )
}

export default Check;