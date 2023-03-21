import React from 'react'

const Input = ({atribute,handleChange}) => {
  return (
    <input required
    id={atribute.id}
    name={atribute.name}
    placeholder={atribute.placeholder}
    type={atribute.type}
    onChange={(e)=> handleChange(e.target.name, e.target.value)}
    className='form-control'
    />
  )
}

export default Input;