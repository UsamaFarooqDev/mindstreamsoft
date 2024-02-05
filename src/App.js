import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Getquote from './pages/getquote';
function App() {
  return (
    <div className="App">
          <BrowserRouter>
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/getquote" element={<Getquote />} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
