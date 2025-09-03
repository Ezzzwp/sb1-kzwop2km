import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'ENG', flag: '🇺🇸' },
    { code: 'ka', name: 'GEO', flag: '🇬🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-brand-teal hover:bg-opacity-20 transition-colors">
        <Globe className="h-4 w-4 text-white" />
        <span className="text-xs font-medium text-white">
          {currentLanguage.name} {currentLanguage.flag}
        </span>
      </button>
      
      <div className="absolute right-0 top-full mt-1 bg-brand-dark border border-brand-teal rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1 min-w-[100px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full text-left px-3 py-2 text-xs hover:bg-brand-teal hover:bg-opacity-20 transition-colors flex items-center space-x-1 ${
                i18n.language === language.code ? 'bg-brand-teal bg-opacity-20 text-brand-light-teal' : 'text-white'
              }`}
            >
              <span>{language.name}</span>
              <span>{language.flag}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;