import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MarkAsSeenBtn from '../MarkAsSeenBtn/MarkAsSeenBtn';
import './moviecard.css';

const MovieCard = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <article>
      <Link to={movie.id.toString()}>
        <img src={imgUrl + movie.poster_path} alt={movie.title} />
        <div>
          <h3>{movie.title}</h3>
          <p>
            <AiTwotoneStar /> <span>{movie.vote_average}</span>
          </p>
          <MarkAsSeenBtn />
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
