import React from 'react';

const Supporters = () => {
  const logos = [
    "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/Group-20708-1.png",
    "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-4.png",
    "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-3.png",
    "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-2.png",
    "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-1.png"
  ];

  return (
    <section className="supporters-section py-5 bg-white text-center fade-in-up visible">
      <div className="container-fluid px-4 px-lg-5">
        <h2 className="mb-5 text-center d-flex align-items-center justify-content-center">
            <span className="text-secondary fw-normal me-2">Our</span>
            <span className="fw-bold" style={{ color: '#1a224a' }}>Supporters</span>
        </h2>

        <div className="row align-items-center justify-content-center g-3 g-lg-5 grayscale-logos">
          {logos.map((logo, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <img src={logo} alt={`Supporter ${index + 1}`} 
                  className="img-fluid transition-all" 
                  style={{ 
                      filter: 'grayscale(100%)', 
                      opacity: 0.6, 
                      transition: 'all 0.3s ease',
                      maxHeight: '60px',
                      objectFit: 'contain'
                  }} 
                  onMouseOver={(e) => {e.target.style.filter = 'grayscale(0%)'; e.target.style.opacity = '1';}}
                  onMouseOut={(e) => {e.target.style.filter = 'grayscale(100%)'; e.target.style.opacity = '0.6';}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
