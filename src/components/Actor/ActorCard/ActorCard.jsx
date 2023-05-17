import { BsArrowLeftCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import actorDefaultImg from '../../../assets/profile.jpg';
import './actorCard.css';

const ActorCard = ({ actor }) => {
  let actorUrl = 'https://image.tmdb.org/t/p/w185';
  const navigate = useNavigate();

  return (
    <>
      <section className="actor-container">
        <BsArrowLeftCircle onClick={() => navigate(-1)} />
        <div className="actor-content">
          <img
            src={
              actor.profile_path
                ? actorUrl + actor.profile_path
                : actorDefaultImg
            }
            alt={`${actor.name} profile image`}
          />
          <div>
            <h1>{actor.name}</h1>
            <p>{actor.biography}</p>
            <p>Birth: {actor.birthday}</p>
            <p>Death: {actor.deathday}</p>
            <p>Place of Birth: {actor.place_of_birth}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActorCard;
