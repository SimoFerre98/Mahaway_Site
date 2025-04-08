import React from 'react';

const CinqueSensi = () => {
  return (
    <div className="min-h-screen py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">I Cinque Sensi</h1>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Citazione principale - Spans 2 columns */}
          <div className="glass-card md:col-span-2 p-8 animate-fadeIn">
            <p className="text-2xl italic text-golden-brown">
              "Il senso della vita risiede solo nella libertà ed è solo nella libertà che la vita diventa comprensibile."
            </p>
            <p className="text-lg text-dark-brown mt-4">
              La vita stimola i nostri sensi, con grande tatto, un suono, un paesaggio possono risvegliare in noi tutte le risposte.
              La fiducia è forse l'unica vera risposta a nostra disposizione, una sorgente interiore illimitata.
            </p>
          </div>

          {/* Introduzione Sensoriale */}
          <div className="glass-card p-6 animate-slideUp">
            <h3 className="text-xl font-bold mb-3 text-dark-brown">L'Esperienza Sensoriale</h3>
            <p className="text-golden-brown">
              I nostri cinque sensi sono le porte attraverso cui percepiamo il mondo, dando vita alla percezione del reale.
            </p>
          </div>

          {/* Udito e Vista - Spans 2 columns */}
          <div className="glass-card md:col-span-2 p-6 animate-slideUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-3 text-dark-brown">Udito</h4>
                <p className="text-golden-brown">
                  Il suono e la musica nascono dalle esperienze più bizzarre. Il freestyle è la chiave delle origini della musica
                  che conosciamo.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-dark-brown">Vista</h4>
                <p className="text-golden-brown">
                  La vista dà vita alla percezione del reale, formando la nostra comprensione del mondo con consapevolezza.
                </p>
              </div>
            </div>
          </div>

          {/* Altri Sensi */}
          <div className="glass-card p-6 animate-slideUp">
            <h4 className="text-xl font-bold mb-3 text-dark-brown">Sapore</h4>
            <p className="text-golden-brown">
              Il gusto ci connette con il nutrimento e il piacere, permettendoci di scoprire nuove dimensioni di esperienza.
            </p>
          </div>

          <div className="glass-card p-6 animate-slideUp">
            <h4 className="text-xl font-bold mb-3 text-dark-brown">Tatto</h4>
            <p className="text-golden-brown">
              Attraverso il contatto, percepiamo texture e temperature, creando un legame diretto con l'ambiente.
            </p>
          </div>

          <div className="glass-card p-6 animate-slideUp">
            <h4 className="text-xl font-bold mb-3 text-dark-brown">Olfatto</h4>
            <p className="text-golden-brown">
              Gli odori evocano ricordi e sensazioni, collegandoci profondamente con i luoghi e i momenti vissuti.
            </p>
          </div>

          {/* Musica e Sensi - Spans full width */}
          <div className="glass-card md:col-span-3 p-8 animate-slideUp">
            <h3 className="text-2xl font-bold mb-4 text-dark-brown">Musica e Sensi</h3>
            <p className="text-golden-brown mb-6">
              Il freestyle registrato diventa il prodotto finito. Portiamo l'utente in studio per mostrare come nasce la musica,
              con un concept album (Diplomatic Rap) che include un'introduzione di 1 minuto e 7 tracce su 7 strumentali.
            </p>
          </div>

          {/* Principi Sensoriali - Spans 2 columns */}
          <div className="glass-card md:col-span-2 p-8 animate-slideUp">
            <h3 className="text-2xl font-bold mb-4 text-dark-brown">Principi dell'Esperienza Sensoriale</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="text-golden-brown">Ascolta con attenzione</li>
              <li className="text-golden-brown">Osserva con consapevolezza</li>
              <li className="text-golden-brown">Assapora lentamente</li>
              <li className="text-golden-brown">Tocca con presenza</li>
              <li className="text-golden-brown">Respira profondamente</li>
              <li className="text-golden-brown">Integra tutti i sensi</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="glass-card p-6 animate-slideUp flex flex-col justify-center">
            <div className="space-y-4">
              <a href="/consulenza" className="bg-dark-brown text-white px-6 py-3 rounded-md hover:bg-golden-brown transition-all block text-center shadow-lg">Contattaci</a>
              <a href="/eventi" className="bg-white text-dark-brown border border-dark-brown px-6 py-3 rounded-md hover:bg-golden-light hover:text-white transition-all block text-center shadow-lg">Scopri i Nostri Eventi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinqueSensi;