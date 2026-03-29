import React from 'react';

const Features = () => {
  return (
    <section className="features-section pb-5" style={{ marginBottom: '80px' }}>
      <div className="container bg-white rounded-4 py-5 px-4 px-lg-5 position-relative fade-in-up visible mx-auto" 
          style={{ marginTop: '-80px', zIndex: 10, boxShadow: '0 10px 40px rgba(0,0,0,0.08)', width: '92%' }}>
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-light mb-1" style={{ color: '#4a5568', fontSize: '2.2rem' }}>Big problems need</h2>
            <h2 className="fw-bold mb-5" style={{ color: '#1a224a', fontSize: '2.8rem' }}>bold approaches</h2>

            <div className="d-flex flex-column gap-3 feature-nav-pills ps-1 pe-4">
              <button className="btn rounded-pill py-2 px-4 text-center text-white fw-medium shadow-sm active" 
                  style={{ backgroundColor: '#1472b8', border: '1px solid #1472b8' }}>Public Health</button>
              <button className="btn bg-white rounded-pill py-2 px-4 text-center fw-medium hover-scale" 
                  style={{ border: '1px solid #1472b8', color: '#1472b8' }}>Public Finance</button>
              <button className="btn bg-white rounded-pill py-2 px-4 text-center fw-medium hover-scale" 
                  style={{ border: '1px solid #1472b8', color: '#1472b8' }}>Local Governance</button>
              <button className="btn bg-white rounded-pill py-2 px-4 text-center fw-medium hover-scale" 
                  style={{ border: '1px solid #1472b8', color: '#1472b8' }}>Water & Sanitation</button>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-6 col-md-6 fade-in-up visible px-1 px-md-3">
                <div className="feature-card rounded-4 p-4 p-lg-5 position-relative overflow-hidden"
                    style={{ 
                        backgroundColor: '#50baba', 
                        backgroundImage: 'url(https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/ICU-Equipment.G16.2k-1-3.png)', 
                        backgroundSize: 'cover',
                        paddingBottom: '20px'
                    }}>
                  <h3 className="text-white fw-bold mb-1" style={{ fontSize: '3.2rem', lineHeight: 1 }}>210+</h3>
                  <p className="fw-normal mb-3 text-start" style={{ color: '#1a224a', fontSize: '0.95rem', maxWidth: '80%' }}>
                    cities LIVE with<br />10BedICU across<br />India
                  </p>
                  <a href="#" className="btn bg-white rounded-pill px-4 py-2 fw-medium mt-1 hover-scale shadow-sm" style={{ fontSize: '0.85rem', color: '#1a224a' }}>Read More</a>
                </div>
              </div>
              <div className="col-6 col-md-6 fade-in-up visible px-1 px-md-3" style={{ animationDelay: '0.2s' }}>
                <div className="feature-card rounded-4 p-4 p-lg-5 position-relative overflow-hidden"
                    style={{ 
                        backgroundColor: '#2b80ff', 
                        backgroundImage: 'url(https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/covid-vaccine-1.png)', 
                        backgroundSize: 'contain',
                        paddingBottom: '20px'
                    }}>
                  <h3 className="text-white fw-bold mb-1" style={{ fontSize: '3.2rem', lineHeight: 1 }}>2 Bn</h3>
                  <p className="fw-normal mb-3 text-start" style={{ color: '#1a224a', fontSize: '0.95rem', maxWidth: '70%' }}>
                    COVID-19 vaccination certificates issued
                  </p>
                  <a href="#" className="btn bg-white rounded-pill px-4 py-2 fw-medium mt-1 hover-scale shadow-sm" style={{ fontSize: '0.85rem', color: '#1a224a' }}>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
