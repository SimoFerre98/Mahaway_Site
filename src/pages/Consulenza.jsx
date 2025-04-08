import React, { useState } from 'react';

const Consulenza = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    tipoConsulenza: 'generale'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui andrebbe implementata la logica per inviare il form
    alert('Grazie per averci contattato! Ti risponderemo al più presto.');
    // Reset del form
    setFormData({
      nome: '',
      email: '',
      telefono: '',
      messaggio: '',
      tipoConsulenza: 'generale'
    });
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Consulenza</h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg">
          <p className="text-xl italic text-center">
            "Il consiglio di un buon amico non ha prezzo. Chiamaci."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">I Nostri Servizi</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-primary">Consulenza Personale</h3>
                <p className="text-secondary mb-4">
                  Un percorso personalizzato per aiutarti a trovare il tuo equilibrio e la tua strada.
                </p>
                <p className="font-medium">A partire da €50/sessione</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-primary">Consulenza Artistica</h3>
                <p className="text-secondary mb-4">
                  Supporto per artisti emergenti, consigli su produzione musicale e sviluppo creativo.
                </p>
                <p className="font-medium">A partire da €70/sessione</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-primary">Workshop e Formazione</h3>
                <p className="text-secondary mb-4">
                  Sessioni di gruppo su tematiche specifiche: consapevolezza, creatività, benessere.
                </p>
                <p className="font-medium">Prezzi variabili in base al workshop</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Contattaci</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block mb-1 font-medium">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block mb-1 font-medium">Telefono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="tipoConsulenza" className="block mb-1 font-medium">Tipo di Consulenza</label>
                <select
                  id="tipoConsulenza"
                  name="tipoConsulenza"
                  value={formData.tipoConsulenza}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="generale">Consulenza Generale</option>
                  <option value="personale">Consulenza Personale</option>
                  <option value="artistica">Consulenza Artistica</option>
                  <option value="workshop">Workshop e Formazione</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="messaggio" className="block mb-1 font-medium">Messaggio</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition-all"
              >
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Preferisci parlare direttamente?</h3>
          <p className="text-lg mb-6">
            Puoi contattarci direttamente via email o telefono per fissare un appuntamento.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:info@mahaway.it" className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all inline-block">
              info@mahaway.it
            </a>
            <a href="tel:+393XXXXXXXXX" className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all inline-block">
              +39 XXX XXX XXXX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulenza;