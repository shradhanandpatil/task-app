import axios from 'axios'
import React from 'react'

function Index() {
    const handelClick=()=>{
        axios.get('http://localhost:8000/userInfo').then((res)=>{
            console.log(res.data[0].firstName);
            console.log(res.data[0].lastName);
        }).catch((error)=>{
          console.log(error);
        });
    }

    const handelAsync=async()=>{
      try{
      const res= await axios.get('http://localhost:8000/userInfo')
      const {data}=res;
      const [{firstName,lastName}]=data
      console.log(firstName);
      console.log(lastName);
      }catch(error){
        console.log(error);
      }
    }
     
    const handelPost= async()=>{
      try{
       const data={
          "firstName":"mayur",
          "lastName":"patil"
        }
      const res=await axios.post('http://localhost:8000/userInfo',data)
      console.log(res);
    }catch(err){
      console.log(err);
    }}

  return (
    <>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelAsync}>async button</button>
      <button onClick={handelPost}>Post</button>
    </>
  )
}

export default Index
