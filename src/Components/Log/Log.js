import React,{Fragment,useState} from 'react';
import Title from '../Log/Title/title';
import Label from './Label/label';
import Input from './Input/input';
import './Log.css';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';


const Log = () => {

    const [datos, setDatos] = useState({
        nombre_de_usuario:'',
        contraseña:''
    });

    const handleChange=(event)=>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        }) 
    };
 

  return (
    <Fragment>
    <Title text='Bienvenido Pizza Nachito'/>
    <form className='container-fluid cabecera-form'>
        <div className='col contenedor'>
            <div className='row cabecera-login '>
                <Label ingrese='Ingrese su nombre de usuario'/>
                <Input
                    atribute={{
                        id:'name',
                        name:'nombre_de_usuario',
                        type:'text',
                        placeholder:'Ingrese su nombre de usuario',
                        }}
                        handleChange= {handleChange}
                />
                <Label ingrese='Ingrese su contraseña'/>
                <Input
                    atribute={{
                        id:'name',
                        name:'contraseña',
                        type:'password',
                        placeholder:'Ingrese su Contraseña',
                        }}
                        handleChange= {handleChange}
                />
                <Link to={'/Main'} type='submit' className='bot-log btn btn-primary'>Login</Link>
                <Link to={'/Check'} type='submit' className=''>Check in</Link>
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