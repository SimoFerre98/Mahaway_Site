import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const navElement = navRef.current;
    if (navElement) {
      const links = navElement.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("click", scrollToTop);
      });

      return () => {
        links.forEach(link => {
          link.removeEventListener("click", scrollToTop);
        });
      };
    }
  }, []);

  return (
    <nav ref={navRef} className="sticky top-4 z-50 mx-4">
      <div className="container mx-auto flex justify-between items-center bg-dark-brown/75 backdrop-blur-md rounded-2xl py-4 px-8 shadow-2xl border border-golden-light/30 hover:border-golden-light/50 hover:bg-dark-brown/85 transition-all duration-500">

        <Link to="/" className="text-3xl font-bold text-sunset hover:text-golden-light transition-all duration-300">MAHAWAY</Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-sunset focus:outline-none transition-colors duration-300"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-2 flex-nowrap">
          <Link to="/chi-sono" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">Chi Sono</Link>
          <Link to="/la-cura" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">La Cura</Link>
          <Link to="/frasi" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">Frasi</Link>
          <Link to="/consulenza" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">Consulenza</Link>
          <Link to="/habitat" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">Habitat</Link>
          <Link to="/5-sensi" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">5 Sensi</Link>
          <Link to="/eventi" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">Eventi</Link>
          <Link to="/spazio-espositivo" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">Spazio Espositivo</Link>
          <Link to="/shop" className="text-white hover:text-sunset px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-500 hover:bg-golden-brown/30 hover:shadow-lg hover:scale-105">Shop</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 px-6 bg-golden-brown/20 rounded-xl backdrop-blur-md border border-golden-light/30 shadow-2xl">
          <div className="flex flex-col space-y-2 py-2">
            <Link to="/chi-sono" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>Chi Sono</Link>
            <Link to="/la-cura" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>La Cura</Link>
            <Link to="/frasi" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>Frasi</Link>
            <Link to="/consulenza" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>Consulenza</Link>
            <Link to="/habitat" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>Habitat</Link>
            <Link to="/5-sensi" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>5 Sensi</Link>
            <Link to="/eventi" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>Eventi</Link>
            <Link to="/spazio-espositivo" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>Spazio Espositivo</Link>
            <Link to="/shop" className="text-white hover:text-sunset px-3 py-2 rounded-lg transition-all duration-300 hover:bg-golden-brown/20" onClick={toggleMenu}>Shop</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;