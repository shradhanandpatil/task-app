import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../css/formik.css'

function LoginForm() {

    const validation=Yup.object({
        email: Yup.string()
        .email('Email is invalied')
        .required('Required'),
    
        password: Yup.string()
        .min(6,'Must be 6 characters')
        .required('Required'),
      })
    
  return (
    <>
      <h1>Signup</h1>
     <Formik
         const initialValues={{
            email:'',
            password:'',
         }}
       validationSchema={validation}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="email" type="email" />
           {errors.email && touched.email ? (<div>{errors.email}</div>
           ) : null}
           <Field name="password" type="password" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
         </Form>
       )}
     </Formik> 
    </>
  )
}

export default LoginForm
