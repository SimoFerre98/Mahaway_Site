import React from 'react';

const LaCura = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">La Cura</h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg">
          <p className="text-xl italic text-center">
            "L'idea di cura viene spesso associata a un rispettivo malessere o a qualcosa di altro che la rende necessaria."
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            L'idea di cura viene spesso associata a un rispettivo malessere o a qualcosa di altro che la rende necessaria. 
            Non è in vista di un malessere futuro ma volta alla prevenzione, al buon senso, diventando prima di ogni altro 
            dottori di noi stessi, senza delegare le proprie responsabilità.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Prevenzione e Consapevolezza</h3>
          
          <p className="text-lg mb-6">
            La cura, nel nostro approccio, non è una risposta a un problema ma un atteggiamento quotidiano. 
            È la consapevolezza che il nostro benessere dipende dalle scelte che facciamo ogni giorno, 
            dall'attenzione che dedichiamo a noi stessi e all'ambiente che ci circonda.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Cura del Corpo</h4>
              <p className="text-secondary">
                Il cibo non è mente, il tessuto che ci veste non è naturale, lavorato a mano. 
                L'esperienza di creazione dovrebbe essere vissuta a pieno, dall'idea al prodotto.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-primary">Cura della Mente</h4>
              <p className="text-secondary">
                Alimentarsi quotidianamente senza scordare della qualità della quantità. 
                Prendersi cura di sé significa anche nutrire la mente con esperienze positive e stimolanti.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Un Approccio Olistico</h3>
          
          <p className="text-lg mb-6">
            La nostra filosofia di cura abbraccia tutti gli aspetti dell'essere umano: fisico, mentale, emotivo e spirituale. 
            Crediamo che solo attraverso un approccio integrato sia possibile raggiungere un vero stato di benessere.
          </p>
          
          <p className="text-lg mb-6">
            Ogni prodotto che creiamo, ogni evento che organizziamo, ogni consiglio che offriamo è pensato per 
            supportare questo percorso di cura e consapevolezza.
          </p>
          
          <blockquote className="bg-accent p-6 my-8 rounded-lg italic text-xl">
            "Diventare prima di ogni altro dottori di noi stessi, senza delegare le proprie responsabilità."
          </blockquote>
          
          <div className="my-10 flex justify-center">
            <a href="/consulenza" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-block">
              Richiedi una Consulenza
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaCura;