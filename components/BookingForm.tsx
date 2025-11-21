import React, { useState } from 'react';
import { Send, CheckCircle, User, FileText } from 'lucide-react';
import { PRIMARY_COLOR } from '../constants';

export const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after showing success message
      setTimeout(() => {
        setName('');
        setSymptoms('');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">線上預約掛號</h2>
            <p className="text-gray-600">請填寫您的基本資訊與症狀描述，我們將會為您安排最適合的看診時段。</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header Strip */}
            <div className="h-2 w-full" style={{ backgroundColor: PRIMARY_COLOR }}></div>
            
            <div className="p-8 sm:p-12">
              {isSuccess ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">預約成功！</h3>
                  <p className="text-gray-600">您的預約資訊已送出，我們將盡快與您聯繫確認。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      您的姓名 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white"
                        style={{ '--tw-ring-color': PRIMARY_COLOR } as React.CSSProperties}
                        placeholder="請輸入真實姓名"
                      />
                    </div>
                  </div>

                  {/* Symptoms Textarea */}
                  <div>
                    <label htmlFor="symptoms" className="block text-sm font-semibold text-gray-700 mb-2">
                      症狀描述 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="symptoms"
                        required
                        rows={6}
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white resize-none"
                        style={{ '--tw-ring-color': PRIMARY_COLOR } as React.CSSProperties}
                        placeholder="請簡述您的不適症狀，例如：發燒、頭痛、咳嗽..."
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">您的個人醫療資訊將嚴格保密。</p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{ 
                      backgroundColor: PRIMARY_COLOR,
                      '--tw-ring-color': PRIMARY_COLOR 
                    } as React.CSSProperties}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        處理中...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        送出預約
                        <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};