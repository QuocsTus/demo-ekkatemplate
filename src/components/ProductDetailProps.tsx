import React, { useState } from 'react';

interface ProductDetailProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    colors: string[];
    category: string;
  };
}

export const ProductQuickView: React.FC<ProductDetailProps> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');

  if (!isOpen) return null;

  // Giả lập danh sách ảnh thu nhỏ dựa trên màu sắc
  const thumbnails = [
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&sat=-100',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&hue=100',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&sepia=80',
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg relative shadow-2xl flex flex-col md:flex-row">
        
        {/* Nút đóng Modal */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* BÊN TRÁI: Ảnh sản phẩm */}
        <div className="md:w-1/2 p-6 flex flex-col items-center">
          <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
            <img 
              src={thumbnails[selectedColor]} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Danh sách ảnh thu nhỏ (Thumbnails) */}
          <div className="flex gap-2 justify-center">
            {thumbnails.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedColor(idx)}
                className={`w-16 h-16 border-2 rounded overflow-hidden transition-all ${selectedColor === idx ? 'border-blue-500' : 'border-gray-200'}`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* BÊN PHẢI: Thông tin chi tiết */}
        <div className="md:w-1/2 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
          
          {/* Rate sao */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}`} 
                fill="currentColor" viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Mô tả chi tiết */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          {/* Giá sản phẩm */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Chọn Color */}
          <div className="mb-6">
            <span className="block text-sm font-bold text-gray-700 uppercase mb-3">Color</span>
            <div className="flex gap-3">
              {['#f3d082', '#97e1ff', '#47ffce', '#c9ff97', '#e5afff'].map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(idx)}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === idx ? 'border-gray-800 scale-110' : 'border-transparent'}`}
                />
              ))}
            </div>
          </div>

          {/* Chọn Size */}
          <div className="mb-8">
            <span className="block text-sm font-bold text-gray-700 uppercase mb-3">Size</span>
            <div className="flex gap-2">
              {['S', 'M', 'X', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center border text-sm transition-all ${selectedSize === size ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-200 text-gray-400 hover:border-gray-400'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Số lượng và Nút Add to Cart */}
          <div className="flex gap-4 mt-auto">
            <div className="flex items-center border border-gray-200 rounded">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-4 py-2 hover:bg-gray-50 border-r border-gray-200"
              >-</button>
              <span className="px-6 font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="px-4 py-2 hover:bg-gray-50 border-l border-gray-200"
              >+</button>
            </div>
            
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded flex items-center justify-center gap-2 transition-colors uppercase tracking-wider text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};