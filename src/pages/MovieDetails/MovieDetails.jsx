import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import MarkAsSeenBtn from '../../components/MarkAsSeenBtn/MarkAsSeenBtn';
import useFetch from '../../hooks/useFetch';
import MovieActors from './MovieActors/MovieActors';
import { minutesToHours, roundToOneDec } from '../../utils/helpers';
import './movieDetails.css';
import useMovie from '../../MovieContext';

const MovieDetails = () => {
  let { id } = useParams();
  const [seenMovies, setSeenMovies] = useState(false);
  const { movies, addToSeen, removeFromSeen } = useMovie();

  const baseUrl = `${import.meta.env.VITE_API_URL}/${id}?`;
  const api_key = `api_key=${import.meta.env.VITE_API_KEY}`;
  const url = baseUrl + api_key + '&append_to_response=credits';

  const { data: movie, isLoading, errorMessage } = useFetch(url);

  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const posterImgUrl = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    // leta i movies arr från context kolla först att vi fått tillbaka movie från fetch
    if (movie && movies.length > 0) {
      const hasSeenMovie = movies.find(seenMovie => seenMovie.id === movie.id);
      if (hasSeenMovie) {
        setSeenMovies(true);
      } else {
        setSeenMovies(false);
      }
    }
  }, [movie, movies, movies.length]);

  const handleSeenMovieClick = () => {
    if (seenMovies) {
      removeFromSeen(movie.id);
    } else {
      addToSeen(movie);
    }
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Something went wrong</p>}
      {movie && (
        <>
          <section
            className="movie-wrapper"
            style={{ '--img': `url(${imgUrl}${movie.backdrop_path})` }}
          >
            <div className="content-wrapper">
              <img
                src={`${posterImgUrl}${movie.poster_path}`}
                alt={`${movie.title} poster image`}
              />
              <div className="content-container">
                <div className="content-top">
                  <h1>
                    {movie.title} ({movie.release_date.slice(0, 4)})
                  </h1>
                  <div>
                    <p>
                      {movie.release_date} (
                      {movie.original_language.toUpperCase()})
                    </p>
                    <div className="genre-buttons">
                      {movie.genres.map(genre => (
                        <button key={genre.id}>{genre.name}</button>
                      ))}
                    </div>
                    <p>{minutesToHours(movie.runtime)}</p>
                  </div>
                </div>
                <div className="content-middle">
                  <p>
                    <AiFillStar />
                    <span>{roundToOneDec(movie.vote_average)}</span>/10
                  </p>
                  <MarkAsSeenBtn handleSeenMovie={handleSeenMovieClick} />
                </div>
                <div className="content-bottom">
                  <h2>Overview</h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </section>
          <MovieActors cast={movie.credits.cast} />
        </>
      )}
    </>
  );
};

export default MovieDetails;
