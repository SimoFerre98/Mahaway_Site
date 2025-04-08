import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-accent">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">MAHAWAY</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-secondary">
            Qualunque situazione, qualunque sound, stile e attitudine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/chi-sono" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all">
              Scopri di più
            </Link>
            <Link to="/shop" className="bg-white text-primary border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all">
              Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Esplora Mahaway</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Chi Sono</h3>
              <p className="text-white/90 mb-4">
                Vittorio, fondatore di Mahaway. Un percorso di trasformazione personale e consapevolezza da condividere.
              </p>
              <Link to="/chi-sono" className="text-white font-medium hover:underline">Scopri di più →</Link>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-white">La Cura</h3>
              <p className="text-white/90 mb-4">
                Non in vista di un malessere futuro ma volta alla prevenzione, al buon senso, diventando prima di ogni altro dottori di noi stessi.
              </p>
              <Link to="/la-cura" className="text-white font-medium hover:underline">Scopri di più →</Link>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Habitat</h3>
              <p className="text-white/90 mb-4">
                Ciò che ci circonda diventa la nostra casa, la nostra scelta. Scegliendo con cura e attenzione.
              </p>
              <Link to="/habitat" className="text-white font-medium hover:underline">Scopri di più →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <blockquote className="text-2xl md:text-3xl italic mb-6">
            "Il senso della vita risiede solo nella libertà ed è solo nella libertà che la vita diventa comprensibile."
          </blockquote>
          <p className="text-lg">— Mahaway</p>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-primary">Shop</h2>
            <Link to="/shop" className="text-primary font-medium hover:underline">Vedi tutti →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Product placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square bg-accent mb-3 rounded-md overflow-hidden group-hover:opacity-90 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center text-secondary">
                    <span>Immagine Prodotto</span>
                  </div>
                </div>
                <h3 className="font-medium text-primary">T-Shirt Mahaway</h3>
                <p className="text-secondary">€29.99</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 px-6 bg-accent">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-primary">Eventi</h2>
            <Link to="/eventi" className="text-primary font-medium hover:underline">Tutti gli eventi →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary font-bold mb-2">12 Maggio 2025</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Live Showcase</h3>
              <p className="text-secondary mb-4">Presentazione del concept album "Diplomatic Rap" con performance live.</p>
              <Link to="/eventi" className="text-primary font-medium hover:underline">Dettagli →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary font-bold mb-2">24 Giugno 2025</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Workshop</h3>
              <p className="text-secondary mb-4">Esplorazione dei 5 sensi e come influenzano la nostra percezione della realtà.</p>
              <Link to="/eventi" className="text-primary font-medium hover:underline">Dettagli →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary font-bold mb-2">10 Luglio 2025</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Podcast Live</h3>
              <p className="text-secondary mb-4">Registrazione dal vivo del podcast Mahaway con ospiti speciali.</p>
              <Link to="/eventi" className="text-primary font-medium hover:underline">Dettagli →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;