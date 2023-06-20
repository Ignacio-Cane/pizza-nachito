import React,{Fragment} from 'react';
import Title from '../Log/Title/title';
import './Log.css';
import Footer from '../Footer/footer';
import { Link,useNavigate } from 'react-router-dom';


const Log = () => {
    const navigate= useNavigate();
    //ACA LO COMENTADO ES PORQUE QUISE GENERAR UN ESTADO COMBINADO CON UN HANDLECHANGE PARA QUE CAMBIE EL VALOR  CONSTANTEMENTE PERO NO LO PUDE RESOLVER, SEGURAMENTE TENGA ALGUN ERROR EN ALGO DEL CODIGO;

    // const [datos, setDatos] = useState({
    //     usuario:'',
    //     contraseña:''
    // });

    // const handleChange=(event)=>{
    //     setDatos({
    //         ...datos,
    //         [event.target.name] : event.target.value
    //     }) 
    // };
    //value={form.usuario} onChange={(event)=>handleChange(event)} ESTO ES LO QUE LE PASABA EN EL INPUT;
    //let form= JSON.stringify(datos) DESPUES LE PASABA LA VARIABLE EN JSON DEL ESTADO;

    const verifUsuario=async(event)=>{
        event.preventDefault();
        let form= JSON.stringify({
            "usuario": event.target[0].value,
            "contraseña": event.target[1].value
        })
         await fetch('https://api-proyecto-a0km.onrender.com/usuario/login',{
        method: 'POST',
        body:form,
        headers:{
            'Content-Type': 'application/json'
        }})
        .then(res =>{
            console.log(res.status)
            if(res.status === 204){
                alert('Usuario incorrecta')
            }else{
                if(res.status === 401){
                    alert('Contraseña incorrecta')
                }else{
                 navigate('/Main')   
                } 
            }
        })
        .catch(error=>{
            alert('Problemas con el servidor')
        })

    }
    
  return (
    <Fragment>
    <Title text='Bienvenido Pizza Nachito'/>
    <form className='container-fluid cabecera-form' onSubmit={(event)=>{verifUsuario(event)}} method='POST'>
        <div className='col contenedor'>
            <div className='row cabecera-login '>
                <label htmlFor='usuario' className='form-label'>Ingrese su nombre de usuario</label>
                <input className='form-control' type='text' id='usuario' name='usuario' placeholder='Ingrese su nombre de usuario' />
                <label htmlFor='contraseña' className='form-label'>Ingrese su Contraseña</label>
                <input className='form-control' type='password' id='contraseña' name='contraseña' placeholder='Ingrese su Contraseña'/>
                <button type='submit' className='bot-log btn btn-primary'>Login</button>
                <Link to={'/Check'} type='submit' className=''>Check in</Link>
                <Link to={'/FormularioAdm'} type='submit' className=''> Adm</Link>
            </div>
            <div className='row cabecera-img'>
            <img className='pizza' src="../assents/img/pizza.png" alt='imagen-pizza'/>
            </div>
        </div>
    </form>
    <Footer/>
    </Fragment>
  )
};

export default Log;