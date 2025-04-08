import React from 'react';

const Eventi = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Eventi</h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg">
          <p className="text-xl italic text-center">
            "La condivisione delle esperienze è il fondamento della crescita collettiva."
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            In Mahaway, crediamo nel potere degli eventi come catalizzatori di connessioni autentiche e crescita personale.
            Attraverso i nostri eventi live, dirette streaming e podcast, creiamo spazi di condivisione e apprendimento.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Eventi Live</h3>
          
          <p className="text-lg mb-6">
            I nostri eventi dal vivo sono progettati per creare esperienze immersive che coinvolgono tutti i sensi.
            Dalle performance artistiche ai workshop interattivi, ogni evento è un'opportunità per connettersi con persone che condividono valori simili.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Workshop</h4>
              <p className="text-secondary">
                Sessioni pratiche guidate da esperti in vari campi, dai materiali sostenibili alla creazione artistica,
                dalla consapevolezza personale alla musica. Ogni workshop offre strumenti concreti per arricchire il proprio percorso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Performance</h4>
              <p className="text-secondary">
                Esibizioni artistiche che spaziano dalla musica alla danza, dalla poesia alle arti visive.
                Ogni performance è selezionata per il suo valore espressivo e la capacità di stimolare riflessioni profonde.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Dirette e Podcast</h3>
          
          <p className="text-lg mb-6">
            Per chi non può partecipare di persona, offriamo contenuti digitali di qualità che mantengono vivo lo spirito di Mahaway.
            Le nostre dirette e i podcast sono pensati per essere accessibili ovunque, portando la nostra filosofia oltre i confini fisici.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Dirette Streaming</h4>
              <p className="text-secondary">
                Trasmettiamo in diretta eventi selezionati, interviste con artisti e creatori, sessioni di domande e risposte.
                Le dirette permettono un'interazione in tempo reale con la nostra comunità globale.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Serie Podcast</h4>
              <p className="text-secondary">
                Il nostro podcast "Diplomatic Rap" esplora temi legati alla cultura, all'arte e alla consapevolezza personale.
                Ogni episodio presenta conversazioni stimolanti con ospiti che condividono la nostra visione.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Calendario Eventi</h3>
          
          <p className="text-lg mb-6">
            Consulta il nostro calendario per rimanere aggiornato sui prossimi eventi, sia fisici che digitali.
            Iscriviti alla nostra newsletter per ricevere notifiche personalizzate sugli eventi che potrebbero interessarti.
          </p>
          
          <div className="my-10 p-8 bg-accent rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Prossimi Eventi</h3>
            <ul className="list-none space-y-6">
              <li className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold">Workshop di Freestyle</h4>
                    <p className="text-secondary">Esplora le origini della musica attraverso l'improvvisazione</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">15 Giugno</p>
                    <p>18:00 - 20:00</p>
                  </div>
                </div>
              </li>
              <li className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold">Live Session: Diplomatic Rap</h4>
                    <p className="text-secondary">Performance dal vivo del nostro concept album</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">22 Giugno</p>
                    <p>21:00 - 23:00</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold">Podcast Live: L'Arte della Consapevolezza</h4>
                    <p className="text-secondary">Registrazione dal vivo con ospiti speciali</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">30 Giugno</p>
                    <p>19:00 - 20:30</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="my-10 flex justify-center">
            <a href="/consulenza" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-block mr-4">
              Richiedi una Consulenza
            </a>
            <a href="/spazio-espositivo" className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all inline-block">
              Visita lo Spazio Espositivo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventi;