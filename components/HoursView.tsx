import React from 'react';
import { Clock } from 'lucide-react';
import { OPENING_HOURS, PRIMARY_COLOR } from '../constants';

export const HoursView: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center mb-8">
          <Clock className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
          <h2 className="text-3xl font-bold text-gray-900">門診時間</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 sm:p-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 text-gray-500 font-medium">日期</th>
                  <th className="text-right py-4 text-gray-500 font-medium">看診時間</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {OPENING_HOURS.map((item, index) => (
                  <tr key={index} className="group hover:bg-blue-50 transition-colors">
                    <td className="py-4 text-gray-900 font-medium group-hover:text-blue-700">{item.day}</td>
                    <td className="py-4 text-right text-gray-600 group-hover:text-blue-700">{item.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
              <p className="flex items-start">
                <span className="font-bold mr-2">註：</span>
                國定假日看診時間可能有所變動，請留意最新公告或來電洽詢。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#0860DC] text-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-4">聯絡我們</h3>
          <p className="mb-2 opacity-90">預約專線：(02) 2345-6789</p>
          <p className="opacity-90">診所地址：台北市信義區健康路 123 號</p>
        </div>
      </div>
    </div>
  );
};
