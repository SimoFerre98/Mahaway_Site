import React, { useState, useEffect } from 'react';

const Eventi = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen py-16 px-6 bg-white ${isLoaded ? 'animate-fadeIn' : ''}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Elementi decorativi di sfondo */}
        <div className="fixed top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full blur-xl"></div>
        <div className="fixed bottom-20 right-10 w-40 h-40 bg-highlight opacity-5 rounded-full blur-xl"></div>
        <div className="fixed top-1/2 left-1/4 w-24 h-24 bg-info opacity-5 rounded-full blur-xl"></div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center relative inline-block">
          <span className="relative z-10">Eventi</span>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-highlight opacity-30 z-0 rounded-full"></div>
        </h1>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Citazione - Span 2 columns */}
          <div className="glass-card md:col-span-2 p-8 animate-slideUp border border-primary">
            <p className="text-xl md:text-2xl italic text-dark-brown">
              "La condivisione delle esperienze è il fondamento della crescita collettiva."
            </p>
            <p className="text-golden-brown mt-4">
              In Mahaway, crediamo nel potere degli eventi come catalizzatori di connessioni autentiche e crescita personale.
            </p>
          </div>

          {/* Eventi Live Card */}
          <div className="glass-card p-6 animate-slideUp border border-primary">
            <h3 className="text-2xl font-bold mb-4 text-dark-brown">Eventi Live</h3>
            <p className="text-golden-brown">
              Esperienze immersive che coinvolgono tutti i sensi, dalle performance artistiche ai workshop interattivi.
            </p>
          </div>

          {/* Workshop Card */}
          <div className="glass-card p-6 animate-slideUp border border-primary">
            <div className="flex items-center mb-4">
              <div className="bg-golden-light p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-dark-brown">Workshop</h4>
            </div>
            <p className="text-golden-brown">
              Sessioni pratiche guidate da esperti in vari campi, dalla musica alla consapevolezza personale.
            </p>
          </div>

          {/* Performance Card */}
          <div className="glass-card p-6 animate-slideUp border border-primary">
            <div className="flex items-center mb-4">
              <div className="bg-golden-light p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-dark-brown">Performance</h4>
            </div>
            <p className="text-golden-brown">
              Esibizioni artistiche che spaziano dalla musica alla danza, dalla poesia alle arti visive.
            </p>
          </div>

          {/* Dirette Streaming - Span 2 columns */}
          <div className="glass-card md:col-span-2 p-6 animate-slideUp border border-primary">
            <div className="flex items-center mb-4">
              <div className="bg-info bg-opacity-20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-brown">Dirette Streaming</h3>
            </div>
            <p className="text-golden-brown">
              Trasmettiamo in diretta eventi selezionati, interviste con artisti e creatori, sessioni di domande e risposte.
              Le dirette permettono un'interazione in tempo reale con la nostra comunità globale.
            </p>
          </div>

          {/* Podcast Card */}
          <div className="glass-card p-6 animate-slideUp border border-primary">
            <div className="flex items-center mb-4">
              <div className="bg-warning bg-opacity-20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-dark-brown">Serie Podcast</h4>
            </div>
            <p className="text-golden-brown">
              "Diplomatic Rap" - Il nostro podcast che esplora cultura, arte e consapevolezza personale.
            </p>
          </div>

          {/* Calendario Eventi - Span full width */}
          <div className="glass-card md:col-span-3 p-8 animate-slideUp border border-primary">
            <h3 className="text-2xl font-bold mb-6 text-dark-brown text-center">Prossimi Eventi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-right mb-4">
                  <p className="font-bold text-primary">15 Giugno</p>
                  <p className="text-secondary">18:00 - 20:00</p>
                </div>
                <h4 className="text-xl font-bold mb-2 text-dark-brown">Workshop di Freestyle</h4>
                <p className="text-golden-brown">Esplora le origini della musica attraverso l'improvvisazione</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-right mb-4">
                  <p className="font-bold text-primary">22 Giugno</p>
                  <p className="text-secondary">21:00 - 23:00</p>
                </div>
                <h4 className="text-xl font-bold mb-2 text-dark-brown">Live Session: Diplomatic Rap</h4>
                <p className="text-golden-brown">Performance dal vivo del nostro concept album</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-right mb-4">
                  <p className="font-bold text-primary">30 Giugno</p>
                  <p className="text-secondary">19:00 - 20:30</p>
                </div>
                <h4 className="text-xl font-bold mb-2 text-dark-brown">Podcast Live: L'Arte della Consapevolezza</h4>
                <p className="text-golden-brown">Registrazione dal vivo con ospiti speciali</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-6 relative">
          <div className="absolute -top-10 right-1/4 w-20 h-20 bg-highlight opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 left-1/4 w-16 h-16 bg-primary opacity-10 rounded-full"></div>

          <a href="/consulenza" className="bg-primary text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1 hover:shadow-xl duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Richiedi una Consulenza
          </a>
          <a href="/spazio-espositivo" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-md hover:bg-primary hover:text-white transition-all shadow-lg transform hover:-translate-y-1 hover:shadow-xl duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Visita lo Spazio Espositivo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Eventi;