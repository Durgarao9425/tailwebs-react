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

        <div className="d-flex flex-nowrap flex-lg-wrap align-items-center justify-content-center justify-content-lg-between px-lg-5 g-2 g-lg-4 grayscale-logos overflow-hidden">
          {logos.map((logo, index) => (
            <div key={index} className="px-2 px-lg-3">
              <img src={logo} alt={`Supporter ${index + 1}`} 
                  className="img-fluid transition-all supporter-logo-web supporter-logo-mobile-fix" 
                  style={{ 
                      filter: 'grayscale(100%)', 
                      opacity: 0.9, 
                      transition: 'all 0.4s ease',
                      maxHeight: '40px', /* Small for mobile 'one line' look */
                      maxWidth: '80px',
                      width: 'auto',
                      objectFit: 'contain'
                  }} 
                  onMouseOver={(e) => {e.target.style.filter = 'grayscale(0%)'; e.target.style.opacity = '1'; e.target.style.transform = 'scale(1.08)';}}
                  onMouseOut={(e) => {e.target.style.filter = 'grayscale(100%)'; e.target.style.opacity = '0.9'; e.target.style.transform = 'scale(1)';}}
              />
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 768px) {
                .supporter-logo-mobile-fix {
                    max-height: 130px !important;
                    max-width: 220px !important;
                }
            }
        ` }} />
      </div>
    </section>
  );
};

export default Supporters;
