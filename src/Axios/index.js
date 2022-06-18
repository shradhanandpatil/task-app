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
         const res= await axios.post('http://localhost:8000/userInfo',{
              "firstName":"mayur",
              "lastName":"patil"
           })
         console.log(res);
        //  console.log(res.data[0].lastName);
        }catch(error){
            console.log(error);
        }
    }
     
    // const handelPost= async()=>{
    //   const res= await axios.post('http://localhost:8000/userInfo',{
    //     "firstName":"mayur",
    //     "lastName":"patil"
    //   }).then((res)=>{
    //     console.log(res.data);
    //   })
    // }

  return (
    <>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelAsync}>async button</button>
      {/* <button onClick={handelPost}>Post</button> */}
    </>
  )
}

export default Index
