import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Star, Calendar, MapPin } from 'lucide-react';
import { properties } from '../data/properties';

const FeaturedProperties = () => {
  const { t } = useTranslation();
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('featured.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            (() => {
              const smallestFlat = property.flatTypes.reduce((min, flat) => 
                flat.area < min.area ? flat : min
              );
              const startingPrice = smallestFlat.pricePerSqm * smallestFlat.area;
              const minArea = Math.min(...property.flatTypes.map(f => f.area));
              const maxArea = Math.max(...property.flatTypes.map(f => f.area));
              const totalFlats = property.flatTypes.length;
              
              return (
            <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-light-teal text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{t('featured.featured')}</span>
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`constructionStatus.${property.constructionStatus.toLowerCase()}`)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.district}, Tbilisi
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">{t('featured.startingFrom')}</p>
                    <p className="text-2xl font-bold text-brand-teal">
                      ${startingPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{t('featured.perSqm')}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      ${smallestFlat.pricePerSqm.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <span>{totalFlats} Flats</span>
                  <span>{minArea}-{maxArea} m²</span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {property.completionDate}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('featured.constructionProgress')}</span>
                    <span className="font-medium text-brand-teal">{property.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand-teal h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${property.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Link 
                    to={`/properties/${property.id}`}
                    className="flex-1 bg-brand-teal text-white py-2 px-4 rounded-lg hover:bg-brand-light-teal transition-colors font-medium text-center"
                  >
                    {t('featured.viewDetails')}
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    ♡
                  </button>
                </div>
              </div>
            </div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;