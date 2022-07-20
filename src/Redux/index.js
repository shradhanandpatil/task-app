import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { add, remove } from './Action/action';
export default function Index() {
  const counter = useSelector(state => state.counter);
  const dispatch=useDispatch();
  return (
    <>
     <span> <button onClick={()=>{dispatch(add())}}> + </button></span> <span> {counter} </span> <span><button onClick={()=>{dispatch(remove())}}> - </button></span>
    </>
  )
}
