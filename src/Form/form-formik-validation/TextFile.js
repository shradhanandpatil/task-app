import { ErrorMessage, useField } from 'formik'
import React from 'react'
import '../css/login.css'
import TextError from './TextError'

function TextFile({label , ...props}) {
  const [field]=useField(props)
  return (
    <>
        <div>
          
          <label htmlFor={field.name}>{label}</label><br />
          <input
              {...field} {...props}
              autoComplete='off'
           ></input>
          <ErrorMessage  name={field.name} component={TextError} />
        </div>
    </>
  )
}

export default TextFile
