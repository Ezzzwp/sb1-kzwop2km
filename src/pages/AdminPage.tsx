import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Building, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Calendar,
  MapPin,
  DollarSign
} from 'lucide-react';
import { properties } from '../data/properties';

const AdminPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'properties', label: 'Properties', icon: Building },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Properties', value: properties.length, icon: Building, color: 'bg-blue-500' },
    { label: 'Active Users', value: '1,234', icon: Users, color: 'bg-green-500' },
    { label: 'Total Revenue', value: '$2.4M', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Avg. ROI', value: '28%', icon: TrendingUp, color: 'bg-brand-teal' },
  ];

  const recentActivities = [
    { action: 'New property added', details: 'Sky Gardens Saburtalo', time: '2 hours ago' },
    { action: 'User inquiry', details: 'Vake Heights Residence', time: '4 hours ago' },
    { action: 'Property updated', details: 'Metro Plaza Complex', time: '6 hours ago' },
    { action: 'New user registered', details: 'john.doe@email.com', time: '1 day ago' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Property Management</h2>
        <button className="bg-brand-teal text-white px-4 py-2 rounded-lg hover:bg-brand-light-teal transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Property</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.map((property) => (
                <tr key={property.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-lg object-cover" src={property.image} alt={property.title} />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{property.title}</div>
                        <div className="text-sm text-gray-500">{property.developer}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {property.district}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      property.constructionStatus === 'Foundation' ? 'bg-orange-100 text-orange-800' :
                      property.constructionStatus === 'Structure' ? 'bg-blue-100 text-blue-800' :
                      property.constructionStatus === 'Finishing' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {property.constructionStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-brand-teal h-2 rounded-full" 
                          style={{ width: `${property.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{property.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      {property.expectedROI}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-brand-teal hover:text-brand-light-teal">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPlaceholderContent = (title: string, description: string) => (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="bg-brand-teal text-white px-6 py-2 rounded-lg hover:bg-brand-light-teal transition-colors">
        Coming Soon
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'properties':
        return renderProperties();
      case 'users':
        return renderPlaceholderContent('User Management', 'Manage user accounts, permissions, and access levels.');
      case 'messages':
        return renderPlaceholderContent('Message Center', 'View and respond to customer inquiries and chat messages.');
      case 'analytics':
        return renderPlaceholderContent('Analytics Dashboard', 'Track website performance, user engagement, and conversion metrics.');
      case 'settings':
        return renderPlaceholderContent('System Settings', 'Configure application settings, integrations, and preferences.');
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-brand-dark text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-brand-teal border-opacity-30">
          <div className="flex items-center space-x-3">
            <img 
              src="/37678324_2079897868996238_3824867066570080256_n1.jpg" 
              alt="Outflat.ge Logo" 
              className="h-8 w-8 object-contain rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold">Outflat.ge</h1>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-brand-teal text-white'
                      : 'text-gray-300 hover:bg-brand-teal hover:bg-opacity-20 hover:text-white'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-brand-teal border-opacity-30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">A</span>
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@outflat.ge</p>
            </div>
          </div>
          <button className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-brand-teal hover:bg-opacity-20 rounded-lg transition-colors">
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h1>
              <p className="text-sm text-gray-600">
                {activeTab === 'dashboard' && 'Overview of your real estate platform'}
                {activeTab === 'properties' && 'Manage your property listings'}
                {activeTab === 'users' && 'Manage user accounts and permissions'}
                {activeTab === 'messages' && 'Customer inquiries and support'}
                {activeTab === 'analytics' && 'Performance metrics and insights'}
                {activeTab === 'settings' && 'System configuration and preferences'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;