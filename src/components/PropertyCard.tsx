import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar, Ruler, Home, Heart, Share2, TrendingUp } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { t } = useTranslation();
  const [isLiked, setIsLiked] = useState(false);
  
  // Get the smallest flat type for "starting from" price
  const smallestFlat = property.flatTypes.reduce((min, flat) => 
    flat.area < min.area ? flat : min
  );
  const startingPrice = smallestFlat.pricePerSqm * smallestFlat.area;
  
  // Get range of flat sizes
  const minArea = Math.min(...property.flatTypes.map(f => f.area));
  const maxArea = Math.max(...property.flatTypes.map(f => f.area));
  const totalFlats = property.flatTypes.length;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            property.constructionStatus === 'Foundation' ? 'bg-orange-100 text-orange-800' :
            property.constructionStatus === 'Structure' ? 'bg-blue-100 text-blue-800' :
            property.constructionStatus === 'Finishing' ? 'bg-green-100 text-green-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {t(`constructionStatus.${property.constructionStatus.toLowerCase()}`)}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked ? 'bg-brand-teal text-white' : 'bg-white bg-opacity-80 text-gray-700 hover:bg-opacity-100'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 bg-white bg-opacity-80 backdrop-blur-sm rounded-full text-gray-700 hover:bg-opacity-100 transition-colors">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
        
        {/* ROI Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <TrendingUp className="h-3 w-3" />
            <span>{property.expectedROI}% {t('properties.roi')}</span>
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-gray-600 text-sm flex items-center">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            {property.district}, Tbilisi
          </p>
        </div>
        
        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-lg font-bold text-brand-teal">
                Starting from ${startingPrice.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                ${smallestFlat.pricePerSqm.toLocaleString()}/m²
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{t('properties.developer')}</p>
              <p className="text-sm font-medium text-gray-800">{property.developer}</p>
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Home className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{totalFlats} Flats</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Ruler className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{minArea}-{maxArea} m²</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{property.completionDate}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">{t('properties.constructionProgress')}</span>
            <span className="font-medium text-brand-teal">{property.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-brand-teal to-brand-light-teal h-2 rounded-full transition-all duration-500" 
              style={{ width: `${property.progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link 
            to={`/properties/${property.id}`}
            className="flex-1 bg-brand-teal text-white py-2.5 px-4 rounded-lg hover:bg-brand-light-teal transition-colors font-medium text-center"
          >
            {t('properties.viewDetails')}
          </Link>
          <button className="px-4 py-2.5 border border-brand-teal text-brand-teal rounded-lg hover:bg-brand-teal hover:bg-opacity-10 transition-colors font-medium">
            {t('properties.contact')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;