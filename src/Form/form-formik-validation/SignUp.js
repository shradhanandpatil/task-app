import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import TextFile from './TextFile'
import '../css/formik.css'
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate= useNavigate();
  const handleSubmit=(values)=>{
    localStorage.setItem('firstName',JSON.stringify(values.firstname))
    localStorage.setItem('lastname',JSON.stringify(values.lastname))
    localStorage.setItem('email',JSON.stringify(values.email))
    localStorage.setItem('password',JSON.stringify(values.password))
    localStorage.setItem('confirmPassword',JSON.stringify(values.confirmPassword))
    if(values){
      toast.success('SignUp success ', {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        navigate('/login');
      }
  }

  const handeReset=()=>{
    toast.success('Form Reset ', {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const validation=Yup.object({
    firstname: Yup.string()
    .max(15,'Must be 15 characters or less')
    .min(2,'Must be more than 2 characters')
    .required('Requried'),

    lastname: Yup.string()
    .max(20,'Must be 15 characters or less')
    .min(2,'Must be more than 2 characters')
    .required('Requried'),

    email: Yup.string()
    .email('Email is invalied')
    .required('Required'),

    password: Yup.string()
    .min(6,'Must be 6 characters')
    .required('Required'),

    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),null],'password and confirm password is not match')
    .required('Required'),
  })

  const initialValues={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmPassword:''
  }

  
  return (
    <>
      <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={values=>handleSubmit(values)}
        >
        <Form>
            <div className='container'>
              <h1>SignUp</h1>
              <TextFile label='firstname' name='firstname' type='text' />
              <TextFile label='Lastname' name='lastname' type='text' />
              <TextFile label='Email' name='email' type='email' />
              <TextFile label='Password' name='password' type='password' />
              <TextFile label='Confirm Password' name='confirmPassword' type='password' />
              <button type='submit' className='btn-black'>SignUp</button>
              <button type='reset' onClick={handeReset}  className='btn-red'>Reset</button>
              <p>I have already account <NavLink to="/login">Login</NavLink></p>
            </div>
        </Form>
      </Formik>
    <ToastContainer/> 
    </>
  )
}

export default SignUp
