import Footer from '../Footer/footer';
import Title from '../Log/Title/title';
import React,{Fragment} from 'react';
import Label from '../Log/Label/label';
import Input from '../Log/Input/input';
import './check.css';
const Check = () => {

   
  return (
    <Fragment>
        <Title text='Registrarse'/>
        <div className='cabecera-reg'>
                <Label ingrese='Ingrese su nombre'/>
                <Input
                    atribute={{
                        id:'name',
                        name:'nombre',
                        type:'text',
                        placeholder:'Ingrese su nombre',
                        }}
                />
                <Label ingrese='Ingrese su Apellido'/>
                <Input
                    atribute={{
                        id:'name',
                        name:'apellido',
                        type:'text',
                        placeholder:'Ingrese su Apellido',
                        }}
                />
                <Label ingrese='Ingrese su Nombre de Usuario'/>
                <Input
                    atribute={{
                        id:'name',
                        name:'Usuario',
                        type:'text',
                        placeholder:'Ingrese su Nombre de usuario',
                        }}
                />
                <Label ingrese='Ingrese su contraseña'/>
                <Input
                    atribute={{
                        id:'name',
                        name:'contraseña',
                        type:'password',
                        placeholder:'Ingrese su Contraseña',
                        }}
                />
                <Label ingrese='Confirmar contraseña'/>
                <Input
                    atribute={{
                        id:'name',
                        name:'contraseña',
                        type:'password',
                        placeholder:'Confirmar Contraseña',
                        }}
                />
                <button type='submit' className='bot-log btn btn-primary'>Login</button>
            </div>
        <Footer/>
    </Fragment>
  )
}

export default Check;