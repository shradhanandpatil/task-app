import React, { useRef, useState } from 'react';
import '../css/ref.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UseRef() {
   const myName=useRef(null);
   const myPass=useRef(null);
   const [name,setName]=useState(false);
   const [password,setPassword]=useState(false);
   const show=(e)=>{
       e.preventDefault();
        myName.current.value === ""? alert("Enter your UserName"):setName(true)   
        myPass.current.value === ""? alert("Enter your Password"):setPassword(true)  
        if(name === true){
          toast.dark('Log in success ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          } 
    }
  return (
    <>
     <div className="conatiner">
         <form onSubmit={show}>
             <div>
                <label htmlFor="logIn" id='login'>Username / Email :</label>
                <input type="text" id='login'ref={myName} />
            </div>
             <div>
                <label htmlFor="password" id='password'>Password :</label>
                <input type="password" id='password'ref={myPass} />
            </div>
            <button className='btn'>LogIn</button>
         </form>
      </div> 
      <ToastContainer/>
    </>
  )
}
