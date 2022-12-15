import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import useLocalStorage from 'use-local-storage';
import ToggleButton from './components/ToggleButton/ToggleButton';




//import routes
import Home from './routes/Home/Home';
import Contact from './routes/Contact/Contact';
import Work from './routes/Work/Work';

const App = () => {

  const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'light' : 'dark');

  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      }


  return (
    <div className="main" data-theme={theme}>
      <BrowserRouter>
        <Navigation />
        <ToggleButton 
          toggled={false}
          onClick={switchTheme}  
          label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        />
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='Contact' element={<Contact />} />
            <Route path='work' element={<Work />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
