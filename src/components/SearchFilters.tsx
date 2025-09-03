import React from 'react';
import { useTranslation } from 'react-i18next';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange: (filters: {
    district: string;
    priceRange: string;
    rooms: string;
    completionDate: string;
  }) => void;
  initialFilters?: {
    district: string;
    priceRange: string;
    rooms: string;
    completionDate: string;
  };
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange, initialFilters }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = React.useState({
    district: initialFilters?.district || '',
    priceRange: initialFilters?.priceRange || '',
    rooms: initialFilters?.rooms || '',
    completionDate: initialFilters?.completionDate || ''
  });

  // Update filters when initialFilters change
  React.useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      district: '',
      priceRange: '',
      rooms: '',
      completionDate: ''
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2 text-brand-teal" />
          {t('properties.filterTitle')}
        </h3>
        <button
          onClick={clearFilters}
          className="text-brand-teal hover:text-brand-light-teal text-sm font-medium"
        >
          {t('properties.clearAll')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('properties.district')}
          </label>
          <select
            value={filters.district}
            onChange={(e) => handleFilterChange('district', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          >
            <option value="">{t('hero.allDistricts')}</option>
            <option value="Saburtalo">{t('districts.saburtalo')}</option>
            <option value="Vake">{t('districts.vake')}</option>
            <option value="Didube">{t('districts.didube')}</option>
            <option value="Gldani">{t('districts.gldani')}</option>
            <option value="Isani">{t('districts.isani')}</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('properties.priceRange')}
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          >
            <option value="">{t('properties.anyPrice')}</option>
            <option value="50000-100000">{t('priceRanges.50k-100k')}</option>
            <option value="100000-200000">{t('priceRanges.100k-200k')}</option>
            <option value="200000-300000">{t('priceRanges.200k-300k')}</option>
            <option value="300000-999999">{t('priceRanges.300k+')}</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('properties.rooms')}
          </label>
          <select
            value={filters.rooms}
            onChange={(e) => handleFilterChange('rooms', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          >
            <option value="">{t('properties.any')}</option>
            <option value="1">{t('roomOptions.1')}</option>
            <option value="2">{t('roomOptions.2')}</option>
            <option value="3">{t('roomOptions.3')}</option>
            <option value="4">{t('roomOptions.4+')}</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('properties.completion')}
          </label>
          <select
            value={filters.completionDate}
            onChange={(e) => handleFilterChange('completionDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          >
            <option value="">{t('properties.anyTime')}</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <SlidersHorizontal className="h-4 w-4 mr-1" />
            {t('properties.advancedFilters')}
          </span>
        </div>
        <button className="bg-brand-teal text-white px-6 py-2 rounded-lg hover:bg-brand-light-teal transition-colors font-medium">
          {t('properties.applyFilters')}
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;