import FilterDropDown from '../FilterDropDown/FilterDropDown';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <FilterDropDown />
      <MovieCard />
    </div>
  );
};

export default MovieList;
