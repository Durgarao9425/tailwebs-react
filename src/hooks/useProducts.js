import { useState, useEffect } from 'react';

// Live Dummy API Integration
const API_URL = 'https://dummyjson.com/products';

export const useProducts = (selectedCategory, searchTerm) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromAPI = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Mapping real API data to our structure
        const mappedData = data.products.map(item => ({
          id: item.id,
          name: item.title,
          category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
          price: item.price,
          image: item.thumbnail,
          author: item.brand || "eGov Partner",
          date: "Just Now",
          tags: [item.category, "Latest"],
          description: item.description
        }));

        // Strict Filter Logic (To allow 'No Results' state to be tested)
        const filtered = mappedData.filter(product => {
          const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });

        setProducts(filtered);
      } catch (err) {
        setError('Failed to fetch from real API');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFromAPI();
  }, [selectedCategory, searchTerm]);

  return { products, loading, error };
};
