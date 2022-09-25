import axios from "axios";
import {
  DELETE_PRODUCT,
  FILTER_PRODUCTS_BY_CATEGOIRES,
  GETCATEGORIES_ERROR,
  GETCATEGORIES_LOADING,
  GETCATEGORIES_SUCCESS,
  GETPRODUCTS_ERROR,
  GETPRODUCTS_LOADING,
  GETPRODUCTS_SUCCESS,
} from "./home-action-type";

export const getproductsdata = () => (dispatch) => {
  dispatch({ type: GETPRODUCTS_LOADING });
  dispatch({ type: GETCATEGORIES_LOADING });
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaW5pa2FydGlrODJAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0thcnRpa3NhaW5pODgiLCJpYXQiOjE2NjM5NTEzODgsImV4cCI6MTY2NDM4MzM4OH0.BxOKt88vdVdqVETuEVPJ4Mg3GRfNNvbibOeB_nkpxHo`;
  const productsdata = {
    method: "GET",
    url: "https://upayments-studycase-api.herokuapp.com/api/products",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
  };

  const getcategories = {
    method: "GET",
    url: "https://upayments-studycase-api.herokuapp.com/api/categories/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(productsdata)
    .then((res) => {
      return dispatch({
        type: GETPRODUCTS_SUCCESS,
        payload: res.data.products,
      });
    })
    .catch((error) => {
      dispatch({ type: GETPRODUCTS_ERROR });
    });

  axios
    .request(getcategories)
    .then((res) => {
      return dispatch({
        type: GETCATEGORIES_SUCCESS,
        payload: res.data.categories,
      });
    })
    .catch((error) => {
      dispatch({ type: GETCATEGORIES_ERROR });
    });
};

export const deleteproduct = (by) => (dispatch)=>{
  return dispatch({
    type:DELETE_PRODUCT,
    payload:by
  })
}


