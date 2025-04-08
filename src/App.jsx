import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

// Importazione dei componenti per le pagine
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import LaCura from './pages/LaCura';
import Frasi from './pages/Frasi';
import Consulenza from './pages/Consulenza';
import Habitat from './pages/Habitat';
import CinqueSensi from './pages/CinqueSensi';
import Eventi from './pages/Eventi';
import SpazioEspositivo from './pages/SpazioEspositivo';
import Shop from './pages/Shop';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/la-cura" element={<LaCura />} />
            <Route path="/frasi" element={<Frasi />} />
            <Route path="/consulenza" element={<Consulenza />} />
            <Route path="/habitat" element={<Habitat />} />
            <Route path="/5-sensi" element={<CinqueSensi />} />
            <Route path="/eventi" element={<Eventi />} />
            <Route path="/spazio-espositivo" element={<SpazioEspositivo />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
