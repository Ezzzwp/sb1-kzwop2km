import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import SearchFilters from './components/SearchFilters';
import PropertyCard from './components/PropertyCard';
import Footer from './components/Footer';
import PropertyDetailPage from './pages/PropertyDetailPage';
import AboutPage from './pages/AboutPage';
import MarketInsightsPage from './pages/MarketInsightsPage';
import AdminPage from './pages/AdminPage';
import { properties } from './data/properties';

function App() {
  const { t } = useTranslation();
  const location = useLocation();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilters, setActiveFilters] = useState({
    district: '',
    priceRange: '',
    rooms: '',
    completionDate: ''
  });

  // Parse URL parameters and apply initial filters
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const district = searchParams.get('district') || '';
    const priceRange = searchParams.get('priceRange') || '';
    const rooms = searchParams.get('rooms') || '';
    const completionDate = searchParams.get('completionDate') || '';
    
    const initialFilters = {
      district,
      priceRange,
      rooms,
      completionDate
    };
    
    setActiveFilters(initialFilters);
    applyFilters(initialFilters);
  }, [location.search]);

  const applyFilters = (filters: typeof activeFilters) => {
    let filtered = properties;
    
    if (filters.district) {
      filtered = filtered.filter(p => p.district === filters.district);
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        const minPrice = Math.min(...p.flatTypes.map(f => f.pricePerSqm * f.area));
        const maxPrice = Math.max(...p.flatTypes.map(f => f.pricePerSqm * f.area));
        return (minPrice >= min && (!max || minPrice <= max)) || 
               (maxPrice >= min && (!max || maxPrice <= max)) ||
               (minPrice <= min && maxPrice >= (max || min));
      });
    }
    
    if (filters.rooms) {
      filtered = filtered.filter(p => 
        p.flatTypes.some(f => f.rooms === parseInt(filters.rooms))
      );
    }
    
    if (filters.completionDate) {
      filtered = filtered.filter(p => p.completionDate.includes(filters.completionDate));
    }
    
    setFilteredProperties(filtered);
  };

  const handleFilterChange = (filters: typeof activeFilters) => {
    setActiveFilters(filters);
    applyFilters(filters);
  };

  return (
    <Routes>
      <Route path="/Admin" element={<AdminPage />} />
      <Route path="/properties/:id" element={<PropertyDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/market-insights" element={<MarketInsightsPage />} />
      <Route path="/" element={
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Hero />
          <FeaturedProperties />
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Available Projects
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover premium pre-construction projects in Tbilisi's most desirable locations
                </p>
              </div>
              
              <SearchFilters onFilterChange={handleFilterChange} initialFilters={activeFilters} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
              
              {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No projects match your current filters. Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </div>
          </section>
          
          <Footer />
        </div>
      } />
    </Routes>
  );
}

export default App;