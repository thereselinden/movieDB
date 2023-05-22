import { ACTIONS } from './action-types';

export const initialState = {
  movies: [],
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_SEEN:
      return {
        ...state,
        movies: action.payload,
      };
    case ACTIONS.REMOVE_FROM_SEEN:
      return {
        ...state,
        movies: action.payload.id,
      };
    default:
      return state;
  }
};

export default movieReducer;
