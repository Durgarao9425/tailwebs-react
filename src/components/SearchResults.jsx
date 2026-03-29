import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';

    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({ code: 'ENG', name: 'English', flag: 'https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/en.svg' });

    const languages = [
        { code: 'AF', name: 'Afrikaans', flag: 'https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/af.svg' },
        { code: 'ENG', name: 'English', flag: 'https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/en.svg' },
        { code: 'FR', name: 'French', flag: 'https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/fr.svg' },
        { code: 'DE', name: 'German', flag: 'https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/de.svg' },
        { code: 'PT', name: 'Portuguese', flag: 'https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/pt.svg' },
        { code: 'RU', name: 'Russian', flag: 'https://egov.org.in/wp-content/plugins/gtranslate/flags/svg/ru.svg' }
    ];

    const queryLower = query.toLowerCase();
    const hasOdisha = queryLower.includes('odisha') || queryLower.includes('urban') || queryLower.includes('digital') || queryLower.includes('state');

    return (
        <div className="search-results-page pt-5 mt-5">
            <div className="container py-5">
                <div className="rounded-4 p-5 mb-5 text-white shadow-sm" style={{ backgroundColor: '#4ed5c6' }}>
                    <h1 className="display-4 fw-bold mb-3">Search Results Found For: "{query}"</h1>
                    <p className="fs-5 opacity-90 mb-0">Total Results Found :- {hasOdisha ? 1 : 0}</p>
                </div>

                <div className="row g-4 pt-4">
                    {hasOdisha ? (
                        <div className="col-lg-4 col-md-6">
                            <div className="search-card rounded-4 overflow-hidden shadow-sm bg-white h-100 transition-all hover-lift">
                                <div className="position-relative">
                                    <img 
                                        src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/09/Odisha-Blog-1.jpg" 
                                        alt="Result" 
                                        className="w-100 object-fit-cover"
                                        style={{ height: '240px' }}
                                    />
                                    <span className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-orange text-white rounded-pill small fw-bold" style={{ backgroundColor: '#f6931d' }}>
                                        Whitepaper
                                    </span>
                                </div>
                                <div className="dropdown custom-lang-dropdown">
                                    <div className="language-selector d-flex align-items-center cursor-pointer fw-medium text-primary p-3" 
                                       onClick={() => setIsLangOpen(!isLangOpen)}>
                                         <img src={selectedLang.flag} alt="Flag" style={{ width: '20px', marginRight: '6px' }} />
                                         {selectedLang.code}
                                         <i className={`bi bi-chevron-down ms-1 transition-all ${isLangOpen ? 'rotate-180' : ''}`} style={{ fontSize: '10px' }}></i>
                                    </div>
                                    {isLangOpen && (
                                        <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg mt-2 rounded-3 text-start d-block" 
                                            style={{ position: 'absolute', right: 0, minWidth: '160px', top: '100%', zIndex: 1000 }}>
                                            {languages.map((lang) => (
                                                <li key={lang.code}>
                                                    <div className="dropdown-item py-2 px-3 fw-normal d-flex align-items-center cursor-pointer hover-bg-light" 
                                                         onClick={() => { setSelectedLang(lang); setIsLangOpen(false); }}>
                                                        <img src={lang.flag} alt={lang.name} style={{ width: '20px', marginRight: '10px' }} /> {lang.name}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {['Odisha', 'Kerala', 'Local Governance', 'Andhra Pradesh', 'Punjab'].map(tag => (
                                            <span key={tag} className="badge bg-light text-muted fw-normal px-3 py-2 rounded-pill" style={{ fontSize: '0.75rem' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <h4 className="fw-bold mb-0" style={{ color: '#1a224a', lineHeight: '1.4' }}>
                                        State-led Urban Digital Transformation: Lessons from Odisha
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-12 py-5 text-center">
                            <i className="bi bi-search display-1 text-muted opacity-25 mb-4 d-block"></i>
                            <h3 className="text-muted fw-light">No matching records found.</h3>
                            <p className="text-muted">Try searching with different keywords like 'Odisha', 'Urban', or 'Digital'.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
