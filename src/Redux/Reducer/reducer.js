import { INCREMENT } from "../Action/actionType";
import { DECREMENT } from "../Action/actionType";

const initialState=0;
export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return state= state + 1 ;
        case DECREMENT:
            return state = state - 1;
        default:
            return state;
    }
} 