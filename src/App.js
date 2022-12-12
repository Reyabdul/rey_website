import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//import routes
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Projects from './routes/Projects/Projects';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
