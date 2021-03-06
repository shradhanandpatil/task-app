import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextFile from './TextFile'
import { toast, ToastContainer } from 'react-toastify'
import '../css/formik.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

const userName=localStorage.getItem('email') 
const userPassword=localStorage.getItem('password') 
function LogIn() {
    const navigate=useNavigate();
    const handleSubmit=(values)=>{
        localStorage.setItem('userEmail',JSON.stringify(values.email))
        localStorage.setItem('userPassword',JSON.stringify(values.password))
        const email=localStorage.getItem('userEmail');
        const pass=localStorage.getItem('userPassword');
        console.log(email,pass);
        console.log(userName,userPassword);
        if(email === userName && pass === userPassword ) 
        {
          toast.success('login success ', {
            position: "top-center",
            autoClose: 700,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            localStorage.setItem('login',true);
            navigate('/dashboard')
          }
          else
          {
            toast.warn('wrong Email and Password ', {
                position: "top-center",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
          }
      }

    const validation=Yup.object({
        email: Yup.string()
        .email('Email is invalied')
        .required('Required'),
    
        password: Yup.string()
        .min(6,'Must be 6 characters')
        .required('Required'),
      })
    const initialValues={
        email:'',
        password:'',
      }
    
  return (
    <>
    <Navbar/>
      <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={values=>handleSubmit(values)}
        >
        <Form>
            <div className='container'>
              <h1>Log In</h1>
              <TextFile label='email' name='email' type='Email' />
              <TextFile label='password' name='password' type='password' />
              <button type='submit' className='btn-black'>LogIn</button><br></br>
              <span>Create an account </span><NavLink to='/formik'>SignUp</NavLink>
            </div>
        </Form>
      </Formik>
      <ToastContainer/>
    </>
  )
}

export default LogIn
