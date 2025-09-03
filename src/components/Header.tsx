import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ChatModal from './ChatModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-brand-dark shadow-sm border-b border-brand-teal">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src="/37678324_2079897868996238_3824867066570080256_n1.jpg" 
                  alt="Outflat.ge Logo" 
                  className="h-12 w-12 object-contain rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand-teal/30 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-light-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-brand-light-teal transition-colors duration-300">
                  Outflat.ge
                </span>
                <span className="text-xs text-gray-300 group-hover:text-brand-teal transition-colors duration-300 -mt-1">
                  Premium Real Estate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 ml-8">
              <div className="relative group">
                <Link 
                  to="/" 
                  className="text-white hover:text-brand-teal transition-colors font-medium text-base whitespace-nowrap flex items-center space-x-1"
                >
                  <span>{t('header.projects')}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                <div className="absolute left-0 top-full mt-1 bg-brand-dark border border-brand-teal rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[200px]">
                  <div className="py-2">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white hover:bg-brand-teal hover:bg-opacity-20 transition-colors"
                    >
                      {t('header.allProjects')}
                    </Link>
                    <div className="px-4 py-1 text-xs text-brand-light-teal font-medium border-t border-brand-teal border-opacity-30 mt-2">
                      {t('header.projectsByDistrict')}
                    </div>
                    <Link
                      to="/?district=Saburtalo"
                      className="block px-4 py-2 text-sm text-white hover:bg-brand-teal hover:bg-opacity-20 transition-colors"
                    >
                      {t('districts.saburtalo')} Projects
                    </Link>
                    <Link
                      to="/?district=Vake"
                      className="block px-4 py-2 text-sm text-white hover:bg-brand-teal hover:bg-opacity-20 transition-colors"
                    >
                      {t('districts.vake')} Projects
                    </Link>
                    <Link
                      to="/?district=Didube"
                      className="block px-4 py-2 text-sm text-white hover:bg-brand-teal hover:bg-opacity-20 transition-colors"
                    >
                      {t('districts.didube')} Projects
                    </Link>
                    <Link
                      to="/?district=Gldani"
                      className="block px-4 py-2 text-sm text-white hover:bg-brand-teal hover:bg-opacity-20 transition-colors"
                    >
                      {t('districts.gldani')} Projects
                    </Link>
                  </div>
                </div>
              </div>
              <a href="/market-insights" className="text-white hover:text-brand-teal transition-colors font-medium text-base whitespace-nowrap">
                {t('header.marketInsights')}
              </a>
              <a href="/about" className="text-white hover:text-brand-teal transition-colors font-medium text-base whitespace-nowrap">
                {t('header.about')}
              </a>
            </nav>
          </div>

          {/* Right Side - Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-4 flex-shrink-0 pl-4 border-l border-brand-teal border-opacity-30">
            <LanguageSwitcher />
            <div className="flex items-center space-x-3 text-base text-white pl-4 border-l border-brand-teal border-opacity-30">
              <button 
                onClick={() => setIsChatOpen(true)}
                className="flex items-center space-x-1 hover:text-brand-teal transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t('properties.chatWithAgent')}</span>
              </button>
            </div>
            <button className="bg-brand-teal text-white px-4 py-2 rounded-lg hover:bg-brand-light-teal transition-colors font-medium ml-4 pl-4 border-l border-brand-light-teal border-opacity-50">
              {t('header.listProperty')}
            </button>
          </div>

          {/* Tablet Navigation - Show only language and CTA */}
          <div className="hidden md:flex lg:hidden xl:hidden items-center space-x-4 pl-4 border-l border-brand-teal border-opacity-30">
            <LanguageSwitcher />
            <button className="bg-brand-teal text-white px-3 py-2 rounded-lg hover:bg-brand-light-teal transition-colors font-medium text-sm ml-4 pl-4 border-l border-brand-light-teal border-opacity-50">
              {t('header.listProperty')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-teal py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-brand-teal transition-colors font-medium text-base">
                {t('header.projects')}
              </Link>
              <div className="ml-4 space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-brand-teal transition-colors text-sm">
                  {t('header.allProjects')}
                </Link>
                <Link to="/?district=Saburtalo" className="block text-gray-300 hover:text-brand-teal transition-colors text-sm">
                  {t('districts.saburtalo')} Projects
                </Link>
                <Link to="/?district=Vake" className="block text-gray-300 hover:text-brand-teal transition-colors text-sm">
                  {t('districts.vake')} Projects
                </Link>
                <Link to="/?district=Didube" className="block text-gray-300 hover:text-brand-teal transition-colors text-sm">
                  {t('districts.didube')} Projects
                </Link>
                <Link to="/?district=Gldani" className="block text-gray-300 hover:text-brand-teal transition-colors text-sm">
                  {t('districts.gldani')} Projects
                </Link>
              </div>
              <a href="/market-insights" className="text-white hover:text-brand-teal transition-colors font-medium text-base">
                {t('header.marketInsights')}
              </a>
              <a href="/about" className="text-white hover:text-brand-teal transition-colors font-medium text-base">
                {t('header.about')}
              </a>
              <div className="pt-4 border-t border-brand-teal">
                <div className="mb-4">
                  <LanguageSwitcher />
                </div>
                <div className="flex flex-col space-y-2 text-base text-white">
                  <div className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span>+995 599 411 188</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span>Outflat.sale@gmail.com</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-brand-teal text-white px-4 py-2 rounded-lg hover:bg-brand-light-teal transition-colors font-medium">
                  {t('header.listProperty')}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </header>
  );
};

export default Header;