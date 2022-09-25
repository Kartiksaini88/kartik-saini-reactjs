import { store } from "../store";
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

export const productState = {
  loading: false,
  error: false,
  products: [],
};

export const categoriesState = {
  loading: false,
  error: false,
  categories: [],
};

export const getproductsdatareducer = (
  state = productState,
  { type, payload }
) => {
  switch (type) {
    case GETPRODUCTS_LOADING: {
      return { ...productState, loading: true, error: false };
    }
    case GETPRODUCTS_SUCCESS: {
      return {
        ...productState,
        products: payload,
        loading: false,
        error: false,
      };
    }
    case GETPRODUCTS_ERROR: {
      return { ...productState, error: true, loading: false };
    }

    case DELETE_PRODUCT: {
      return {
        ...productState,
        products: state.products.filter((e) => e._id !== payload),
      };
    }

    default: {
      return state;
    }
  }
};

export const getcategoiresreducer = (
  state = categoriesState,
  { type, payload }
) => {
  switch (type) {
    case GETCATEGORIES_LOADING: {
      return { ...categoriesState, loading: true, error: false };
    }
    case GETCATEGORIES_SUCCESS: {
      return {
        ...categoriesState,
        categories: payload,
        loading: false,
        error: false,
      };
    }
    case GETCATEGORIES_ERROR: {
      return { ...categoriesState, error: true, loading: false };
    }
    default: {
      return state;
    }
  }
};
