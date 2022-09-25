import {
  GETPRODUCT_ERROR,
  GETPRODUCT_LOADING,
  GETPRODUCT_SUCCESS,
} from "./action-type";

export const productState = {
  loading: false,
  error: false,
  detailproduct: {},
};

export const getProductDatareducer = (
  state = productState,
  { type, payload }
) => {
  switch (type) {
    case GETPRODUCT_LOADING: {
      return { ...productState, loading: true, error: false };
    }
    case GETPRODUCT_SUCCESS: {
      return {
        ...productState,
        loading: false,
        error: false,
        detailproduct: payload,
      };
    }
    case GETPRODUCT_ERROR: {
      return { ...productState, error: true, loading: false };
    }
    default: {
      return state;
    }
  }
};
