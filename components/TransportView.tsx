import React from 'react';
import { MapPin, Navigation, ExternalLink, Train, Bus } from 'lucide-react';
import { PRIMARY_COLOR } from '../constants';

export const TransportView: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
         <div className="flex items-center mb-8">
            <MapPin className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
            <h2 className="text-3xl font-bold text-gray-900">交通資訊</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">診所位置</h3>
              <p className="text-gray-600 mb-4 text-lg">
                地址：台北市信義區健康路 123 號
              </p>
              <p className="text-gray-500 text-sm">
                我們位於市中心，交通便利，周邊設有公有停車場與多條公車路線。
              </p>
            </div>

            <div className="space-y-4">
               <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all group bg-gray-50">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Navigation className="h-6 w-6" style={{ color: PRIMARY_COLOR }} />
                    </div>
                    <span className="font-bold text-gray-800 group-hover:text-blue-700 text-lg">Google Maps 導航</span>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
               </a>

               <a href="#" className="flex items-center justify-between p-5 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all group bg-gray-50">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Train className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="font-bold text-gray-800 group-hover:text-blue-700 text-lg">捷運路線查詢</span>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
               </a>

               <a href="#" className="flex items-center justify-between p-5 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all group bg-gray-50">
                  <div className="flex items-center">
                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                      <Bus className="h-6 w-6 text-yellow-600" />
                    </div>
                    <span className="font-bold text-gray-800 group-hover:text-blue-700 text-lg">公車動態查詢</span>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
               </a>
            </div>
          </div>
      </div>
    </div>
  );
};
