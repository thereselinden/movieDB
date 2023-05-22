import FilterDropDown from '../../components/FilterDropDown/FilterDropDown';
import MovieCard from '../../components//MovieCard/MovieCard';
import useFetch from '../../hooks/useFetch';
import './movieList.css';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MovieList = () => {
  const [filter, setFilter] = useSearchParams({ filter: 'popular' });

  const url = `${import.meta.env.VITE_API_URL}/${filter.get(
    'filter'
  )}?api_key=${import.meta.env.VITE_API_KEY}`;

  // const defaultUrl = `${import.meta.env.VITE_API_URL}/popular?api_key=${
  //   import.meta.env.VITE_API_KEY
  // }`;

  //const [url, setUrl] = useState(defaultUrl);

  const { data: movies, isLoading, errorMessage } = useFetch(url);

  // useCallback för att ta bort eslint in FilterDropDown
  // const handleFilterChange = useCallback(category => {
  //   setUrl(
  //     `${import.meta.env.VITE_API_URL}/${category}?api_key=${
  //       import.meta.env.VITE_API_KEY
  //     }`
  //   );
  // }, []);

  return (
    <div>
      <FilterDropDown filter={filter.get('filter')} setFilter={setFilter} />
      {/* <FilterDropDown handleFilterChange={handleFilterChange} /> */}
      {errorMessage && <p>Something went wrong</p>}
      {isLoading && <p>Loading.....</p>}
      <h3>
        {filter.get('filter') === 'top_rated'
          ? 'Top Rated'
          : filter.get('filter')}
        movies
      </h3>

      <section className="movie-grid">
        {movies &&
          movies.results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </section>
    </div>
  );
};

export default MovieList;
