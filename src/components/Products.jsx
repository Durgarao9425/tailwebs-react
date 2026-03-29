import React, { useState, useEffect } from 'react';
import { products as dummyProducts } from '../data/products';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', "What's New", 'Articles', 'Whitepapers', 'Case Studies', 'Strategy Papers', 'News & Media', 'Videos', 'Newsletter'];

  const filteredProducts = (dummyProducts || []).filter(product => {
    const matchesSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <section className="blog-section py-5 my-5 bg-white">
      <div className="container px-4 px-lg-5">
        <h2 className="mb-5">
          <span className="text-secondary fw-normal fs-1">Latest at</span>
          <span className="fw-bold text-dark ms-2 fs-1">eGov</span>
        </h2>

        {/* Filter Controls */}
        <div className="row mb-5 g-3 align-items-center">
            <div className="col-lg-12">
            <div className="d-flex flex-wrap gap-2">
                {categories.map(category => (
                <button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(category);
                        setShowAll(false);
                    }}
                    className={`btn rounded-pill px-4 py-2 shadow-none transition-all fw-medium ${
                    selectedCategory === category 
                        ? 'btn-info text-white' 
                        : 'btn-outline-secondary'
                    }`}
                    style={selectedCategory === category 
                        ? { backgroundColor: '#49EDD3', borderColor: '#49EDD3', borderWidth: '2px' } 
                        : { borderColor: '#e2e8f0', color: '#4a5568', borderWidth: '2px' }}
                >
                    {category}
                </button>
                ))}
            </div>
            </div>
            <div className="col-lg-6 mt-4">
            <div className="input-group rounded-pill overflow-hidden border">
                <span className="input-group-text bg-white border-0 ps-3">
                <i className="bi bi-search text-muted"></i>
                </span>
                <input
                type="text"
                className="form-control border-0 py-2"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            </div>
        </div>

        <div className="row g-4 mb-5">
            {displayProducts.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden testimonial-card">
                    <div className="position-relative">
                        <img 
                            src={product.image} 
                            className="card-img-top" 
                            alt={product.name} 
                            style={{ height: '220px', objectFit: 'cover' }}
                        />
                        {product.isVideo && (
                            <div className="video-overlay">
                                <i className="bi bi-play-fill"></i>
                            </div>
                        )}
                    </div>
                    <div className="card-body d-flex flex-column p-4 bg-white">
                        <h5 className="card-title fw-bold text-dark mb-3" style={{ fontSize: '1.2rem' }}>{product.name}</h5>
                        <div className="product-meta d-flex align-items-center mb-4 text-muted" style={{ fontSize: '0.85rem' }}>
                            <span>• {product.author}</span>
                            <span className="mx-2">•</span>
                            <span>{product.date}</span>
                        </div>
                        <div className="d-flex flex-wrap gap-2 mt-auto">
                            {product.tags?.map(tag => (
                                <span key={tag} className="badge bg-light text-dark fw-normal px-2 py-1">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            ))}
            {displayProducts.length === 0 && (
                <div className="col-12 text-center py-5">
                    <h3 className="text-muted">No Resources Found</h3>
                </div>
            )}
        </div>

        {!showAll && filteredProducts.length > 6 && (
            <div className="text-center">
            <button 
                onClick={() => setShowAll(true)}
                className="btn btn-info rounded-pill px-5 py-3 text-white shadow-sm hover-scale"
                style={{ backgroundColor: '#49EDD3', borderColor: '#49EDD3' }}>
                See all
            </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Products;
