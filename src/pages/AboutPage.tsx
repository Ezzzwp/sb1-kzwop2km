import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Users, Building, Award, Shield, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('aboutPage.title')}
          </h1>
          <div className="w-24 h-1 bg-brand-teal mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('aboutPage.subtitle')}
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('aboutPage.experience.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('aboutPage.experience.description')}
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">{t('aboutPage.experience.stats.apartmentsSold')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">{t('aboutPage.experience.stats.happyClients')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">{t('aboutPage.experience.stats.premiumProjects')}</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-brand-dark to-brand-teal text-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">{t('aboutPage.mission.title')}</h2>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto">
              {t('aboutPage.mission.description')}
            </p>
          </div>
        </div>

        {/* Strengths Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t('aboutPage.strengths.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.strengths.marketExpertise.title')}</h3>
                <p className="text-gray-600">{t('aboutPage.strengths.marketExpertise.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.strengths.strongPartnerships.title')}</h3>
                <p className="text-gray-600">{t('aboutPage.strengths.strongPartnerships.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.strengths.provenTrackRecord.title')}</h3>
                <p className="text-gray-600">{t('aboutPage.strengths.provenTrackRecord.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.strengths.comprehensiveSupport.title')}</h3>
                <p className="text-gray-600">{t('aboutPage.strengths.comprehensiveSupport.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 md:col-span-2">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.strengths.trustedResults.title')}</h3>
                <p className="text-gray-600">{t('aboutPage.strengths.trustedResults.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t('aboutPage.whyChooseUs.title')}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('aboutPage.whyChooseUs.description1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('aboutPage.whyChooseUs.description2')}
            </p>
            
            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Shield className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.whyChooseUs.personalizedService.title')}</h3>
                <p className="text-sm text-gray-600">{t('aboutPage.whyChooseUs.personalizedService.description')}</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <TrendingUp className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.whyChooseUs.marketKnowledge.title')}</h3>
                <p className="text-sm text-gray-600">{t('aboutPage.whyChooseUs.marketKnowledge.description')}</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('aboutPage.whyChooseUs.reliability.title')}</h3>
                <p className="text-sm text-gray-600">{t('aboutPage.whyChooseUs.reliability.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutPage.cta.title')}</h2>
          <p className="text-gray-600 mb-8">{t('aboutPage.cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'tel:+995599411188'}
              className="bg-brand-teal text-white px-8 py-3 rounded-lg hover:bg-brand-light-teal transition-colors font-medium"
            >
              {t('aboutPage.cta.callButton')}
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:Outflat.sale@gmail.com'}
              className="border border-brand-teal text-brand-teal px-8 py-3 rounded-lg hover:bg-brand-teal hover:bg-opacity-10 transition-colors font-medium"
            >
              {t('aboutPage.cta.emailButton')}
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;