import React, { useState } from 'react';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const videos = [
        { id: 1, title: "eGov's unique value to the world", duration: "0:16" },
        { id: 2, title: "Open source tech for impactful governance", duration: "0:16" },
        { id: 3, title: "A Truly Inclusive World through DIGIT", duration: "0:16" }
    ];

    return (
        <section className="py-5 bg-white border-top">
            <div className="container py-lg-5">
                <div className="row g-0 rounded-4 overflow-hidden shadow-lg bg-white border">
                    {/* Main Video Player */}
                    <div className="col-lg-8 position-relative">
                        <div className="ratio ratio-16x9">
                            <img 
                                src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/05/25112351/Leadership-Talks-.jpg" 
                                alt="Main Video" 
                                className="object-fit-cover"
                            />
                        </div>
                        {/* Overlay Styling to match '2nd image way' (YouTube Red Button) */}
                        <div className="position-absolute top-50 start-50 translate-middle cursor-pointer transition-all hover-scale" onClick={() => setIsPlaying(!isPlaying)}>
                            <div className="youtube-play-btn">
                                <svg width="68" height="48" viewBox="0 0 68 48"><path className="play-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0,34,0S12.21,0.13,6.9,1.55 c-2.93,0.78-4.63,3.26-5.42,6.19C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>
                            </div>
                        </div>

                        {/* Bottom branding bar */}
                        <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark d-flex justify-content-between align-items-center text-white">
                            <div className="small d-flex align-items-center gap-2">
                                <img src="https://egov.org.in/wp-content/uploads/2024/09/eGov-logo.png" alt="eGov" style={{ height: '24px', filter: 'brightness(0) invert(1)' }} />
                                <span>Watch on <strong>YouTube</strong></span>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="bi bi-share"></i>
                                <i className="bi bi-clock"></i>
                            </div>
                        </div>
                    </div>

                    {/* Playlist Sidebar */}
                    <div className="col-lg-4 bg-white border-start p-4">
                        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                            <h5 className="fw-bold m-0" style={{ color: '#0d6efd' }}>Leadership Talks</h5>
                            <span className="small text-muted">3 Videos</span>
                        </div>
                        <div className="d-flex flex-column gap-3">
                            {videos.map(video => (
                                <div key={video.id} className="d-flex gap-3 p-2 rounded hover-bg-light cursor-pointer transition-all">
                                    <div className="position-relative flex-shrink-0" style={{ width: '120px' }}>
                                        <div className="ratio ratio-16x9 rounded overflow-hidden">
                                            <img src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/05/25112351/Leadership-Talks-.jpg" alt="Thumb" className="object-fit-cover" />
                                        </div>
                                        <div className="position-absolute top-50 start-50 translate-middle">
                                            <div className="bg-white rounded-circle p-1 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px' }}>
                                                <i className="bi bi-play-fill text-danger fs-xs" style={{ fontSize: '10px' }}></i>
                                            </div>
                                        </div>
                                        <span className="position-absolute bottom-0 end-0 m-1 badge bg-black bg-opacity-75 fs-xs py-0 px-1">{video.duration}</span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="small fw-bold mb-0 lh-sm">{video.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .cursor-pointer { cursor: pointer; }
                .hover-bg-light:hover { background-color: #f8f9fa; }
                .bg-gradient-dark { background: linear-gradient(transparent, rgba(0,0,0,0.8)); }
                .fs-xs { font-size: 0.7rem; }
                .play-bg { transition: fill 0.3s ease; }
                .youtube-play-btn:hover .play-bg { fill: #212121; }
            `}</style>
        </section>
    );
};

export default VideoSection;
