import React from 'react';
import { ArrowRight, ShieldCheck, Stethoscope, Heart } from 'lucide-react';
import { CLINIC_DESCRIPTION, PRIMARY_COLOR } from '../constants';
import { ViewState } from '../types';

interface HomeViewProps {
  setView: (view: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mt-10 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              守護您的健康，<br />
              <span style={{ color: PRIMARY_COLOR }}>是我們的承諾</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {CLINIC_DESCRIPTION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setView('booking')}
                className="px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                立即預約
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setView('hours')}
                className="px-8 py-3 rounded-lg bg-white text-gray-700 border border-gray-300 font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              >
                查看門診時間
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features / Intro Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">為什麼選擇我們？</h2>
            <p className="text-gray-600">我們結合先進的醫療設備與以人為本的服務理念，為您提供全方位的醫療照護。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<ShieldCheck className="h-10 w-10" style={{ color: PRIMARY_COLOR }} />}
              title="專業醫療團隊"
              description="由資深專科醫師駐診，提供精準的診斷與完善的治療計畫。"
            />
            <FeatureCard 
              icon={<Stethoscope className="h-10 w-10" style={{ color: PRIMARY_COLOR }} />}
              title="先進診療設備"
              description="引進高品質超音波與檢驗儀器，即時掌握您的健康狀況。"
            />
            <FeatureCard 
              icon={<Heart className="h-10 w-10" style={{ color: PRIMARY_COLOR }} />}
              title="溫馨舒適環境"
              description="明亮寬敞的候診空間，讓您在放鬆的心情下接受治療。"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);
