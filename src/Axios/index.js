import axios from 'axios'
import React from 'react'

function Index() {
    const handelClick=()=>{
        axios.get('http://localhost:8000/userInfo').then((res)=>{
            console.log(res.data[0].firstName);
            console.log(res.data[0].lastName);
        });
    }

    const handelAsync=async()=>{
        try{
         const res= await axios.get('http://localhost:8000/userInfo')
         console.log(res.data[0].firstName);
         console.log(res.data[0].lastName);
        }catch(error){
            console.log(error);
        }
    }

  return (
    <>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelAsync}>async button</button>
    </>
  )
}

export default Index
