import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ActorCard from './ActorCard/ActorCard';

const Actor = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  const { data: actor, isLoading, errorMessage } = useFetch(url);
  return (
    <>
      {errorMessage && <p>Something went wrong</p>}
      {isLoading && <p>Loading....</p>}
      {actor && <ActorCard actor={actor} />}
    </>
  );
};

export default Actor;
