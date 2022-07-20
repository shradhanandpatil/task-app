import { INCREMENT } from "../Action/actionType";
import { DECREMENT } from "../Action/actionType";

const initialState=1000;
export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return state= state + 100 ;
        case DECREMENT:
            return state = state - 100;
        default:
            return state;
    }
} 