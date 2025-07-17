import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    if (page === 'recruitment') {
      onNavigate('sectors');
      setIsMenuOpen(false);
      return;
    }
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'recruitment', label: 'Recruitment' },
    { id: 'currently-hiring', label: 'Currently Hiring' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`top-header fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top bar */}
      <div className="bg-navy-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+44 07424413744</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@cavellegroup.com</span>
            </div>
          </div>
          <div className="text-sm">
            Suite 6346 Unit 3a 34-35 Hatton Garden, Holborn, London, England, EC1N8DX
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              <img src="/logo.png" alt="Cavelle Group Logo" className="h-20" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`transition-colors font-medium ${
                    currentPage === item.id
                      ? 'text-navy-900 border-b-2 border-navy-900 pb-1'
                      : 'text-gray-700 hover:text-navy-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavigation('contact')}
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-navy-900 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left px-3 py-2 font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-navy-900 bg-navy-50'
                      : 'text-gray-700 hover:text-navy-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;