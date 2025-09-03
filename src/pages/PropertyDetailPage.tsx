import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChatModal from '../components/ChatModal';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Ruler, 
  Home, 
  Heart, 
  Share2, 
  TrendingUp,
  Bed,
  Bath,
  Car,
  Thermometer,
  Eye,
  Building,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { properties, FlatType } from '../data/properties';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFlatTypeId, setSelectedFlatTypeId] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('propertyDetail.propertyNotFound')}</h1>
          <Link to="/" className="text-brand-teal hover:text-brand-light-teal">
            {t('propertyDetail.returnToHome')}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const selectedFlatType = selectedFlatTypeId 
    ? property.flatTypes.find(f => f.id === selectedFlatTypeId)
    : null;

  // For main gallery, show building exterior only initially
  const mainImages = [property.image];
  
  // Get smallest flat for display purposes
  const smallestFlat = property.flatTypes.reduce((min, flat) => 
    flat.area < min.area ? flat : min
  );
  const startingPrice = smallestFlat.pricePerSqm * smallestFlat.area;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-teal hover:text-brand-light-teal transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('propertyDetail.backToProperties')}
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <img 
                  src={mainImages[selectedImage]} 
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full backdrop-blur-sm transition-colors ${
                      isLiked ? 'bg-brand-teal text-white' : 'bg-white bg-opacity-80 text-gray-700'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full text-gray-700">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="border-b">
                <nav className="flex">
                  {[
                    { id: 'overview', label: t('propertyDetail.tabs.overview') },
                    { id: 'amenities', label: t('propertyDetail.tabs.amenities') },
                    { id: 'flats', label: t('propertyDetail.tabs.flats') },
                    { id: 'location', label: t('propertyDetail.tabs.location') }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-brand-teal border-b-2 border-brand-teal'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('propertyDetail.overview.buildingDescription')}</h3>
                      <p className="text-gray-600 leading-relaxed">{property.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('propertyDetail.overview.buildingInformation')}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Building className="h-5 w-5 text-brand-teal" />
                          <span className="text-gray-600">{property.flatTypes.length} {t('propertyDetail.overview.flatTypesCount')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Ruler className="h-5 w-5 text-brand-teal" />
                          <span className="text-gray-600">
                            {Math.min(...property.flatTypes.map(f => f.area))}-{Math.max(...property.flatTypes.map(f => f.area))} m²
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-brand-teal" />
                          <span className="text-gray-600">{property.expectedROI}% {t('propertyDetail.overview.expectedROI')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-brand-teal" />
                          <span className="text-gray-600">{property.completionDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="h-5 w-5 text-brand-teal" />
                          <span className="text-gray-600">{property.developer}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-brand-teal" />
                          <span className="text-gray-600">{property.progress}% {t('propertyDetail.overview.complete')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('propertyDetail.amenities.buildingAmenities')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'flats' && (
                  <div>
                    {!selectedFlatTypeId ? (
                      // Show flat type selection
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('propertyDetail.flats.availableFlatTypes')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {property.flatTypes.map((flatType) => {
                            const totalPrice = flatType.pricePerSqm * flatType.area;
                            return (
                              <div 
                                key={flatType.id} 
                                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-brand-teal transition-colors cursor-pointer group"
                                onClick={() => setSelectedFlatTypeId(flatType.id)}
                              >
                                <div className="flex items-center justify-between mb-4">
                                  <div>
                                    <h4 className="text-xl font-bold text-gray-900">{flatType.area} m²</h4>
                                    <p className="text-gray-600">{flatType.rooms} {t('propertyDetail.flats.rooms')}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-2xl font-bold text-brand-teal">${totalPrice.toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">${flatType.pricePerSqm.toLocaleString()}/m²</p>
                                  </div>
                                </div>
                                
                                <div className="mb-4">
                                  <img 
                                    src={flatType.flatPhotos[0]} 
                                    alt={`${flatType.area}m² flat`}
                                    className="w-full h-32 object-cover rounded-lg"
                                  />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span className="flex items-center">
                                      <Bed className="h-4 w-4 mr-1" />
                                      {flatType.specifications.bedrooms}
                                    </span>
                                    <span className="flex items-center">
                                      <Bath className="h-4 w-4 mr-1" />
                                      {flatType.specifications.bathrooms}
                                    </span>
                                  </div>
                                  <div className="flex items-center text-brand-teal group-hover:text-brand-light-teal">
                                    <span className="text-sm font-medium mr-1">{t('propertyDetail.flats.viewDetails')}</span>
                                    <ArrowRight className="h-4 w-4" />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      // Show selected flat type details
                      selectedFlatType && (
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {selectedFlatType.area} m² {t('propertyDetail.flats.flatDetails')}
                            </h3>
                            <button
                              onClick={() => setSelectedFlatTypeId(null)}
                              className="text-brand-teal hover:text-brand-light-teal font-medium"
                            >
                              {t('propertyDetail.flats.backToAllFlats')}
                            </button>
                          </div>
                          
                          {/* Flat Photos Gallery */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">{t('propertyDetail.flats.interiorPhotos')}</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {selectedFlatType.flatPhotos.map((photo, index) => (
                                <div key={index} className="relative group cursor-pointer">
                                  <img 
                                    src={photo} 
                                    alt={`${t('propertyDetail.flats.flatInterior')} ${index + 1}`}
                                    className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                                  />
                                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Floor Plan */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">{t('propertyDetail.flats.floorPlan')}</h4>
                            <img 
                              src={selectedFlatType.floorPlan} 
                              alt={t('propertyDetail.flats.floorPlan')}
                              className="w-full max-w-md rounded-lg shadow-md"
                            />
                          </div>
                          
                          {/* Specifications */}
                          <div className="bg-gray-50 rounded-lg p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">{t('propertyDetail.flats.specifications')}</h4>
                                <div className="space-y-3">
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.totalArea')}</span>
                                    <span className="font-medium">{selectedFlatType.area} m²</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.rooms')}</span>
                                    <span className="font-medium">{selectedFlatType.rooms}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.bedrooms')}</span>
                                    <span className="font-medium">{selectedFlatType.specifications.bedrooms}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.bathrooms')}</span>
                                    <span className="font-medium">{selectedFlatType.specifications.bathrooms}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.balconies')}</span>
                                    <span className="font-medium">{selectedFlatType.specifications.balconies}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.floor')}</span>
                                    <span className="font-medium">{selectedFlatType.specifications.floor}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.view')}</span>
                                    <span className="font-medium">{selectedFlatType.specifications.view}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.heating')}</span>
                                    <span className="font-medium">{selectedFlatType.specifications.heating}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">{t('propertyDetail.flats.pricing')}</h4>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-4 border-2 border-brand-teal">
                                    <div className="text-center">
                                      <p className="text-sm text-gray-600 mb-1">{t('propertyDetail.flats.totalPrice')}</p>
                                      <p className="text-3xl font-bold text-brand-teal">
                                        ${(selectedFlatType.pricePerSqm * selectedFlatType.area).toLocaleString()}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.pricePerSqm')}</span>
                                    <span className="font-medium text-brand-teal">${selectedFlatType.pricePerSqm.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.monthlyPayment')}</span>
                                    <span className="font-medium text-gray-800">
                                      ${Math.round((selectedFlatType.pricePerSqm * selectedFlatType.area) * 0.005).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">{t('propertyDetail.flats.downPayment')}</span>
                                    <span className="font-medium text-gray-800">
                                      ${Math.round((selectedFlatType.pricePerSqm * selectedFlatType.area) * 0.2).toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Features */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-3">{t('propertyDetail.flats.features')}</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className={`h-5 w-5 ${selectedFlatType.specifications.parking ? 'text-green-500' : 'text-gray-400'}`} />
                                  <span className="text-gray-600">
                                    {selectedFlatType.specifications.parking ? t('propertyDetail.flats.parkingIncluded') : t('propertyDetail.flats.noParking')}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className={`h-5 w-5 ${selectedFlatType.specifications.storage ? 'text-green-500' : 'text-gray-400'}`} />
                                  <span className="text-gray-600">
                                    {selectedFlatType.specifications.storage ? t('propertyDetail.flats.storageRoom') : t('propertyDetail.flats.noStorage')}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                  <span className="text-gray-600">{t('propertyDetail.flats.highSpeedInternet')}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                  <span className="text-gray-600">{t('propertyDetail.flats.modernAppliances')}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    </div>
                )}

                {activeTab === 'location' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('propertyDetail.location.location')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-brand-teal" />
                        <span className="text-gray-600">{property.district}, Tbilisi, Georgia</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-600">
                          {t('propertyDetail.location.locationDescription', { district: property.district })}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Property Info and Contact */}
          <div className="space-y-6">
            {/* Property Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.district}, Tbilisi
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <p className="text-2xl font-bold text-brand-teal">
                      {t('propertyDetail.startingFrom')} ${startingPrice.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${smallestFlat.pricePerSqm.toLocaleString()}/m² • {property.flatTypes.length} {t('propertyDetail.flatTypes')}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>{property.expectedROI}% ROI</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Home className="h-6 w-6 text-brand-teal mx-auto mb-1" />
                  <p className="text-sm text-gray-600">{property.flatTypes.length} {t('propertyDetail.overview.flatTypesCount')}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Ruler className="h-6 w-6 text-brand-teal mx-auto mb-1" />
                  <p className="text-sm text-gray-600">
                    {Math.min(...property.flatTypes.map(f => f.area))}-{Math.max(...property.flatTypes.map(f => f.area))} m²
                  </p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-brand-teal mx-auto mb-1" />
                  <p className="text-sm text-gray-600">{property.completionDate}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Building className="h-6 w-6 text-brand-teal mx-auto mb-1" />
                  <p className="text-sm text-gray-600">{property.developer}</p>
                </div>
              </div>

              {/* Construction Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">{t('propertyDetail.constructionProgress')}</span>
                  <span className="font-medium text-brand-teal">{property.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-brand-teal to-brand-light-teal h-3 rounded-full transition-all duration-500" 
                    style={{ width: `${property.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {t('propertyDetail.status')}: {t(`constructionStatus.${property.constructionStatus.toLowerCase()}`)}
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => window.location.href = 'tel:+995599411188'}
                  className="w-full bg-brand-teal text-white py-3 px-4 rounded-lg hover:bg-brand-light-teal transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>{t('properties.callNow')}</span>
                </button>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="w-full border border-brand-teal text-brand-teal py-3 px-4 rounded-lg hover:bg-brand-teal hover:bg-opacity-10 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t('properties.chatWithAgent')}</span>
                </button>
              </div>
            </div>

            {/* Developer Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('propertyDetail.developer')}</h3>
              <div className="space-y-3">
                <p className="font-medium text-gray-900">{property.developer}</p>
                <p className="text-sm text-gray-600">
                  {t('propertyDetail.trustedDeveloper')}
                </p>
                <button className="text-brand-teal hover:text-brand-light-teal text-sm font-medium">
                  {t('propertyDetail.viewAllProperties')} →
                </button>
              </div>
            </div>

            {/* Investment Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('propertyDetail.investmentHighlights')}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">{t('propertyDetail.preConstructionPricing')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">{t('propertyDetail.highRentalDemand')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">{t('propertyDetail.expectedROI')} {property.expectedROI}% ROI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">{t('propertyDetail.primeLocation')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        propertyTitle={property.title}
      />

      <Footer />
    </div>
  );
};

export default PropertyDetailPage;