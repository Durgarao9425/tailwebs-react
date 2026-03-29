import React from 'react';

const Testimonials = () => {
  return (
    <section className="content-section py-5 text-center bg-white fade-in-up visible">
      <div className="container-fluid px-4 px-lg-5">
        <h2 className="fw-normal mb-1">20 years of reimagining for citizens and</h2>
        <h2 className="fw-bold mb-4 position-relative d-inline-block">
          sustaining change
          <span className="highlight-brush"></span>
        </h2>

        <div className="row justify-content-center mb-5 mt-4">
          <div className="col-lg-8">
            <p className="text-secondary" style={{ lineHeight: 1.8 }}>
              Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the
              quality of life for every citizen. To have sustainable impact at scale, the collective energy of
              local networks to solve local problems needs to be tapped into. Our partners & networks
              bring this collective energy to life. The ecosystem already exists; our task is to facilitate
              and amplify their efforts. For 20 years, we've been turning small steps into lasting, meaningful
              change, so that no citizen is left behind.
            </p>
          </div>
        </div>

        <div className="row justify-content-center g-4 mt-2">
          <div className="col-md-5 col-lg-4 fade-in-up visible">
            <div className="testimonial-card rounded-4 overflow-hidden position-relative shadow-sm text-start hover-lift">
              <img src="https://egov.org.in/wp-content/themes/egov/assets/images/thumb-1.jpg"
                  alt="Testimonial Background" className="img-fluid w-100" />
              <div className="position-absolute bottom-0 start-0 w-100 p-4">
                <p className="text-primary fw-medium mb-0 bg-white d-inline-block rounded-top px-3 py-2 shadow-sm"
                    style={{ fontSize: '0.9rem' }}>
                  "Leveraging technology<br />for sustainable<br />development"
                  <i className="bi bi-play-circle-fill text-danger fs-5 ms-2 align-middle"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 fade-in-up visible" style={{ animationDelay: '0.2s' }}>
            <div className="testimonial-card rounded-4 overflow-hidden position-relative shadow-sm text-start hover-lift">
              <img src="https://egov.org.in/wp-content/themes/egov/assets/images/thumb-2.png"
                  alt="Testimonial Background" className="img-fluid w-100" />
              <div className="position-absolute bottom-0 start-0 w-100 p-4">
                <p className="text-primary fw-medium mb-0 bg-white d-inline-block rounded-top px-3 py-2 shadow-sm"
                    style={{ fontSize: '0.9rem' }}>
                  "Digitising civic<br />services for better life"
                  <i className="bi bi-play-circle-fill text-danger fs-5 ms-2 align-middle"></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3">
          <a href="#"
              className="btn btn-outline-secondary rounded-pill px-4 hover-scale bg-white text-dark shadow-sm">About
              Us</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
