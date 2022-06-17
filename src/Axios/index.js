import axios from 'axios'
import React from 'react'

function Index() {
    const handelClick=()=>{
        axios.get('http://localhost:8000/user1').then((res)=>{
            console.log(res.firstName);
        });
    }
  return (
    <>
      <button onClick={handelClick}>Click Me</button>
    </>
  )
}

export default Index
