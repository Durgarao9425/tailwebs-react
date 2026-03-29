import React, { useEffect } from 'react';

const LocalGovernance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teal = '#49EDD3';
    const darkBlue = '#1a224a';

    const products = [
        {
            title: 'Property Tax System',
            desc: 'A self-serve facility for citizens and local government employees that provides easy tax assessment and payment services in real-time.',
            icon: 'bi-house-heart'
        },
        {
            title: 'Citizen Complaint Resolution System',
            desc: 'A self-serve web and mobile based, easy-to-use and configurable product that offers prompt solution for effective resolution of civic complaints for citizens.',
            icon: 'bi-people'
        },
        {
            title: 'Local Business License Issuing System',
            desc: 'A facility for traders to obtain the trade certificate in a simplified manner and to ensure compliance with rules and safety guidelines.',
            icon: 'bi-file-earmark-check'
        },
        {
            title: 'Birth & Death Certificate Issuance System',
            desc: 'A self-serve portal for citizens to download birth or death certificates and pay for the services online',
            icon: 'bi-journal-medical'
        },
        {
            title: 'Water & Sewerage Connections',
            desc: 'Enables citizens to apply for new connections, monitor bills, while supporting local governments in efficiently managing requests, billing, and revenue collection- all from one place.',
            icon: 'bi-droplet'
        },
        {
            title: 'Works Management System',
            desc: 'A product to manage the entire lifecycle of public works projects, from initial planning and design to construction, operation, and maintenance, in compliance with relevant rules.',
            icon: 'bi-currency-rupee'
        }
    ];

    return (
        <div className="local-governance-page overflow-hidden">
            {/* Hero Section */}
            <section className="position-relative pt-5 mt-5" style={{ minHeight: '85vh', background: 'url("https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/bg-banner-scaled.jpg") center/cover no-repeat' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 className="text-secondary fw-normal mb-3" style={{ letterSpacing: '2px' }}>Local Governance</h5>
                            <h1 className="display-3 fw-bold mb-4" style={{ color: darkBlue }}>
                                Ease of living for every citizen. <span className="position-relative" style={{ zIndex: 1 }}>It's possible.<span style={{ position: 'absolute', bottom: '8px', left: '-5px', width: 'calc(100% + 10px)', height: '15px', backgroundColor: 'rgba(73, 237, 211, 0.2)', zIndex: -1, borderRadius: '20px' }}></span></span>
                            </h1>
                            <p className="fs-5 text-muted mb-5 lh-lg" style={{ maxWidth: '550px' }}>
                                For the past 20 years, we’ve been working as an ecosystem to address specific societal challenges and streamline governance mechanisms that enable ease of living for citizens and meeting SDG charters – at scale and with speed.
                            </p>
                            <button className="btn px-5 py-3 rounded-pill fw-bold transition-all shadow-sm" style={{ backgroundColor: '#bcece1', color: darkBlue }}>
                                Explore Product Suite
                            </button>
                        </div>
                        <div className="col-lg-6 position-relative text-center mt-5 mt-lg-0">
                            <img
                                src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/Local-Governance-New-copy.png"
                                alt="Local Governance"
                                className="img-fluid position-relative z-1"
                                style={{ maxHeight: '600px' }}
                            />
                            {/* SDG Icons Simulation */}
                            <div className="position-absolute top-0 end-0 d-flex flex-column gap-2 pe-lg-5 pt-lg-4">
                                <div className="p-2 rounded bg-primary text-white small d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: '#00689d !important' }}>17</div>
                                <div className="p-2 rounded bg-warning text-white small d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: '#f99d26 !important' }}>9</div>
                                <div className="p-2 rounded bg-danger text-white small d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: '#e5243b !important' }}>11</div>
                                <div className="p-2 rounded bg-info text-white small d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: '#4c9f38 !important' }}>16</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why it Matters */}
            <section className="py-5" style={{ backgroundColor: '#fff' }}>
                <div className="container py-5">
                    <h2 className="display-5 fw-normal mb-5">Why it <span className="fw-bold" style={{ color: darkBlue }}>Matters</span></h2>
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="rounded-4 p-4 p-lg-0 d-flex align-items-center overflow-hidden" style={{ backgroundColor: '#bcece1', height: '100%', minHeight: '340px' }}>
                                <div className="row align-items-end h-100 g-0">
                                    <div className="col-md-5">
                                        <img src="https://egov.org.in/wp-content/uploads/2024/10/left-img.png" alt="Matter" className="img-fluid w-100" />
                                    </div>
                                    <div className="col-md-7 p-4 p-lg-5">
                                        <h3 className="display-4 fw-bold mb-3" style={{ color: darkBlue }}>2.5 Bn+</h3>
                                        <p className="fs-5 text-muted lh-base">more people will live in cities by 2050, with most growth occurring in Asia and Africa</p>
                                        <p className="small text-muted mt-4">Source: OECD Survey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-4 p-4 p-lg-5 d-flex flex-column justify-content-between text-white shadow-sm position-relative overflow-hidden" style={{ backgroundColor: darkBlue, minHeight: '340px' }}>
                                <div className="position-relative z-1">
                                    <h3 className="display-5 fw-bold mb-4">25%+</h3>
                                    <p className="opacity-90 lh-lg" style={{ fontSize: '0.95rem' }}>Implementing digital platforms for tax collection and fee management can increase local government revenue by 25%+, as it reduces leakage and enhances compliance</p>
                                    <p className="small opacity-50 mb-0 mt-3">Source: OECD Survey</p>
                                </div>
                                <img
                                    src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/coins.png"
                                    alt="Revenue"
                                    className="position-absolute"
                                    style={{ bottom: '-10px', right: '0px', width: '180px', zIndex: 0 }}
                                />
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="rounded-4 p-0 overflow-hidden" style={{ backgroundColor: '#eaf4fc', minHeight: '300px' }}>
                                <div className="row align-items-center g-0">
                                    <div className="col-lg-8 p-4 p-lg-5">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <h3 className="display-4 fw-bold me-lg-5 mb-0" style={{ color: darkBlue }}>70%</h3>
                                            <p className="fs-5 text-muted lh-base mb-0 flex-grow-1" style={{ maxWidth: '450px' }}>of citizens reported improved satisfaction with public services delivered through digital platforms, as they offer greater convenience and accessibility.</p>
                                        </div>
                                        <p className="small text-muted mt-4">Source: OECD Survey</p>
                                    </div>
                                    <div className="col-lg-4 text-end">
                                        <img src="https://egov.org.in/wp-content/uploads/2024/10/right-img-3.png" alt="Impact" className="img-fluid" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section className="py-5" style={{ background: 'url("https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/testimonial-bg-scaled.jpg") center/cover no-repeat' }}>
                <div className="container py-5 text-white">
                    <h2 className="display-5 fw-normal mb-5">Our <span className="fw-bold">Testimonials</span></h2>
                    <div id="govTestimonials" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="col-lg-10">
                                    <p className="fs-3 fw-light mb-5 lh-base italic" style={{ borderLeft: `4px solid ${teal}`, paddingLeft: '30px' }}>
                                        "EGov has been a transformative partner in our digitization journey. Their platform has not only increased our revenue but also significantly improved citizen trust through transparent service delivery."
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img src="https://egov.org.in/wp-content/uploads/2024/09/Ajoy-IAS-300x300.png" alt="Ajoy" className="rounded-circle me-4" style={{ width: '100px', height: '100px', border: '3px solid rgba(255,255,255,0.2)' }} />
                                        <div>
                                            <h4 className="fw-bold mb-1">Ajoy Mehta (IAS)</h4>
                                            <p className="mb-0 opacity-75">Former Municipal Commissioner of Mumbai</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-lg-10">
                                    <p className="fs-3 fw-light mb-5 lh-base italic" style={{ borderLeft: `4px solid ${teal}`, paddingLeft: '30px' }}>
                                        "The speed at which we could deploy local governance modules using eGov's DPG was unprecedented. It has set a new benchmark for scalable digital infrastructure."
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img src="https://egov.org.in/wp-content/uploads/2024/09/Barik-300x300.png" alt="Barik" className="rounded-circle me-4" style={{ width: '100px', height: '100px', border: '3px solid rgba(255,255,255,0.2)' }} />
                                        <div>
                                            <h4 className="fw-bold mb-1">Amitabh Barik</h4>
                                            <p className="mb-0 opacity-75">Urban Planning Consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-indicators position-relative justify-content-start mt-5 ms-0">
                            <button type="button" data-bs-target="#govTestimonials" data-bs-slide-to="0" className="active rounded-circle m-0 me-2" style={{ width: '12px', height: '12px' }}></button>
                            <button type="button" data-bs-target="#govTestimonials" data-bs-slide-to="1" className="rounded-circle m-0 me-2" style={{ width: '12px', height: '12px' }}></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Suite */}
            <section className="py-5" style={{ backgroundColor: '#f8fbff' }}>
                <div className="container py-5">
                    <h2 className="display-5 fw-normal mb-5 text-center">Our Local Governance <span className="fw-bold" style={{ color: darkBlue }}>Product Suite</span></h2>
                    <div className="row g-4 mt-2">
                        {products.map((item, idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <div className="p-5 rounded-4 bg-white h-100 shadow-sm transition-all hover-lift" style={{ border: '1px solid #eaf4fc' }}>
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <h5 className="fw-bold mb-0" style={{ color: darkBlue, maxWidth: '200px', lineHeight: '1.4' }}>{item.title}</h5>
                                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', backgroundColor: '#eaf4fc' }}>
                                            <i className={`bi ${item.icon} fs-4`} style={{ color: '#4ed5c6' }}></i>
                                        </div>
                                    </div>
                                    <p className="text-muted small mb-5 lh-lg">{item.desc}</p>
                                    <button className="btn btn-outline-primary border-0 fw-bold px-0 text-primary">Explore</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-5 bg-white">
                <div className="container py-5 text-center">
                    <h2 className="display-5 fw-normal mb-5">Our <span className="fw-bold" style={{ color: darkBlue }}>Impact</span></h2>
                    <div className="row g-4 justify-content-center mb-5 pb-5">
                        <div className="col-6 col-md-3">
                            <h2 className="display-4 fw-bold" style={{ color: teal }}>18</h2>
                            <p className="small text-muted">reference applications built</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-4 fw-bold" style={{ color: teal }}>250 Mn</h2>
                            <p className="small text-muted">citizens impacted</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-4 fw-bold" style={{ color: teal }}>3.5 Mn</h2>
                            <p className="small text-muted">grievances resolved</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-4 fw-bold" style={{ color: teal }}>150 Mn</h2>
                            <p className="small text-muted">revenue generated</p>
                        </div>
                    </div>
                </div>

                <div className="logo-ticker-container">
                    <div className="logo-ticker-track">
                        {[
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/NIUA_Logo_new.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_02-2.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/Kopi-av-DPGA_color_m.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_05-2.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/NIUA_Logo_new.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_02-2.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/Kopi-av-DPGA_color_m.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_05-2.png'
                        ].concat([
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/NIUA_Logo_new.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_02-2.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/Kopi-av-DPGA_color_m.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_05-2.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/NIUA_Logo_new.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_02-2.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/Kopi-av-DPGA_color_m.png',
                            'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/logos-implementation-partners_05-2.png'
                        ]).map((logo, i) => (
                            <div className="logo-ticker-item" key={i}>
                                <img src={logo} alt="Partner" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocalGovernance;
