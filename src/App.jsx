import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Stats from './components/Stats';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import DIGIT from './components/DIGIT';
import Products from './components/Products';
import Supporters from './components/Supporters';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        // FORCE CLOSE ALL DROPDOWNS & COLLAPSIBLE MENUS
        const itemsToClose = document.querySelectorAll('.dropdown-menu.show, .dropdown-toggle.show, .navbar-collapse.show, .nav-item.show');
        itemsToClose.forEach(el => {
            el.classList.remove('show');
            if (el.hasAttribute('aria-expanded')) el.setAttribute('aria-expanded', 'false');
        });
    }, [pathname]);
    return null;
};

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <div className="reveal"><Features /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><DIGIT /></div>
      <div className="reveal"><Products /></div>
      <div className="reveal"><Supporters /></div>
    </>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
          </Routes>
        </main>
        <Footer />
        
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}
          className="d-flex align-items-center justify-content-center transition-all hover-opacity shadow" 
          style={{
            width: '40px', 
            height: '40px', 
            backgroundColor: '#1a224a', 
            color: 'white', 
            textDecoration: 'none', 
            position: 'fixed', 
            bottom: '25px', 
            right: '25px', 
            zIndex: 1000, 
            borderRadius: '4px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
