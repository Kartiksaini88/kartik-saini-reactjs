import { ADD_TO_FAV } from "./action-type";

export const favstate = {
  favitems: [],
};

export const favreducer = (state = favstate, { type, payload }) => {
  switch (type) {
    case ADD_TO_FAV: {
      return { ...favstate, favitems: [...state.favitems, payload] };
    }
    default: {
      return state;
    }
  }
};
