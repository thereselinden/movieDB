import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { MovieProvider } from './MovieContext';

import './index.css';

const App = () => {
  return (
    <MovieProvider>
      <Header />
      <Main />
      <Footer />
    </MovieProvider>
  );
};

export default App;
