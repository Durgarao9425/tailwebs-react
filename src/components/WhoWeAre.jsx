import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="who-we-are-page bg-white pt-5">
      {/* Top Banner Image */}
      <div className="banner-container w-100 overflow-hidden" style={{ height: '450px', marginTop: '60px' }}>
        <img
          src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/Who-are-we.jpg"
          alt="eGov Team"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Internal Navigation Tabs */}
      <div className="container mt-5">
        <ul className="nav nav-tabs border-0 justify-content-center gap-4 mb-5" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
          <li className="nav-item">
            <a className="nav-link active border-0 border-bottom border-3 pb-3 bg-transparent"
              style={{ color: '#49EDD3', borderColor: '#49EDD3' }} href="#">WHO WE ARE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link border-0 text-dark pb-3 bg-transparent opacity-75 hover-opacity-100" href="#">OUR IMPACT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link border-0 text-dark pb-3 bg-transparent opacity-75 hover-opacity-100" href="#">OUR APPROACH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link border-0 text-dark pb-3 bg-transparent opacity-75 hover-opacity-100" href="#">OUR PEOPLE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link border-0 text-dark pb-3 bg-transparent opacity-75 hover-opacity-100" href="#">AWARDS & RECOGNITION</a>
          </li>
        </ul>

        {/* Vision Section */}
        <div className="vision-section text-center py-5">
          <div className="mb-4">
            <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/our_vission.png"
              alt="Vision Icon"
              style={{ width: '60px' }}
            />
          </div>
          <h2 className="display-4 fw-bold mb-4" style={{ color: '#1a224a' }}>
            Our <span style={{ color: '#1a224a' }}>Vision</span>
          </h2>
          <h3 className="display-5 text-info fw-bold mb-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.2' }}>
            Equitable, accessible & transparent public services for all.
          </h3>

          <p className="fs-5 text-muted mx-auto mb-5" style={{ maxWidth: '900px', lineHeight: '1.6' }}>
            We are eGov – a mission-driven, multi-disciplinary not-for-profit that cares deeply about ensuring that every citizen has access to timely, efficient & effective public services. For the last 20 years, we have been a catalyst for digital transformation working with partners and touching the lives of more than 1 Bn+ citizens across public services.
          </p>

          <h5 className="fw-bold text-dark mb-4">We do this through:</h5>

          {/* Action Cards */}
          <div className="row g-4 justify-content-center mb-5">
            {[
              "Our Open Source Platform - DIGIT & Products",
              "Enabling partners for implementations at speed & scale",
              "Advising governments for sustained digital transformation"
            ].map((text, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 rounded-4 h-100 d-flex align-items-center justify-content-center text-center shadow-sm border" style={{ backgroundColor: '#f8f9fa' }}>
                  <h6 className="fw-bold mb-0" style={{ color: '#1a224a', lineHeight: '1.4' }}>{text}</h6>
                </div>
              </div>
            ))}
          </div>

          <div className="platform-description mt-5 mx-auto py-4" style={{ maxWidth: '1000px' }}>
            <p className="fs-5 text-dark mb-4" style={{ lineHeight: '1.7' }}>
              Our platform DIGIT (Digital Infrastructure for Governance, Inclusion & Transformation) is an open-source platform, with reusable building blocks and shared data registries that helps local governments, market partners and NGOs build sectoral Digital Public Infrastructure (DPIs) at speed & scale.
            </p>
            <p className="fs-5 text-dark" style={{ lineHeight: '1.7' }}>
              Today, DIGIT is being leveraged to build products & solutions across urban and rural areas; running of sanitation operations for habitats; public health; public finance and justice among others. DIGIT is a certified Digital Public Good by the DPG Alliance.
            </p>
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="video-gallery-section py-5 mt-5">
          <div className="row g-4 d-flex align-items-stretch">
            {/* Main Video */}
            <div className="col-lg-8">
              <div className="position-relative rounded-0 overflow-hidden h-100 shadow-lg"
                style={{
                  backgroundImage: 'url("https://i.ytimg.com/vi/DEP21IngxvE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACpAWKAgwIABABGGUgVShSMA8=&rs=AOn4CLDTdvyepG73b6NohpOWdvVe5uTVfg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '450px'
                }}>
                {/* Premium Video Overlay (Resume Button) */}
                <div className="video-overlay" style={{ width: '70px', height: '70px', fontSize: '2rem' }}>
                  <i className="bi bi-pause-fill" style={{ color: '#1a224a' }}></i>
                </div>
                {/* Video Info Overlay */}
                <div className="position-absolute top-0 start-0 w-100 p-4 text-white" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-white rounded-circle p-1" style={{ width: '40px', height: '40px' }}>
                      <img src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png" alt="Logo" className="w-100 p-1" />
                    </div>
                    <h5 className="mb-0 fw-bold">Leadership Talks: Viraj Tyagi on eGov's unique value to the world</h5>
                  </div>
                </div>
                <div className="position-absolute bottom-0 end-0 p-4 text-white p-2 mb-2 me-2 rounded-2" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                  Watch on <span className="fw-bold">YouTube</span>
                </div>
              </div>
            </div>

            {/* Sidebar Videos */}
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 shadow-sm h-100">
                <div className="card-body p-0">
                  <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold text-primary">Leadership Talks</h5>
                    <span className="text-muted small">3 Videos</span>
                  </div>

                  {/* Video List Items */}
                  {[
                    { img: "https://egov.org.in/wp-content/uploads/2024/09/Viraj-Video-1.jpg", title: "eGov's unique value tc", time: "0:16" },
                    { img: "https://egov.org.in/wp-content/uploads/2024/09/Viraj-Video-2.jpg", title: "Open source tech for i", time: "0:16" },
                    { img: "https://egov.org.in/wp-content/uploads/2024/09/Gautham-Thumb.jpg", title: "A Truly Inclusive World", time: "0:16" }
                  ].map((v, i) => (
                    <div key={i} className="d-flex p-3 gap-3 align-items-center hover-bg-light cursor-pointer transition-all border-bottom border-light">
                      <div className="position-relative flex-shrink-0" style={{ width: '100px' }}>
                        <img src={v.img} alt={v.title} className="img-fluid rounded shadow-sm" />
                        <div className="video-overlay" style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                          <i className="bi bi-pause-fill" style={{ color: '#1a224a' }}></i>
                        </div>
                        <span className="position-absolute bottom-0 end-0 m-1 px-1 bg-dark text-white rounded small" style={{ fontSize: '10px' }}>{v.time}</span>
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <h6 className="mb-0 text-truncate fw-bold text-dark">{v.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
