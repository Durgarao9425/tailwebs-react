import React from 'react';

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-0 font-sans" style={{ backgroundColor: '#eaf4fc' }}>
      <div className="container-fluid px-4 px-lg-5">
        <div className="row mb-5">
          <div className="col-lg-4 mb-5 mb-lg-0 pe-lg-5">
            <img 
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png" 
              alt="eGov Foundation" 
              className="mb-4" 
              style={{ maxHeight: '40px' }} 
            />
            <p className="text-secondary small mb-4 w-75 lh-base">
              Catalysing digital transformation in<br />
              public service delivery at speed & scale.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="social-icon rounded-circle bg-transparent d-flex align-items-center justify-content-center hover-scale transition-all"
                 style={{ width: '40px', height: '40px', border: '1px solid #1a224a', color: '#1a224a' }}><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="social-icon rounded-circle bg-transparent d-flex align-items-center justify-content-center hover-scale transition-all"
                 style={{ width: '40px', height: '40px', border: '1px solid #1a224a', color: '#1a224a' }}><i className="bi bi-twitter-x fs-5"></i></a>
              <a href="#" className="social-icon rounded-circle bg-transparent d-flex align-items-center justify-content-center hover-scale transition-all"
                 style={{ width: '40px', height: '40px', border: '1px solid #1a224a', color: '#1a224a' }}><i className="bi bi-linkedin fs-5"></i></a>
              <a href="#" className="social-icon rounded-circle bg-transparent d-flex align-items-center justify-content-center hover-scale transition-all"
                 style={{ width: '40px', height: '40px', border: '1px solid #1a224a', color: '#1a224a' }}><i className="bi bi-youtube fs-5"></i></a>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 text-start">
            <h5 className="fw-bold mb-4 text-dark fs-5" style={{ color: '#1a224a' }}>Useful Links</h5>
            <div className="row g-0">
              <div className="col-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3 align-items-start">
                  <li><a href="#" className="text-secondary text-decoration-none small hover-underline">Home</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none small hover-underline">Our Impact</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none small hover-underline">DIGIT Sandbox</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3 align-items-start">
                  <li><a href="#" className="text-secondary text-decoration-none small hover-underline">Our People</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none small hover-underline">Financials</a></li>
                  <li><a href="#" className="text-secondary text-decoration-none small hover-underline">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-start mt-4 mt-lg-0">
            <h5 className="fw-bold mb-4 text-dark fs-5" style={{ color: '#1a224a' }}>Subscribe Now</h5>
            <p className="text-secondary small mb-3 lh-base">
              Receive regular updates of our monthly newsletter<br />
              DOT - in your inbox.
            </p>
            <form className="position-relative w-100 mt-2" style={{ maxWidth: '350px' }}>
              <div className="input-group shadow-sm">
                <input type="email" className="form-control py-2 ps-3 border-0 bg-white" placeholder="Enter Your Email" required style={{ borderRadius: '4px 0 0 4px' }} />
                <button type="submit" className="btn border-0 text-white px-3 hover-scale" style={{ backgroundColor: '#f27c22', borderRadius: '0 4px 4px 0' }}>
                  <i className="bi bi-envelope fs-5" style={{ verticalAlign: 'middle' }}></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3 position-relative" style={{ backgroundColor: 'rgb(20, 119, 189)' }}>
        <div className="container-fluid px-4 px-lg-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0 pt-1">
              <p className="mb-0 text-white fw-medium small">&copy;2024. eGov. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end pt-1 pe-md-5">
              <a href="#" className="text-white text-decoration-none small me-4 hover-opacity">Privacy Policy</a>
              <a href="#" className="text-white text-decoration-none small hover-opacity">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
