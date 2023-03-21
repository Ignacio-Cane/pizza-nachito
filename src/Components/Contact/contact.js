import Footer from '../Footer/footer'
import Nav from '../Nav/nav'
import './contact.css'
import React,{Fragment} from 'react'




const Contact = () => {
  return (
    <Fragment>
        <Nav/>
        <section className='container-fluid Cabecera-section'>
            <div className='row Cabecera-caja'>
                <div className='col-12 Cabecera-info'>
                    <h3>Ubicacion del Local</h3>
                    <iframe className='Cabecera-mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53762.346289969!2d-62.743301232874224!3d-32.6289181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cbfb0b534e7eed%3A0x4d9e0bef6c9fbfd4!2zTsOhcG9sZXMgcGl6emVyw61h!5e0!3m2!1ses!2sar!4v1678803879907!5m2!1ses!2sar"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col Cabecera-contacto'>
                    <h3>Contacto</h3>
                    <a className='btn btn-primary' href=''>LLAMAR AHORA</a>
                    <p>0351-15635129</p>
                </div>
                <div className='col Cabecera-horario'>
                    <h3>Horario</h3>
                    <ul className='cab-ul'>
                        <li className='cab-lis'>Lunes:20:00hs a 23:30hs</li>
                        <li className='cab-lis'>Martes:20:00hs a 23:30hs</li>
                        <li className='cab-lis'>Miercoles:20:00hs a 23:30hs</li>
                        <li className='cab-lis'>Jueves:20:00hs a 23:30hs</li>
                        <li className='cab-lis'>Viernes:20:00hs a 23:30hs</li>
                        <li className='cab-lis'>Sabado:20:00hs a 23:30hs</li>
                        <li className='cab-lis'>Domingo:20:00hs a 23:30hs</li>
                    </ul>
                </div>

            </div>
        </section>
        <Footer/>
    </Fragment>)
}

export default Contact