import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports'
import { add, remove } from '../Action/action';
export default function Index() {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  return (
    <>
    <div style={{position:"absolute",top:"50%",left:"50%",transform: "translate(-50%,-50%)"}}>
     <button onClick={()=>{dispatch(add())}}> + </button>
      <span style={{margin:'1rem'}}> My Bank Balance (<span>{counter}</span>)</span>
     <button onClick={()=>{dispatch(remove())}}> - </button>
    </div>
    </>
  )
}
