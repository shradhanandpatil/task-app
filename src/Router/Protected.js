import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
    const navigate=useNavigate();
    const  {Component}=props
    useEffect(()=>{
        const auth=localStorage.getItem('login');
        if(!auth){
            navigate('/login');
        }
    })
  return (
    <>
    <Component/>
    </>
  )
}
