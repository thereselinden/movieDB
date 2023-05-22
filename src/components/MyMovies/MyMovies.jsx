import { BsEye } from 'react-icons/bs';
import { CiCircleRemove } from 'react-icons/ci';
import './myMovies.css';
import useMovie from '../../MovieContext';
import { useState } from 'react';

const MyMovies = () => {
  const [showList, setShowList] = useState(false);
  const { movies, removeFromSeen } = useMovie();
  const imgUrl = 'https://image.tmdb.org/t/p/w92/';

  const handleMyMovieList = () => {
    setShowList(!showList);
  };

  return (
    <>
      <div
        className="my-movies"
        onMouseEnter={handleMyMovieList}
        onMouseLeave={handleMyMovieList}
      >
        <BsEye onClick={handleMyMovieList} />
        <p>{movies.length}</p>
        <ul
          className={`seen-movies-list ${
            (!showList || movies.length < 1) && 'hide-movie-list'
          }`}
        >
          {movies.map(movie => (
            <li key={movie.id}>
              <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
              {movie.title}

              <CiCircleRemove onClick={() => removeFromSeen(movie.id)} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyMovies;
