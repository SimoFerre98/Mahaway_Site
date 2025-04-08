import { Link } from 'react-router-dom';
import VittorioProfile from '../assets/Images/VittorioProfile.jpg';
import Maglietta1 from '../assets/Images/Maglietta1.jpg';
import Maglietta2 from '../assets/Images/Maglietta2.jpg';
import Maglietta3 from '../assets/Images/Maglietta3.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Bento Grid Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hero Section - Spans 2 columns */}
          <div className="glass-card md:col-span-2 p-8 animate-fadeIn border border-primary">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-dark-brown">MAHAWAY</h1>
            <p className="text-xl md:text-2xl mb-6 text-golden-brown">
              Qualunque situazione, qualunque sound, stile e attitudine.
            </p>
            <div className="flex gap-4">
              <Link to="/chi-sono" className="bg-dark-brown text-white px-6 py-3 rounded-md hover:bg-golden-brown transition-all">
                Scopri di più
              </Link>
              <Link to="/shop" className="bg-white text-dark-brown border border-dark-brown px-6 py-3 rounded-md hover:bg-golden-light hover:text-white transition-all">
                Shop
              </Link>
            </div>
          </div>

          {/* Vittorio Profile */}
          <div className="glass-card p-6 animate-slideUp border border-primary">
            <img src={VittorioProfile} alt="Vittorio - Fondatore di Mahaway" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-3 text-dark-brown">Chi Sono</h3>
            <p className="text-golden-brown mb-4">
              Vittorio, fondatore di Mahaway. Un percorso di trasformazione personale e consapevolezza.
            </p>
            <Link to="/chi-sono" className="text-dark-brown font-medium hover:text-golden-brown">Scopri di più →</Link>
          </div>

          {/* La Cura Section */}
          <div className="glass-card p-6 animate-slideUp border border-primary">
            <h3 className="text-xl font-bold mb-3 text-dark-brown">La Cura</h3>
            <p className="text-golden-brown mb-4">
              Non in vista di un malessere futuro ma volta alla prevenzione, diventando prima di ogni altro dottori di noi stessi.
            </p>
            <Link to="/la-cura" className="text-dark-brown font-medium hover:text-golden-brown">Scopri di più →</Link>
          </div>

          {/* Shop Preview - Spans 2 columns */}
          <div className="glass-card md:col-span-2 p-6 animate-slideUp border border-primary">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark-brown">Shop</h2>
              <Link to="/shop" className="text-golden-brown font-medium hover:underline">Vedi tutti →</Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src={Maglietta1} alt="T-Shirt Mahaway 1" className="w-full h-32 object-cover rounded-lg hover:opacity-90 transition-all" />
              <img src={Maglietta2} alt="T-Shirt Mahaway 2" className="w-full h-32 object-cover rounded-lg hover:opacity-90 transition-all" />
              <img src={Maglietta3} alt="T-Shirt Mahaway 3" className="w-full h-32 object-cover rounded-lg hover:opacity-90 transition-all" />
            </div>
          </div>

          {/* Quote Section */}
          <div className="glass-card p-6 animate-slideUp border border-primary">
            <blockquote className="text-xl italic mb-4 text-dark-brown">
              "Il senso della vita risiede solo nella libertà ed è solo nella libertà che la vita diventa comprensibile."
            </blockquote>
            <p className="text-golden-brown text-right">— Mahaway</p>
          </div>

          {/* Habitat Section */}
          <div className="glass-card md:col-span-3 p-8 animate-slideUp border border-primary">
            <h2 className="text-3xl font-bold mb-6 text-dark-brown">Habitat</h2>
            <p className="text-xl text-golden-brown mb-6">
              Ciò che ci circonda diventa la nostra casa, la nostra scelta. Scegliendo con cura e attenzione.
            </p>
            <Link to="/habitat" className="bg-dark-brown text-white px-6 py-3 rounded-md hover:bg-golden-brown transition-all inline-block">
              Esplora l'Habitat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;