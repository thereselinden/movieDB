import MovieList from '../../pages/MovieList/MovieList';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

import './main.css';

const Main = () => {
  return (
    <main>
      <MovieList />
      <MovieDetails />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
