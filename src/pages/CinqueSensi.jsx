import React from 'react';

const CinqueSensi = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">I Cinque Sensi</h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg">
          <p className="text-xl italic text-center">
            "Il senso della vita risiede solo nella libertà ed è solo nella libertà che la vita diventa comprensibile."
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            La vita stimola i nostri sensi, con grande tatto, un suono, un paesaggio possono risvegliare in noi tutte le risposte.
            La fiducia è forse l'unica vera risposta a nostra disposizione, una sorgente interiore illimitata.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">L'Esperienza Sensoriale</h3>
          
          <p className="text-lg mb-6">
            I nostri cinque sensi sono le porte attraverso cui percepiamo il mondo. Insieme danno vita alla percezione del reale;
            in qualche modo diventano ciò che sperimentiamo, andando oltre l'esperienza stessa e diventando l'esperienza.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-accent p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Udito</h4>
              <p>
                Il suono, la musica nasce dalle esperienze più bizzarre. Il freestyle possiamo dire sia la chiave delle origini della musica
                che conosciamo. Prendiamo vita a seconda dell'ambiente sociale, culturale e del mondo in cui ci sviluppiamo.
              </p>
            </div>
            
            <div className="bg-accent p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Vista</h4>
              <p>
                Insieme all'udito, la vista dà vita alla percezione del reale. Ciò che vediamo forma la nostra comprensione del mondo
                e ci permette di navigare attraverso le esperienze quotidiane con consapevolezza.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
            <div className="bg-accent p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Sapore</h4>
              <p>
                Il gusto ci connette con il nutrimento e il piacere. Attraverso il sapore, possiamo apprezzare la ricchezza
                degli alimenti naturali e scoprire nuove dimensioni di esperienza.
              </p>
            </div>
            
            <div className="bg-accent p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Tatto</h4>
              <p>
                Il tatto ci permette di sentire il mondo fisicamente. Attraverso il contatto, percepiamo texture, temperature
                e pressioni, creando un legame diretto con l'ambiente circostante.
              </p>
            </div>
            
            <div className="bg-accent p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Olfatto</h4>
              <p>
                Sviluppando il senso dell'olfatto, arricchiamo la nostra esperienza del mondo. Gli odori evocano ricordi
                e sensazioni, collegandoci profondamente con i luoghi e i momenti vissuti.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Musica e Sensi</h3>
          
          <p className="text-lg mb-6">
            Il freestyle registrato diventa il prodotto finito. Portiamo l'utente in studio per mostrare come nasce la musica,
            con un concept album (Diplomatic Rap) che include un'introduzione di 1 minuto e 7 tracce su 7 strumentali, ciascuna di circa 5 minuti.
          </p>
          
          <div className="my-10 bg-accent p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Principi dell'Esperienza Sensoriale</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-lg">Ascolta con attenzione i suoni che ti circondano</li>
              <li className="text-lg">Osserva con consapevolezza ciò che vedi</li>
              <li className="text-lg">Assapora lentamente ogni boccone</li>
              <li className="text-lg">Tocca con presenza, sentendo le texture</li>
              <li className="text-lg">Respira profondamente, percependo gli aromi</li>
              <li className="text-lg">Integra tutti i sensi per un'esperienza completa</li>
            </ul>
          </div>
          
          <div className="my-10 flex justify-center">
            <a href="/consulenza" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-block mr-4">
              Contattaci
            </a>
            <a href="/eventi" className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all inline-block">
              Scopri i Nostri Eventi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinqueSensi;