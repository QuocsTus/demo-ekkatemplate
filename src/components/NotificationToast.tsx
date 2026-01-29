import React, { useState } from 'react';

export const NotificationToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-72 z-50 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <p className="text-xs text-gray-500 font-medium mb-3">Someone in new just bought</p>

      <div className="flex gap-3">
        {/* Product Image */}
        <img
          src="https://images.unsplash.com/photo-1541655355717-84d76a08d0a0?w=60&h=60&fit=crop"
          alt="stylish baby shoes"
          className="w-12 h-12 rounded object-cover flex-shrink-0"
        />

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-gray-800 truncate">stylish baby shoes</p>
          <p className="text-xs text-gray-500">10 Minutes ago</p>
        </div>
      </div>
    </div>
  );
};