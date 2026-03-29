import React, { useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [dynamicCategories, setDynamicCategories] = useState(['All']);

  // Hook handles loading state, search filtering, and remote API logic
  const { products, loading } = useProducts(selectedCategory, searchTerm);

  // Dynamically extract categories from the fetched data
  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const resp = await fetch('https://dummyjson.com/products/categories');
            const cats = await resp.json();
            // Take the first 8 categories for a clean UI
            const catNames = cats.slice(0, 8).map(c => typeof c === 'string' ? c : c.name);
            setDynamicCategories(['All', ...catNames]);
        } catch (e) {
            setDynamicCategories(['All', 'Smartphones', 'Laptops', 'Fragrances', 'Skincare', 'Groceries', 'Home-decoration', 'Furniture', 'Tops']);
        }
    };
    fetchCategories();
  }, []);

  const displayProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="blog-section py-5 my-5 bg-white">
      <div className="container px-4 px-lg-5">
        <h2 className="mb-5">
          <span className="text-secondary fw-normal fs-1">Latest</span>
          <span className="fw-bold text-dark ms-2 fs-1">Products</span>
        </h2>

        {/* Filter Controls (Real API Data) */}
        <div className="row mb-5 g-3 align-items-center">
            <div className="col-lg-12">
            <div className="d-flex flex-wrap gap-2">
                {dynamicCategories.map(category => (
                <button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(category);
                        setShowAll(false);
                    }}
                    className={`btn rounded-pill px-4 py-2 shadow-none transition-all fw-medium text-capitalize ${
                    selectedCategory.toLowerCase() === category.toLowerCase() 
                        ? 'btn-info text-white' 
                        : 'btn-outline-secondary'
                    }`}
                    style={selectedCategory.toLowerCase() === category.toLowerCase() 
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
                placeholder="Search products by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            </div>
        </div>

        {/* Loading State (Bonus Requirement) */}
        {loading ? (
            <div className="row justify-content-center py-5">
                <div className="col-auto text-center">
                    <div className="spinner-border text-info" style={{ width: '3rem', height: '3rem', color: '#49EDD3' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 text-muted fw-bold">Connecting to Dummy API...</p>
                </div>
            </div>
        ) : (
            <div className="row g-4 mb-5">
                {/* Product Cards (API Managed) */}
                {displayProducts.map((product) => (
                <div key={product.id} className="col-md-6 col-lg-4">
                    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden testimonial-card hover-lift transition-all">
                        <div className="position-relative">
                            <img 
                                src={product.image} 
                                className="card-img-top" 
                                alt={product.name} 
                                style={{ height: '220px', objectFit: 'cover' }}
                            />
                            {/* Price Badge (Explicit Requirement) */}
                            <div className="position-absolute top-0 end-0 m-3">
                                <span className="badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-bold" style={{ border: '2px solid #49EDD3' }}>
                                    ${product.price ? product.price.toFixed(2) : "0.00"}
                                </span>
                            </div>
                            {/* YouTube Style Play Button for Videos */}
                            {product.isVideo && (
                                <div className="position-absolute top-50 start-50 translate-middle cursor-pointer">
                                    <svg width="48" height="34" viewBox="0 0 68 48">
                                        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0,34,0S12.21,0.13,6.9,1.55 c-2.93,0.78-4.63,3.26-5.42,6.19C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                                        <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="card-body d-flex flex-column p-4 bg-white text-center">
                            <h5 className="card-title fw-bold text-dark mb-2 text-capitalize" style={{ fontSize: '1.2rem' }}>{product.name}</h5>
                            <p className="small text-muted mb-3">{product.category}</p>
                            <p className="small text-muted flex-grow-1" style={{ fontSize: '0.8rem' }}>{product.description?.substring(0, 60)}...</p>
                            <button className="btn btn-sm btn-outline-info rounded-pill mt-3 w-50 mx-auto" style={{ color: '#49EDD3', borderColor: '#49EDD3' }}>View Details</button>
                        </div>
                    </div>
                </div>
                ))}
                {/* "No results found" State (Bonus Requirement) */}
                {!loading && displayProducts.length === 0 && (
                    <div className="col-12 text-center py-5 bg-light rounded-4 border-dashed">
                        <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                        <h3 className="text-muted fw-bold">No items found</h3>
                        <p className="text-muted">Try switching categories or adjusting your search.</p>
                    </div>
                )}
            </div>
        )}

        {!loading && !showAll && products.length > 6 && (
            <div className="text-center">
            <button 
                onClick={() => setShowAll(true)}
                className="btn btn-info rounded-pill px-5 py-3 text-white shadow-sm hover-scale"
                style={{ backgroundColor: '#49EDD3', borderColor: '#49EDD3' }}>
                Load more
            </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Products;
