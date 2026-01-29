import React, { useState } from 'react';

// 1. Định nghĩa kiểu dữ liệu cho Item trong giỏ hàng
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  // 2. Khởi tạo sẵn 3 sản phẩm như trong ảnh yêu cầu
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 101,
      name: 'T-shirt For Women',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop',
      price: 76.00,
      quantity: 1,
    },
    {
      id: 102,
      name: 'Women Leather Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      price: 64.00,
      quantity: 1,
    },
    {
      id: 103,
      name: 'Girls Nylon Purse',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=100&h=100&fit=crop',
      price: 59.00,
      quantity: 1,
    }
  ]);

  // 3. Logic tăng/giảm số lượng
  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
          : item
      )
    );
  };

  // 4. Tính toán tiền bạc
  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const vat = subTotal * 0.2; // VAT 20% như trong ảnh
  const total = subTotal + vat;


  return (
    <>
      {/* Overlay: Lớp nền mờ khi mở giỏ hàng */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      {/* Main Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[350px] bg-white z-50 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">My Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Product List */}
        <div className="p-4 flex-1 overflow-y-auto max-h-[calc(100vh-350px)]">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 mb-6 relative group">
              <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                   <h3 className="text-sm font-medium text-gray-700">{item.name}</h3>
                   <button className="text-red-500 text-lg leading-none">&times;</button>
                </div>
                
                <div className="mt-1">
                   <span className="text-gray-900 font-bold">${item.price.toFixed(2)}</span>
                   <span className="text-gray-400 text-xs ml-1">x {item.quantity}</span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center mt-2 border w-fit rounded">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 border-r hover:bg-gray-100"
                  >-</button>
                  <span className="px-3 text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 border-l hover:bg-gray-100"
                  >+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary & Buttons */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t bg-white">
          <div className="space-y-2 mb-6 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub-Total :</span>
              <span className="font-bold text-gray-900">${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VAT (20%) :</span>
              <span className="font-bold text-gray-900">${vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg pt-2">
              <span className="text-gray-900">Total :</span>
              <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 px-4 bg-blue-600 text-white font-bold rounded uppercase text-xs hover:bg-blue-700 transition-colors">
              View Cart
            </button>
            <button className="py-3 px-4 bg-[#555555] text-white font-bold rounded uppercase text-xs hover:bg-black transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};