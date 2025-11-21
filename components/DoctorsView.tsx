import React from 'react';
import { Stethoscope, User } from 'lucide-react';
import { MAIN_DOCTORS, VISITING_DOCTORS, PRIMARY_COLOR } from '../constants';
import { Doctor } from '../types';

export const DoctorsView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Doctors Section */}
        <div className="mb-16">
          <div className="flex items-center mb-10">
            <Stethoscope className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
            <h2 className="text-3xl font-bold text-gray-900">主要醫師團隊</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAIN_DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>

        {/* Visiting Doctors Section */}
        <div className="mb-8">
          <div className="flex items-center mb-10">
            <User className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
            <h2 className="text-3xl font-bold text-gray-900">特約駐診醫師</h2>
            <span className="ml-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">不定期出沒</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VISITING_DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="group flex flex-col h-full">
      {/* Image Container with Swap Effect */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md mb-5 bg-gray-200">
        <img 
          src={doctor.image1} 
          alt={doctor.name} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
        />
        <img 
          src={doctor.image2} 
          alt={`${doctor.name} alternate`} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
        />
        
        {/* Overlay Badge */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <p className="text-white text-sm font-medium">查看詳細介紹</p>
        </div>
      </div>

      {/* Info */}
      <div className="text-center flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
          {doctor.name}
        </h3>
        <p className="text-sm font-semibold mb-3" style={{ color: PRIMARY_COLOR }}>
          {doctor.title}
        </p>
        
        {/* Specialties Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {doctor.specialties.map((spec, idx) => (
            <span 
              key={idx} 
              className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};