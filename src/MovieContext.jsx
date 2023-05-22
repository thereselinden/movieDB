import { createContext, useContext, useReducer } from 'react';
import movieReducer, { initialState } from './store/movieReducer';
import { ACTIONS } from './store/action-types';

export const MovieContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  console.log('state Context', state);

  const addToSeen = movie => {
    dispatch({
      type: ACTIONS.ADD_TO_SEEN,
      payload: movie,
    });
  };

  const removeFromSeen = id => {
    const filterMovieArr = state.movies.filter(movie => movie.id !== id);

    dispatch({
      type: ACTIONS.REMOVE_FROM_SEEN,
      payload: filterMovieArr,
    });
  };

  const value = {
    movies: state.movies,
    addToSeen,
    removeFromSeen,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = useContext(MovieContext);

  if (context === undefined) {
    throw new Error('useMovie hook must be used within ShopCOntext');
  }
  return context;
};

export default useMovie;
