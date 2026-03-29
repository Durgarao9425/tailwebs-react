import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section bg-img-11 position-relative d-flex align-items-center pt-5 pb-0">
      <div className="container position-relative z-1 pt-5 mt-4">
        <div className="row align-items-center">
          {/* Mobile Hero Image */}
          <div className="col-12 mt-4 text-center d-lg-none fade-in-up order-1 order-lg-2 mb-4 visible">
            <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/22121932/New-Home-Page-Banner-Image.png"
              alt="Citizens using services"
              className="img-fluid w-100"
            />
          </div>

          {/* Hero Content */}
          <div className="col-lg-6 hero-text-col mt-5 pe-lg-5 order-2 order-lg-1 text-center text-lg-start">
            <h1 className="text-style-1 fs-45-pro fs-30-sm fade-in-up visible mb-1" style={{ fontWeight: 300, lineHeight: 1.25 }}>
              20 years of digital<br />
              transformation in<br />
              public service delivery
            </h1>
            <h2 className="hero-highlight mb-4 d-inline-block position-relative hero-brush-underline fade-in-up visible" 
                style={{ fontSize: '3.5rem', fontWeight: 700, color: '#1a224a' }}>
              It's possible.
            </h2>
            <p className="hero-subtext mb-4 fade-in-up visible pe-lg-3 mx-auto mx-lg-0" 
               style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#5a667b' }}>
              Catalysts. Ecosystem enablers. Problem Solvers.
              At eGov, we're driven by the power of open digital
              infrastructure and ecosystems to enable
              governments deliver accessible, inclusive and
              transparent services to every citizen.
            </p>
            <div className="d-flex flex-row flex-nowrap hero-buttons mt-4 pt-2 mb-5 fade-in-up visible gap-2 justify-content-center justify-content-lg-start px-2">
              <a href="#" className="btn rounded-pill px-2 px-md-4 py-2 py-md-3 hover-scale text-white fw-medium shadow-sm transition-all text-nowrap flex-grow-1"
                  style={{ backgroundColor: '#4ed5c6', border: 'none', fontSize: '0.8rem', maxWidth: '160px' }}>
                Our Approach
              </a>
              <a href="#" className="btn rounded-pill px-2 px-md-4 py-2 py-md-3 hover-scale fw-medium shadow-sm transition-all text-nowrap flex-grow-1"
                  style={{ backgroundColor: 'transparent', border: '1px solid #1a224a', color: '#1a224a', fontSize: '0.8rem', maxWidth: '160px' }}>
                Our Impact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
