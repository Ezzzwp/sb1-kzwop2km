import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, Calendar, TrendingUp } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-gray-700 to-brand-teal text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-brand-light-teal">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="h-8 w-8 text-brand-light-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-1">15+</h3>
              <p className="text-gray-200">{t('hero.primeLocations')}</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="h-8 w-8 text-brand-light-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-1">2024-2026</h3>
              <p className="text-gray-200">{t('hero.completionYears')}</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-brand-light-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-1">25%+</h3>
              <p className="text-gray-200">{t('hero.expectedROI')}</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('hero.location')}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-gray-700">
                  <option>{t('hero.allDistricts')}</option>
                  <option>{t('districts.saburtalo')}</option>
                  <option>{t('districts.vake')}</option>
                  <option>{t('districts.didube')}</option>
                  <option>{t('districts.gldani')}</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('hero.budgetRange')}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-gray-700">
                  <option>{t('hero.anyBudget')}</option>
                  <option>{t('priceRanges.50k-100k')}</option>
                  <option>{t('priceRanges.100k-200k')}</option>
                  <option>{t('priceRanges.200k-300k')}</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('hero.completion')}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-gray-700">
                  <option>{t('hero.anyTime')}</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
              <button className="bg-brand-teal text-white px-8 py-3 rounded-lg hover:bg-brand-light-teal transition-colors flex items-center justify-center space-x-2 font-medium">
                <Search className="h-5 w-5" />
                <span>{t('hero.search')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;