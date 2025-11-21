import React from 'react';
import { HelpCircle } from 'lucide-react';
import { PRIMARY_COLOR, FAQ_ITEMS } from '../constants';

export const FaqView: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
         <div className="flex items-center mb-8">
            <HelpCircle className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
            <h2 className="text-3xl font-bold text-gray-900">常見問題</h2>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded mr-3 mt-0.5" style={{ backgroundColor: PRIMARY_COLOR }}>Q</span>
                  <span className="leading-tight">{item.q}</span>
                </h3>
                <div className="flex items-start text-gray-600">
                   <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-500 bg-gray-200 rounded mr-3 mt-0.5">A</span>
                   <p className="leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
