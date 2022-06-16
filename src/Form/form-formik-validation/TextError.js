import React from 'react'
import '../css/login.css'

const TextError = (props) => {
  return (
    <div className='error'>
      {props.children}
    </div>
  )
}

export default TextError
