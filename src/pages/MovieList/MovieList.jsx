import FilterDropDown from '../../components/FilterDropDown/FilterDropDown';
import MovieCard from '../../components//MovieCard/MovieCard';
import useFetch from '../../hooks/useFetch';

const MovieList = () => {
  const baseUrl = `${import.meta.env.VITE_API_URL}/popular?`;
  const api_key = `api_key=${import.meta.env.VITE_API_KEY}`;
  const url = baseUrl + api_key;

  const { data: movies, isLoading, errorMessage } = useFetch(url);

  return (
    <div>
      <FilterDropDown />
      {errorMessage && <p>Something went wrong</p>}
      {isLoading && <p>Loading.....</p>}
      {movies && <MovieCard movies={movies} />}
    </div>
  );
};

export default MovieList;
