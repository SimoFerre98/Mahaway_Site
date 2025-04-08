import React from 'react';

const ChiSono = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Chi Sono</h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-square bg-white rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-secondary">Foto di Vittorio</span>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-primary">Vittorio</h2>
              <p className="text-lg text-secondary mb-4">
                Fondatore del sito/brand Mahaway
              </p>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Salve, mi chiamo Vittorio, sono il fondatore del sito/brand Mahaway. 
            Vi chiederete cosa ci faccia qui, beh iniziamo col dire che questo sito 
            nasce dall'esigenza personale di cambiamento, dalla trasformata consapevolezza 
            di condividere le proprie esperienze, il proprio cammino anche se apparentemente 
            solitario.
          </p>
          
          <p className="text-lg mb-6">
            È sconnesso e necessario allo stesso tempo l'arricchimento umano come specie, 
            beneficiandone personalmente.
          </p>
          
          <blockquote className="bg-accent p-6 my-8 rounded-lg italic text-xl">
            "Il senso della vita risiede solo nella libertà ed è solo nella libertà che la vita diventa comprensibile."
          </blockquote>
          
          <p className="text-lg mb-6">
            La vita stimola i nostri sensi, con grande tatto, un suono, un paesaggio possono 
            risvegliare in noi tutte le risposte. La fiducia è forse l'unica vera risposta a 
            nostra disposizione. Una sorgente interiore illimitata.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">La Filosofia Mahaway</h3>
          
          <p className="text-lg mb-6">
            Mahaway rappresenta un approccio alla vita basato sulla consapevolezza e sulla libertà. 
            Ogni prodotto, ogni evento, ogni contenuto che creiamo è pensato per stimolare una 
            riflessione e un percorso di crescita personale.
          </p>
          
          <p className="text-lg mb-6">
            Il nostro obiettivo è creare una comunità di persone che condividono valori di 
            autenticità, creatività e rispetto per sé stessi e per l'ambiente che ci circonda.
          </p>
          
          <div className="my-10 flex justify-center">
            <a href="/consulenza" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-block">
              Contattami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSono;