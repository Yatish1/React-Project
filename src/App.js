import './App.css';
import About from './component/About';
import Home from './component/Home';
import { Route, Routes, } from 'react-router-dom';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testimonial' element={<Testimonial />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
