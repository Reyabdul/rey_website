import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import useLocalStorage from 'use-local-storage';
import ToggleButton from './components/ToggleButton/ToggleButton';




//import routes
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Skills from './routes/Skills/Skills';
import Contact from './routes/Contact/Contact';
import Works from './routes/Works/Works';
import Qualifications from './components/Qualifications/Qualifications';
import BackToTop from './components/BackToTop/BackToTop';

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

{/*
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='Contact' element={<Contact />} />
            <Route path='works' element={<Works />} />
          </Routes>
*/}
          <main className='main'>
            <Home />
            <About />
            <Skills />
            {/*<Qualifications />*/}
            <Works />
            <Contact />
          </main>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
