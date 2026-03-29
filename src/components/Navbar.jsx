import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Color tokens
    const teal = '#49EDD3';
    const darkBlue = '#1a224a';

    const closeMenu = () => {
        // Handle mobile collapse
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
        
        // Handle Bootstrap dropdowns
        const openDropdowns = document.querySelectorAll('.dropdown-menu.show, .dropdown-toggle.show');
        openDropdowns.forEach(el => {
            el.classList.remove('show');
            if (el.hasAttribute('aria-expanded')) {
                el.setAttribute('aria-expanded', 'false');
            }
        });
        
        const parentDropdowns = document.querySelectorAll('.nav-item.dropdown.show');
        parentDropdowns.forEach(el => el.classList.remove('show'));
    };

    return (
        <header className={`fixed-top w-100 transition-all bg-white mainHeader ${isScrolled ? 'header-scrolled shadow-sm' : ''}`}>
            {/* Top Bar - Functional Language Selector */}
            <div className={`top-bar pb-1 bg-white transition-all border-bottom ${isScrolled ? 'd-none' : ''}`}>
                <div className="container d-flex justify-content-end align-items-center py-2" style={{ fontSize: '0.85rem' }}>
                    <a href="#" className="text-primary text-decoration-none fw-medium me-4 hover-opacity">Events</a>
                    <a href="#" className="text-primary text-decoration-none fw-medium me-4 hover-opacity">Contact us</a>
                    
                    <div className="dropdown">
                        <span className="language-selector d-flex align-items-center cursor-pointer fw-medium dropdown-toggle nav-link p-0 text-primary no-arrow" 
                              id="topLangDropdown" data-bs-toggle="dropdown">
                             <img src="https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/en.svg" 
                                  alt="UK Flag" style={{ width: '20px', marginRight: '6px' }} />
                             ENG
                        </span>
                        <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg mt-2 rounded-0 border-top-teal overflow-hidden text-start" aria-labelledby="topLangDropdown">
                            <li><a className="dropdown-item py-2 px-3 fw-bold active" href="#"><span className="flag me-2">🇬🇧</span> English</a></li>
                            <li><a className="dropdown-item py-2 px-3 fw-normal" href="#"><span className="flag me-2">🇿🇦</span> Afrikaans</a></li>
                            <li><a className="dropdown-item py-2 px-3 fw-normal" href="#"><span className="flag me-2">🇫🇷</span> French</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light py-2 header-nav">
                <div className="container">
                    <Link to="/">
                      <img src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png" alt="eGov" style={{ maxHeight: '45px' }} />
                    </Link>
                    
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <i className="bi bi-list fs-1" style={{ color: darkBlue }}></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-dark fw-medium d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                                    About Us
                                </a>
                                <ul className="dropdown-menu border-0 shadow-lg mt-0 py-3 rounded-0 border-top-teal">
                                    <li><Link className="dropdown-item py-2 px-4" to="/who-we-are" onClick={closeMenu}>Who We Are</Link></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Our Impact</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Our Approach</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Our People</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Awards & Recognition</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Work with us</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Contact Us</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-dark fw-medium d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                                    Areas of work
                                </a>
                                <ul className="dropdown-menu border-0 shadow-lg mt-0 py-3 rounded-0 border-top-teal">
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Local Governance</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Water & Sanitation</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Public Health</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Public Finance</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Justice Delivery</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Other Sectors</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mega-menu px-2">
                                <a className="nav-link dropdown-toggle text-dark fw-medium d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                                    Products & Solutions
                                </a>
                                <div className="mega-menu-content dropdown-menu p-0 border-0 shadow-lg rounded-0 border-top-teal" style={{ width: '100vw', left: '50%', transform: 'translateX(-50%)', marginTop: '0' }}>
                                    <div className="container-fluid px-5 py-4">
                                        <div className="row g-4">
                                            <div className="col-lg-3 py-3" style={{ backgroundColor: '#f0f9ff', minHeight: '100%' }}>
                                                <h6 className="fw-bold mb-4 px-3" style={{ color: teal, letterSpacing: '1px', fontSize: '0.75rem' }}>AREAS OF WORK</h6>
                                                <ul className="list-unstyled">
                                                    <li><a href="#" className="dropdown-item py-2 px-3 bg-transparent border-0 text-dark fw-medium">Local Governance</a></li>
                                                    <li><a href="#" className="dropdown-item py-2 px-3 bg-transparent border-0 text-dark fw-medium">Public Health</a></li>
                                                    <li><a href="#" className="dropdown-item py-2 px-3 bg-transparent border-0 text-dark fw-medium">Public Finance</a></li>
                                                    <li><a href="#" className="dropdown-item py-2 px-3 bg-transparent border-0 text-dark fw-medium">Water & Sanitation</a></li>
                                                    <li><a href="#" className="dropdown-item py-2 px-3 bg-transparent border-0 text-dark fw-medium">Justice Delivery</a></li>
                                                    <li><a href="#" className="dropdown-item py-2 px-3 bg-transparent border-0 text-dark fw-medium">Other Sectors</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-5 py-3">
                                                <h6 className="fw-bold mb-4" style={{ color: '#333', letterSpacing: '1px', fontSize: '0.75rem' }}>CITIZEN & COMMERCIAL SERVICES</h6>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul className="list-unstyled">
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Citizen Complaint Resolution System</a></li>
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Residential Construction Permit System</a></li>
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Water & Sewerage Connections</a></li>
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Local Business License Issuing System</a></li>
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Birth & Death Certificate Issuance</a></li>
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Fire Safety Certification (NOC)</a></li>
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Dashboards & Analytics</a></li>
                                                            <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }}>Works Management</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 py-3">
                                                <h6 className="fw-bold mb-4" style={{ color: '#333', letterSpacing: '1px', fontSize: '0.75rem' }}>REVENUE MOBILISATION</h6>
                                                <ul className="list-unstyled">
                                                    <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }} onClick={closeMenu}>Property Tax System</a></li>
                                                    <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }} onClick={closeMenu}>mCollect (demand based revenue collection)</a></li>
                                                    <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }} onClick={closeMenu}>Water Supply O&M System</a></li>
                                                    <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }} onClick={closeMenu}>Residential Construction Permit System</a></li>
                                                    <li><a href="#" className="dropdown-item py-1 px-0 bg-transparent border-0 text-dark" style={{ fontSize: '0.9rem' }} onClick={closeMenu}>Local Business License Issuing System</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-dark fw-medium d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" onClick={closeMenu}>
                                    Our Platform
                                </a>
                                <ul className="dropdown-menu border-0 shadow-lg mt-0 py-3 rounded-0 border-top-teal">
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>DIGIT</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-dark fw-medium d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" onClick={closeMenu}>
                                    Ecosystem
                                </a>
                                <ul className="dropdown-menu border-0 shadow-lg mt-0 py-3 rounded-0 border-top-teal">
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Partners</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Developers</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Community</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-dark fw-medium d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" onClick={closeMenu}>
                                    Resources
                                </a>
                                <ul className="dropdown-menu border-0 shadow-lg mt-0 py-3 rounded-0 border-top-teal">
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Articles</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Whitepapers</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Strategy papers</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Case Studies</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>News & Media</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Videos</a></li>
                                    <li><a className="dropdown-item py-2 px-4" href="#" onClick={closeMenu}>Newsletters</a></li>
                                </ul>
                            </li>
                            <li className="nav-item ms-lg-3 d-none d-lg-flex align-items-center ps-3 position-relative">
                                <i className="bi bi-search cursor-pointer fs-5" 
                                   onClick={() => setShowSearch(true)}
                                   style={{ color: 'black', fontWeight: '800' }}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* FULLSCREEN SEARCH OVERLAY (MATCHING REF IMAGE) */}
            {showSearch && (
                <div className="fullscreen-search-overlay fade-in-up visible">
                    <div className="search-close-btn" onClick={() => setShowSearch(false)}>
                        <i className="bi bi-x-lg"></i>
                    </div>
                    <div className="search-input-container">
                        <input 
                            type="text" 
                            className="search-input-field" 
                            placeholder="Search..." 
                            autoFocus 
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
