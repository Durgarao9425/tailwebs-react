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
        <section className="stats-section bg-img-2 position-relative py-5 overflow-hidden" style={{ minHeight: '650px' }}>
            <div className="container position-relative z-1 h-100 d-flex flex-column justify-content-between py-5" style={{ minHeight: '550px' }}>
                {/* Top Row: Split Layout */}
                <div className="row align-items-start text-center text-lg-start">
                    <div className="col-lg-8">
                        <h2 className="text-white fw-bold mb-0 text-style-1 lh-1" style={{ fontSize: '6rem', letterSpacing: '-4px' }}>
                            {fullNumber}+
                        </h2>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-lg-end pt-4 pt-lg-2">
                        <p className="text-white fw-normal lh-sm mb-0 fs-16 fs-12-sm text-lg-start" style={{ maxWidth: '280px', fontSize: '1.15rem' }}>
                            Citizens availing public services through eGov's Digital Public Goods (DPG)
                        </p>
                    </div>
                </div>

                {/* Bottom Row: Spread Layout */}
                <div className="row g-4 text-center text-md-start mt-auto">
                    <div className="col-6 col-md-auto pe-lg-5 mb-0 d-flex flex-column justify-content-end">
                        <h3 className="text-white fw-light mb-1 fs-40 fs-30-sm" style={{ fontSize: '2.8rem' }}>
                            <span className="me-1">1.1</span> <span className="fw-300">Billion+</span>
                        </h3>
                        <p className="text-white fs-16 fs-12-sm opacity-75 mb-0 fw-light">Public services delivered</p>
                    </div>
                    <div className="col-6 col-md-auto ps-lg-5 d-flex flex-column justify-content-end">
                        <h3 className="text-white fw-light mb-1 fs-40 fs-30-sm" style={{ fontSize: '2.8rem' }}>
                            <span className="me-1">50+</span> <span className="fw-300">partners</span>
                        </h3>
                        <p className="text-white fs-16 fs-12-sm opacity-75 mb-0 fw-light">From technology, governments and NGOs</p>
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
