import React from 'react';
import { useTranslation } from 'react-i18next';
import ChatModal from '../components/ChatModal';
import { 
  TrendingUp, 
  Building, 
  Users, 
  DollarSign, 
  BarChart3, 
  MapPin, 
  Calendar, 
  Target,
  CheckCircle,
  ArrowUpRight,
  Phone,
  MessageCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MarketInsightsPage = () => {
  const { t } = useTranslation();
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const marketStats = [
    { icon: TrendingUp, value: '15%', label: t('marketInsights.marketOverview.stats.growth'), color: 'text-green-600' },
    { icon: DollarSign, value: '$2.1B', label: t('marketInsights.marketOverview.stats.investment'), color: 'text-blue-600' },
    { icon: Building, value: '85%', label: t('marketInsights.marketOverview.stats.demand'), color: 'text-purple-600' },
    { icon: BarChart3, value: '28%', label: t('marketInsights.marketOverview.stats.roi'), color: 'text-brand-teal' }
  ];

  const trends = [
    {
      title: t('marketInsights.keyTrends.trend1.title'),
      description: t('marketInsights.keyTrends.trend1.description'),
      icon: Building
    },
    {
      title: t('marketInsights.keyTrends.trend2.title'),
      description: t('marketInsights.keyTrends.trend2.description'),
      icon: MapPin
    },
    {
      title: t('marketInsights.keyTrends.trend3.title'),
      description: t('marketInsights.keyTrends.trend3.description'),
      icon: Users
    },
    {
      title: t('marketInsights.keyTrends.trend4.title'),
      description: t('marketInsights.keyTrends.trend4.description'),
      icon: Target
    }
  ];

  const opportunities = [
    {
      title: t('marketInsights.investmentOpportunities.opportunity1.title'),
      description: t('marketInsights.investmentOpportunities.opportunity1.description')
    },
    {
      title: t('marketInsights.investmentOpportunities.opportunity2.title'),
      description: t('marketInsights.investmentOpportunities.opportunity2.description')
    },
    {
      title: t('marketInsights.investmentOpportunities.opportunity3.title'),
      description: t('marketInsights.investmentOpportunities.opportunity3.description')
    },
    {
      title: t('marketInsights.investmentOpportunities.opportunity4.title'),
      description: t('marketInsights.investmentOpportunities.opportunity4.description')
    }
  ];

  const districts = [
    {
      name: t('marketInsights.priceAnalysis.districts.vake.name'),
      price: t('marketInsights.priceAnalysis.districts.vake.price'),
      trend: t('marketInsights.priceAnalysis.districts.vake.trend'),
      description: t('marketInsights.priceAnalysis.districts.vake.description'),
      color: 'bg-purple-100 text-purple-800'
    },
    {
      name: t('marketInsights.priceAnalysis.districts.saburtalo.name'),
      price: t('marketInsights.priceAnalysis.districts.saburtalo.price'),
      trend: t('marketInsights.priceAnalysis.districts.saburtalo.trend'),
      description: t('marketInsights.priceAnalysis.districts.saburtalo.description'),
      color: 'bg-green-100 text-green-800'
    },
    {
      name: t('marketInsights.priceAnalysis.districts.didube.name'),
      price: t('marketInsights.priceAnalysis.districts.didube.price'),
      trend: t('marketInsights.priceAnalysis.districts.didube.trend'),
      description: t('marketInsights.priceAnalysis.districts.didube.description'),
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: t('marketInsights.priceAnalysis.districts.gldani.name'),
      price: t('marketInsights.priceAnalysis.districts.gldani.price'),
      trend: t('marketInsights.priceAnalysis.districts.gldani.trend'),
      description: t('marketInsights.priceAnalysis.districts.gldani.description'),
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const predictions = [
    t('marketInsights.forecast.prediction1'),
    t('marketInsights.forecast.prediction2'),
    t('marketInsights.forecast.prediction3'),
    t('marketInsights.forecast.prediction4')
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-gray-700 to-brand-teal text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('marketInsights.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              {t('marketInsights.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('marketInsights.marketOverview.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('marketInsights.marketOverview.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Trends */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('marketInsights.keyTrends.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-teal bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <trend.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{trend.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{trend.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('marketInsights.investmentOpportunities.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('marketInsights.investmentOpportunities.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('marketInsights.priceAnalysis.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('marketInsights.priceAnalysis.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((district, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{district.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${district.color}`}>
                    {district.trend}
                  </span>
                </div>
                <p className="text-2xl font-bold text-brand-teal mb-2">{district.price}</p>
                <p className="text-gray-600 text-sm">{district.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Forecast */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('marketInsights.forecast.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('marketInsights.forecast.subtitle')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {predictions.map((prediction, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-brand-teal to-brand-light-teal bg-opacity-5 rounded-lg border border-brand-teal border-opacity-20">
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{prediction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-dark to-brand-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('marketInsights.cta.title')}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('marketInsights.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'tel:+995599411188'}
              className="bg-white text-brand-teal px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>{t('marketInsights.cta.consultation')}</span>
            </button>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t('properties.chatWithAgent')}</span>
            </button>
          </div>
        </div>
      </section>
      
      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
      
      <Footer />
    </div>
  );
};

export default MarketInsightsPage;