import React from 'react'
import "../css/formik.css"

const TextError = (props) => {
  return (
    <div className='error'>
      {props.children}
    </div>
  )
}

export default TextError
