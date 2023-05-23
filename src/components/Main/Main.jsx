import { Routes, Route } from 'react-router-dom';
import MovieList from '../../pages/MovieList/MovieList';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Actor from '../../pages/Actor/Actor';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import './main.css';
import NotFound from '../NotFound/NotFound';

const Main = () => {
  return (
    // <main>
    <Box component="main" sx={{ px: { sm: 3 }, pt: 3 }}>
      <Toolbar />

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path=":id" element={<MovieDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="actor/:id" element={<Actor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
    // </main>
  );
};

export default Main;
