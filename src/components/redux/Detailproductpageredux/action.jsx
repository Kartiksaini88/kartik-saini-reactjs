import axios from "axios";
import {
  GETPRODUCT_ERROR,
  GETPRODUCT_LOADING,
  GETPRODUCT_SUCCESS,
} from "./action-type";

export const getProductData = (id) => (dispatch) => {
  dispatch({ type: GETPRODUCT_LOADING });
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaW5pa2FydGlrODJAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0thcnRpa3NhaW5pODgiLCJpYXQiOjE2NjM5NTEzODgsImV4cCI6MTY2NDM4MzM4OH0.BxOKt88vdVdqVETuEVPJ4Mg3GRfNNvbibOeB_nkpxHo`;
  const productdata = {
    method: "GET",
    url: `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(productdata)
    .then((res) => {
      return dispatch({ type: GETPRODUCT_SUCCESS, payload: res.data.product });
    })
    .catch((error) => {
      // dispatch({type:GETPRODUCT_ERROR})
      console.log(error);
    });
};
