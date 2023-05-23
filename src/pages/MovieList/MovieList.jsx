import FilterDropDown from '../../components/FilterDropDown/FilterDropDown';
import MovieCard from '../../components//MovieCard/MovieCard';
import useFetch from '../../hooks/useFetch';
//import './movieList.css';
import { useSearchParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';

const MovieList = () => {
  const [filter, setFilter] = useSearchParams({ filter: 'popular' });

  const url = `${import.meta.env.VITE_API_URL}/${filter.get(
    'filter'
  )}?api_key=${import.meta.env.VITE_API_KEY}`;

  const { data: movies, isLoading, errorMessage } = useFetch(url);

  return (
    <>
      <FilterDropDown filter={filter.get('filter')} setFilter={setFilter} />
      {errorMessage && <p>Something went wrong</p>}
      {isLoading && <p>Loading.....</p>}
      <Grid container sx={{ pt: 3 }}>
        {movies &&
          movies.results.map(movie => (
            <Grid item xs={6} sm={4} md={3} key={movie.id} component="article">
              <MovieCard movie={movie} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default MovieList;
