import React, { useState, useEffect } from 'react';

const Shop = () => {
  // Categorie di prodotti
  const categories = ['Tutti', 'Abbigliamento', 'Accessori', 'Arte', 'Musica'];
  
  // Stato per la categoria selezionata
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  // Stato per l'animazione
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Prodotti di esempio con immagini reali
  const products = [
    {
      id: 1,
      name: 'T-Shirt "Freestyle"',
      category: 'Abbigliamento',
      price: 29.99,
      description: 'T-shirt in cotone biologico con stampa artistica ispirata al freestyle.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      badge: 'Nuovo'
    },
    {
      id: 2,
      name: 'Felpa "Mahaway"',
      category: 'Abbigliamento',
      price: 49.99,
      description: 'Felpa in materiali sostenibili con logo Mahaway ricamato.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      badge: 'Bestseller'
    },
    {
      id: 3,
      name: 'Cappellino "Sound"',
      category: 'Accessori',
      price: 24.99,
      description: 'Cappellino regolabile con patch ricamata a tema musicale.',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      badge: null
    },
    {
      id: 4,
      name: 'Poster "Habitat"',
      category: 'Arte',
      price: 19.99,
      description: 'Stampa artistica di alta qualità su carta riciclata.',
      image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      badge: 'Eco'
    },
    {
      id: 5,
      name: 'Album "Diplomatic Rap"',
      category: 'Musica',
      price: 15.99,
      description: 'Il nostro concept album in formato digitale con 7 tracce originali.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      badge: 'Esclusivo'
    },
    {
      id: 6,
      name: 'Borsa in Tela',
      category: 'Accessori',
      price: 22.99,
      description: 'Borsa in tela di cotone biologico con stampa artistica.',
      image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      badge: 'Eco'
    },
  ];
  
  // Filtra i prodotti in base alla categoria selezionata
  const filteredProducts = selectedCategory === 'Tutti' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <div className={`min-h-screen py-16 px-6 bg-background ${isLoaded ? 'animate-fadeIn' : ''}`} style={{ backgroundImage: 'linear-gradient(to bottom, #f8fafc, #f0f7ff)' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Elementi decorativi di sfondo */}
        <div className="fixed top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full blur-xl"></div>
        <div className="fixed bottom-20 right-10 w-40 h-40 bg-highlight opacity-5 rounded-full blur-xl"></div>
        <div className="fixed top-1/2 left-1/4 w-24 h-24 bg-info opacity-5 rounded-full blur-xl"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center relative inline-block">
          <span className="relative z-10">Shop</span>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-highlight opacity-30 z-0 rounded-full"></div>
        </h1>
        
        <div className="mb-12 bg-accent p-8 rounded-lg shadow-lg border-l-4 border-primary">
          <p className="text-xl italic text-center">
            "Ogni prodotto racconta una storia, ogni acquisto è una scelta consapevole."
          </p>
        </div>
        
        <div className="prose max-w-none mb-10">
          <p className="text-lg text-center">
            Nel nostro shop trovi prodotti selezionati con cura, realizzati con materiali sostenibili e processi etici.
            Ogni articolo riflette i valori di Mahaway e ti permette di portare con te un pezzo della nostra filosofia.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-highlight rounded-full"></div>
          </div>
        </div>
        
        {/* Filtro categorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-highlight opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-info opacity-20"></div>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white border border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Griglia prodotti */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Elemento decorativo */}
          <div className="absolute top-1/3 right-0 w-20 h-20 bg-info opacity-10 rounded-full blur-md"></div>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 ${isLoaded ? 'animate-slideUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-highlight text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                  <span className="font-bold text-lg bg-accent px-2 py-1 rounded-md">€{product.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2 inline-block bg-accent px-2 py-1 rounded-full">{product.category}</p>
                <p className="text-secondary mb-4">{product.description}</p>
                <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Aggiungi al Carrello
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Informazioni aggiuntive */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-success transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-success bg-opacity-20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Materiali Sostenibili</h3>
            </div>
            <p className="text-secondary">
              Tutti i nostri prodotti sono realizzati con materiali selezionati per il loro basso impatto ambientale.
              Privilegiamo cotone biologico, tinture naturali e processi produttivi che rispettano l'ambiente.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-info transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-info bg-opacity-20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Produzione Etica</h3>
            </div>
            <p className="text-secondary">
              Collaboriamo con artigiani e produttori che garantiscono condizioni di lavoro eque e dignitose.
              Ogni prodotto ha una storia che rispetta le persone coinvolte nella sua creazione.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-warning transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-warning bg-opacity-20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Spedizione e Resi</h3>
            </div>
            <p className="text-secondary">
              Spediamo in tutta Italia con packaging eco-friendly. Offriamo resi gratuiti entro 14 giorni
              dall'acquisto per garantirti la massima soddisfazione.
            </p>
          </div>
        </div>
        
        <div className="my-10 flex justify-center relative">
          <div className="absolute -top-10 right-1/4 w-20 h-20 bg-highlight opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 left-1/4 w-16 h-16 bg-primary opacity-10 rounded-full"></div>
          
          <a href="/consulenza" className="bg-primary text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all inline-block mr-6 shadow-lg transform hover:-translate-y-1 hover:shadow-xl duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Richiedi una Consulenza
          </a>
          <a href="/eventi" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-md hover:bg-primary hover:text-white transition-all inline-block shadow-lg transform hover:-translate-y-1 hover:shadow-xl duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Scopri i Nostri Eventi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;