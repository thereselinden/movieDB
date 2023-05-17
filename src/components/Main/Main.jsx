import { Routes, Route } from 'react-router-dom';
import MovieList from '../../pages/MovieList/MovieList';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Actor from '../Actor/Actor';

import './main.css';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path=":id" element={<MovieDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="actor/:id" element={<Actor />} />
      </Routes>
    </main>
  );
};

export default Main;
