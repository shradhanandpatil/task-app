import { INCREMENT } from "./actionType";
import { DECREMENT } from "./actionType";

export const add=(data)=>{
  return(dispatch)=>{
    dispatch({
        type:INCREMENT,
        data:data
    })
  }
}

export const remove=(data)=>{
  return(dispatch)=>{
    dispatch({
        type:DECREMENT,
        data:data
    })
  }
}