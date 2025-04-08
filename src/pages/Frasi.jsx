import React, { useState } from 'react';

const Frasi = () => {
  // Array di frasi d'effetto che possono essere aggiornate facilmente
  const [frasi] = useState([
    {
      id: 1,
      testo: "Il senso della vita risiede solo nella libertà ed è solo nella libertà che la vita diventa comprensibile.",
      autore: "Mahaway"
    },
    {
      id: 2,
      testo: "La vita stimola i nostri sensi, con grande tatto, un suono, un paesaggio possono risvegliare in noi tutte le risposte.",
      autore: "Mahaway"
    },
    {
      id: 3,
      testo: "La fiducia è forse l'unica vera risposta a nostra disposizione. Una sorgente interiore illimitata.",
      autore: "Mahaway"
    },
    {
      id: 4,
      testo: "Non in vista di un malessere futuro ma volta alla prevenzione, al buon senso, diventando prima di ogni altro dottori di noi stessi.",
      autore: "Mahaway"
    },
    {
      id: 5,
      testo: "Ciò che ci circonda diventa la nostra casa, la nostra scelta. Scegliendo con cura, con attenzione.",
      autore: "Mahaway"
    },
    {
      id: 6,
      testo: "Il consiglio di un buon amico non ha prezzo. Chiamaci.",
      autore: "Mahaway"
    },
    {
      id: 7,
      testo: "L'arricchimento umano come specie, beneficiandone personalmente.",
      autore: "Mahaway"
    }
  ]);

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Frasi</h1>
        
        <p className="text-lg text-center mb-12 text-secondary">
          Inserzioni ad effetto, sostituite ogni giorno. Pensieri e riflessioni che ispirano il nostro percorso.
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          {frasi.map((frase) => (
            <div key={frase.id} className="bg-accent p-8 rounded-lg hover:shadow-md transition-shadow">
              <blockquote className="text-xl md:text-2xl italic mb-4">
                "{frase.testo}"
              </blockquote>
              <p className="text-right font-medium">— {frase.autore}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Hai una frase da condividere?</h3>
          <p className="text-lg mb-6">
            Se hai una frase che ti ispira e vorresti condividerla con la comunità Mahaway, 
            inviala a noi. Le migliori frasi potrebbero essere pubblicate in questa pagina.
          </p>
          <a 
            href="/consulenza" 
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-block"
          >
            Contattaci
          </a>
        </div>
      </div>
    </div>
  );
};

export default Frasi;