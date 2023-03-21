import './footer.css'
import React,{Fragment}from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className='container-fluid cabecera-foot'>
        <div className='row cabecera-div'>
          <p class="col-6 text-center">Copyright &copy; 2023<span> Ignacio. </span>All Rights Reserved</p>
          <p class="col-6 text-center">Designed by <span> IGNACIO CANE</span></p>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;