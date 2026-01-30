import React, { useState } from 'react'; // Sửa: import thêm useState
import { CartSidebar } from './CartSideBar';
import { Link } from 'react-router-dom';

export const BodyHeader: React.FC = () => {
  // Sửa: Đưa state vào bên trong Component
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30"> {/* Thêm sticky để header luôn ở trên cùng */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 py-6">
          
          {/* Left - Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="logo.png" 
              alt="Ekka Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </div>

          {/* Center - Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-4  lg:px-8">
            <div className="relative w-full max-w-[500px]">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-sm border border-[rgb(52,116,212)] focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
            {/* User Icon */}
            <button className="text-gray-600 hover:text-blue-600 transition hidden sm:block">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Favorite Icon */}
            <button className="text-gray-600 hover:text-red-600 transition relative">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>

            {/* Cart Icon - Nút mở giỏ hàng */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="text-gray-600 hover:text-blue-600 transition relative"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Số 3 là ví dụ cho 3 sản phẩm có sẵn trong giỏ */}
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </div>

      {/* Component Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};