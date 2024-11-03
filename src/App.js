import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Faculties from './Pages/Faculties/Faculties';
import Home from './Pages/Home/Home';
import Plans from './Pages/Plans/Plans';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
