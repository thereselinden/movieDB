import logo from '../../assets/view.png';
import './myMovies.css';

const MyMovies = () => {
  return (
    <div className="seen-info">
      <img src={logo} alt="Eye logo" />
      <p>0</p>
    </div>
  );
};

export default MyMovies;
