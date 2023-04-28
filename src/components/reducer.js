import { ADD_LIST, DISCARD_LIST } from "./actions";

const initialState = {
  favMovies: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case DISCARD_LIST:
      const updatedCart = state.favMovies.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, favMovies: updatedCart };
    default:
      return state;
  }
}
