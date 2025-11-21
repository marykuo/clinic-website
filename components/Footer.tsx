import React from 'react';
import { CLINIC_NAME, PRIMARY_COLOR } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{CLINIC_NAME}</h2>
            <p className="text-gray-400 text-sm">
              專業 • 關懷 • 您的家庭健康守護者
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Line</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
          <p className="mt-2">
            本網站僅供展示參考，不做任何醫療診斷用途。<br/>
          </p>
        </div>
      </div>
    </footer>
  );
};