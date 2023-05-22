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
          <div className="actor-info">
            <h1>{actor.name}</h1>
            <p className="actor-bio">{actor.biography}</p>
            <p className="actor-birth">
              <span>Birth:</span> {actor.birthday}
            </p>
            <p className="actor-death">
              <span>Death:</span> {actor.deathday}
            </p>
            <p className="actor-place-birth">
              <span>Place of Birth:</span> {actor.place_of_birth}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActorCard;
