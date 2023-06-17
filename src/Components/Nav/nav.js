import { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
//import Burguerbuttom from './burguerbuttom';




const Nav = () => {
  const[menu, setMenu]= useState(false);

  const onChange=()=>{
    setMenu(!menu )
  }

  return (
    <header className='Cabecera-header container-fluid'>
      <div className='row Cabecera-div'>
      <h1 className='cabecera-h1 col'> Pizzeria Nachito </h1>
      <button onClick={onChange} className='Cabecera-button col btn' >
          <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
      </button>
      <nav className={ `col Cabecera-nav ${ menu ? 'isActive' : '' }` }>
          <ul className='Cabecera-ul'>
            <Link to={'/Main'} className='Cabecera-li'>Menu</Link>
            <Link to={'/Contact'}  className='Cabecera-li'>Contacto</Link>
            <Link to={'/'}  className='Cabecera-li'>Log</Link>
          </ul>
      </nav>
      </div>
    </header>  
  )
}

  

export default Nav;