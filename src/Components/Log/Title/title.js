import React,{Fragment} from 'react';
import './title.css';

const Title = ({text}) => {
  return (
    <Fragment>
        <h2 className='Cabecera-titulo'>
            {text}
        </h2>
    </Fragment>
  )
}

export default Title;