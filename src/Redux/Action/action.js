import { INCREMENT, DECREMENT } from "./actionType";

export const add = (data) => {
  return {
    type: INCREMENT,
    data: data,
  };
};

export const remove = (data) => {
  return {
    type: DECREMENT,
    data: data,
  };
};
