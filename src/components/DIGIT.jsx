import React from 'react';

const DIGIT = () => {
  return (
    <section className="cta-digit-section position-relative text-white py-0 mt-5 pt-lg-5"
        style={{ overflow: 'visible' }}>
        <div className="digit-bg position-absolute w-100 h-100" style={{ backgroundColor: '#0b2257', zIndex: -2 }}></div>
        
        {/* Subtle pattern background effect */}
        <div className="digit-pattern position-absolute w-100 h-100 start-0 top-0 opacity-25"
            style={{ backgroundImage: 'radial-gradient(circle at right center, #1c4299 0%, transparent 50%)', zIndex: -1 }}>
        </div>

        <div className="container-fluid px-0 h-100">
            <div className="row align-items-center h-100 g-0">
                <div className="col-lg-6 position-relative h-100 text-center text-lg-end d-flex align-items-end justify-content-center justify-content-lg-end order-1 order-lg-2 digit-image-container">
                    <img src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/22154549/DIGIT-Image-Only.png"
                        alt="Woman using platform" className="img-fluid fade-in-up visible w-100 w-lg-auto"
                        style={{ animationDelay: '0.2s', maxHeight: '550px', objectFit: 'contain' }} />
                </div>
                
                <div className="col-lg-6 px-4 px-lg-5 py-5 py-lg-0 ps-lg-5 text-center text-lg-start fade-in-up visible order-2 order-lg-1">
                    <div className="digit-logo mb-4 mt-2 mt-lg-0 d-flex flex-column align-items-center align-items-lg-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <i className="bi bi-grid-3x3-gap-fill me-2" style={{ color: '#f7941d', fontSize: '2.2rem' }}></i>
                            <span className="fw-bold tracking-tight" style={{ fontSize: '3rem', letterSpacing: '1px' }}>DIGIT</span>
                        </div>
                        <span className="d-block mt-2 text-white opacity-75 fw-normal" style={{ fontSize: '1rem' }}>by eGov Foundation</span>
                    </div>

                    <h2 className="text-white mb-0" style={{ fontWeight: 300, fontSize: '2rem' }}>Our open source</h2>
                    <h2 className="fw-bold mb-4" style={{ fontSize: '2.4rem', lineHeight: 1.2 }}>technology-for-good<br className="d-none d-lg-block" />platform</h2>
                    
                    <p className="mb-5 opacity-75 fw-light lh-base mx-auto mx-lg-0" style={{ fontSize: '0.95rem', maxWidth: '500px' }}>
                        DIGIT, short for Digital Infrastructure for Governance, Inclusion
                        and Transformation is eGov's open-source platform with
                        reusable building blocks and shared data registries that can be
                        used to build solutions in multiple sectors.
                    </p>
                    <a href="#"
                        className="btn btn-light text-dark rounded-pill px-4 py-2 fw-medium hover-scale shadow">Explore the
                        platform</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default DIGIT;
