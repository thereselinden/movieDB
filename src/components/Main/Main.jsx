import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

import './main.css';

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <MovieList />
      <MovieDetails />
      <About />
      <Contact />
    </div>
  );
};

export default Main;
