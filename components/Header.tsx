import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { ViewState } from '../types';
import { PRIMARY_COLOR, CLINIC_NAME } from '../constants';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: ViewState; label: string }[] = [
    { id: 'home', label: '首頁' },
    { id: 'news', label: '最新公告' },
    { id: 'doctors', label: '醫師團隊' },
    { id: 'hours', label: '門診時間' },
    { id: 'faq', label: '常見問題' },
    { id: 'transport', label: '交通資訊' },
  ];

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <Activity className="h-8 w-8 mr-2" style={{ color: PRIMARY_COLOR }} />
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              {CLINIC_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === item.id
                    ? `text-[${PRIMARY_COLOR}] font-bold border-b-2 border-[${PRIMARY_COLOR}]`
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                style={{ color: currentView === item.id ? PRIMARY_COLOR : undefined }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.id
                    ? 'bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={{ color: currentView === item.id ? PRIMARY_COLOR : undefined }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};