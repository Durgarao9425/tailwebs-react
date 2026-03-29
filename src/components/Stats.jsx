import React, { useState, useEffect } from 'react';

const Stats = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 81) {
                    clearInterval(interval);
                    return 81;
                }
                return prev + 1;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const fullNumber = `1,000,000,${count.toString().padStart(3, '0')}`;

    return (
        <section className="stats-section bg-img-2 position-relative py-5">
            {/* Overlay is now handled by .bg-img-2::before in index.css */}
            
            <div className="container position-relative z-1 py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-8">
                        <h2 className="display-2 fw-bold text-white mb-0" style={{ letterSpacing: '-2px' }}>
                            {fullNumber}+
                        </h2>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                        <p className="text-white fs-5 fw-light lh-sm mb-0">
                            Citizens availing public services through eGov's Digital Public Goods (DPG)
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-3">
                    <div className="col-md-6 border-start border-white border-2 ps-4 mb-4 mb-md-0 d-flex flex-column justify-content-center">
                        <h2 className="text-white fw-bold display-4 mb-1">1.1 Billion+</h2>
                        <p className="text-white fs-5 opacity-75 mb-0">Public services delivered</p>
                    </div>
                    <div className="col-md-6 border-start border-white border-2 ps-4 d-flex flex-column justify-content-center">
                        <h2 className="text-white fw-bold display-4 mb-1">50+ partners</h2>
                        <p className="text-white fs-5 opacity-75 mb-0">From technology, governments and NGOs</p>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .stats-section {
                    background: url("https://egov.org.in/wp-content/themes/egov/assets/images/home-2sec.jpeg") center center / cover no-repeat;
                    min-height: 500px;
                }
            ` }} />
        </section>
    );
};

export default Stats;
