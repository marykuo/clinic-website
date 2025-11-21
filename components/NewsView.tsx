import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { NEWS_ITEMS, PRIMARY_COLOR } from '../constants';

export const NewsView: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center mb-8">
          <AlertCircle className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
          <h2 className="text-3xl font-bold text-gray-900">最新公告</h2>
        </div>
        <div className="space-y-6">
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4" style={{ borderLeftColor: PRIMARY_COLOR }}>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {item.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
