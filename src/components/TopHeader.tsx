import React, { useState } from 'react';

export const TopHeader: React.FC = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container">
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 text-xs sm:text-sm">
          {/* Left - Social Icons */}
          <div className="flex gap-4 items-center order-2 sm:order-1">
            <a href="#facebook" className="text-gray-600 hover:text-blue-600 transition">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.313-.229-4.425-.229-4.404 0-7.42 2.703-7.42 7.622v1.607z"/>
              </svg>
            </a>
            <a href="#twitter" className="text-gray-600 hover:text-blue-400 transition">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 11-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
              </svg>
            </a>
            <a href="#instagram" className="text-gray-600 hover:text-pink-600 transition">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            <a href="#linkedin" className="text-gray-600 hover:text-blue-700 transition">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.16v8.4h2.16v-4.77c0-.85.62-1.6 1.54-1.6.92 0 1.64.75 1.64 1.6v4.77h2.4zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69-.93 0-1.69.76-1.69 1.69 0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.4H5.5v8.4h2.77z"/>
              </svg>
            </a>
          </div>

          {/* Center - Slogan */}
          <div className="text-[rgb(119,119,119)] text-center order-1 sm:order-2 w-full sm:w-auto text-xs sm:text-sm whitespace-nowrap">
            FREE SHIPPING THIS WEEK ORDER OVER - $75
          </div>

          {/* Right - Dropdowns */}
          <div className="flex gap-3 sm:gap-6 items-center order-3 justify-center sm:justify-end">
            <CurrencyDropdown /> 
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

const CurrencyDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('USD');

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition text-xs sm:text-sm"
      >
        <span>{selected}</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50">
          
          <button
            onClick={() => { setSelected('USD'); setIsOpen(false); }}
            className="w-full px-3 sm:px-4 py-2 text-left hover:bg-gray-100 text-xs sm:text-sm"
          >
            USD $
          </button>
          <button
            onClick={() => { setSelected('EUR'); setIsOpen(false); }}
            className="w-full px-3 sm:px-4 py-2 text-left hover:bg-gray-100 text-xs sm:text-sm"
          >
            EUR €
          </button>
        </div>
      )}
    </div>
  );
};

const LanguageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('ENGLISH');

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition text-xs sm:text-sm"
      >
        <span className="hidden sm:inline">{selected}</span>
        <span className="inline sm:hidden">{selected.substring(0, 2)}</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50">
          <button
            onClick={() => { setSelected('ENGLISH'); setIsOpen(false); }}
            className="w-full px-3 sm:px-4 py-2 text-left hover:bg-gray-100 text-xs sm:text-sm"
          >
            ENGLISH
          </button>
          <button
            onClick={() => { setSelected('ITALIANO'); setIsOpen(false); }}
            className="w-full px-3 sm:px-4 py-2 text-left hover:bg-gray-100 text-xs sm:text-sm"
          >
            ITALIANO
          </button>
        </div>
      )}
    </div>
  );
};