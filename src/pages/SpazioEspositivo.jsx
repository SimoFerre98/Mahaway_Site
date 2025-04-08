import React from 'react';

const SpazioEspositivo = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Spazio Espositivo</h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg">
          <p className="text-xl italic text-center">
            "L'arte è l'espressione più autentica dell'anima, un ponte tra il visibile e l'invisibile."
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Il nostro spazio espositivo è un luogo dedicato all'arte in tutte le sue forme: quadri, poesie, fotografie e altre
            espressioni creative. Qui, artisti emergenti e affermati possono condividere le loro opere con un pubblico attento e sensibile.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Esposizioni Attuali</h3>
          
          <p className="text-lg mb-6">
            Le nostre esposizioni cambiano regolarmente, offrendo sempre nuove prospettive e stimoli. Ogni opera è selezionata
            non solo per il suo valore estetico, ma anche per la sua capacità di suscitare riflessioni e connessioni profonde.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Arte Visiva</h4>
              <p className="text-secondary">
                Dipinti, fotografie e installazioni che esplorano temi legati alla consapevolezza, alla natura e alle relazioni umane.
                Ogni opera è accompagnata da una descrizione che ne approfondisce il significato e il processo creativo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Poesia e Letteratura</h4>
              <p className="text-secondary">
                Testi poetici e narrativi che danno voce a esperienze personali e collettive. Le parole, come i colori, hanno il potere
                di evocare emozioni profonde e di creare connessioni tra persone diverse.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Artisti in Evidenza</h3>
          
          <p className="text-lg mb-6">
            Collaboriamo con artisti che condividono la nostra visione e i nostri valori. Ogni artista porta una prospettiva unica,
            arricchendo il nostro spazio con la diversità delle loro esperienze e delle loro tecniche espressive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Marco Bianchi</h4>
              <p className="text-secondary">
                Fotografo che cattura momenti di connessione umana in contesti urbani. Le sue immagini rivelano la bellezza
                nascosta nelle interazioni quotidiane, spesso trascurate nella frenesia della vita moderna.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Laura Rossi</h4>
              <p className="text-secondary">
                Pittrice che utilizza materiali naturali per creare opere che esplorano il rapporto tra umanità e natura.
                I suoi dipinti invitano a una riflessione sulla sostenibilità e sulla nostra responsabilità verso il pianeta.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Giovanni Verdi</h4>
              <p className="text-secondary">
                Poeta che attraverso le parole esplora temi di identità, appartenenza e trasformazione personale.
                Le sue poesie sono finestre su esperienze universali, raccontate con una voce autentica e coinvolgente.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Partecipa</h3>
          
          <p className="text-lg mb-6">
            Il nostro spazio espositivo è aperto a nuove collaborazioni. Se sei un artista e desideri condividere il tuo lavoro,
            contattaci per discutere le possibilità di esposizione. Cerchiamo opere che risuonino con i valori di Mahaway
            e che possano contribuire a creare un dialogo significativo con il nostro pubblico.
          </p>
          
          <div className="my-10 p-8 bg-accent rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Prossime Esposizioni</h3>
            <ul className="list-none space-y-6">
              <li className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold">"Natura Interiore" - Collettiva di Pittura</h4>
                    <p className="text-secondary">Esplorazioni visive del rapporto tra natura esterna e paesaggi interiori</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">10-30 Luglio</p>
                  </div>
                </div>
              </li>
              <li className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold">"Parole in Libertà" - Serata di Poesia</h4>
                    <p className="text-secondary">Letture poetiche con accompagnamento musicale</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">15 Luglio</p>
                    <p>19:00 - 21:00</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold">"Frammenti di Quotidiano" - Mostra Fotografica</h4>
                    <p className="text-secondary">Immagini che catturano la bellezza nei momenti ordinari</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">5-25 Agosto</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="my-10 flex justify-center">
            <a href="/eventi" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-block mr-4">
              Scopri i Nostri Eventi
            </a>
            <a href="/shop" className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all inline-block">
              Esplora i Nostri Prodotti
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpazioEspositivo;