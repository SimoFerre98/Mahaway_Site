import React from 'react';

const Habitat = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Habitat</h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg">
          <p className="text-xl italic text-center">
            "Ciò che ci circonda diventa la nostra casa, la nostra scelta. Scegliendo con cura, con attenzione."
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Ciò che ci circonda diventa la nostra casa, la nostra scelta. Scegliendo con cura, con attenzione, 
            creiamo un ambiente che riflette i nostri valori e nutre il nostro benessere.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Il Nostro Ambiente</h3>
          
          <p className="text-lg mb-6">
            L'habitat non è solo lo spazio fisico in cui viviamo, ma anche l'ambiente sociale, culturale e mentale 
            che ci circonda. Ogni elemento con cui interagiamo quotidianamente influenza il nostro stato d'animo, 
            le nostre decisioni e il nostro benessere generale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Spazio Fisico</h4>
              <p className="text-secondary">
                Il cibo non è mente, il tessuto che ci veste non è naturale, lavorato a mano. 
                Gli oggetti che ci circondano dovrebbero essere scelti con consapevolezza, 
                privilegiando materiali naturali e sostenibili.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Ambiente Sociale</h4>
              <p className="text-secondary">
                Le persone con cui scegliamo di condividere il nostro tempo e le nostre esperienze 
                formano il nostro habitat sociale. La qualità di queste relazioni influenza profondamente 
                la nostra crescita personale.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Creare il Proprio Habitat</h3>
          
          <p className="text-lg mb-6">
            Creare un habitat che supporti il nostro benessere richiede consapevolezza e intenzionalità. 
            Non si tratta solo di arredare uno spazio, ma di costruire un ambiente che nutra tutti i nostri sensi 
            e che sia in armonia con i nostri valori più profondi.
          </p>
          
          <p className="text-lg mb-6">
            In Mahaway, offriamo prodotti e consulenze pensati per aiutarti a creare un habitat che 
            rispecchi la tua essenza e supporti il tuo percorso di crescita personale.
          </p>
          
          <div className="my-10 p-8 bg-accent rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Principi per un Habitat Consapevole</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-lg">Scegli con cura ogni elemento che introduci nel tuo spazio</li>
              <li className="text-lg">Privilegia materiali naturali e sostenibili</li>
              <li className="text-lg">Crea spazi che stimolino positivamente i tuoi sensi</li>
              <li className="text-lg">Circondati di persone che supportano la tua crescita</li>
              <li className="text-lg">Mantieni un equilibrio tra funzionalità ed estetica</li>
              <li className="text-lg">Ricorda che il tuo habitat esterno riflette e influenza il tuo mondo interiore</li>
            </ul>
          </div>
          
          <div className="my-10 flex justify-center">
            <a href="/shop" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-block mr-4">
              Esplora i Nostri Prodotti
            </a>
            <a href="/consulenza" className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all inline-block">
              Richiedi una Consulenza
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habitat;