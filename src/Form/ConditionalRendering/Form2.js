import React,{useState} from 'react'
// import Form from './Form'
import Form from './Form';
export default function Form2() {
    let [form,setForm]=useState(false);
    const show=()=>{
        setForm(!form);
    }
  return (
    <>
        <div style={{textAlign:"center"}}>
            <button onClick={show} style={{background:"purple",color:"white",padding:'1rem 2rem'}}>Show Form</button>
                {
                    form && <Form/> 
                }
        </div>
    </>
  )
}
