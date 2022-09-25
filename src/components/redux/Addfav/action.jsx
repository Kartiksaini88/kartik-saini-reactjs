import { ADD_TO_FAV } from "./action-type";

export const addtofav = (data) => (dispatch) => {
  return dispatch({
    type: ADD_TO_FAV,
    payload: data,
  });
};
