import React, { useState } from 'react';

// 1. Interface Product
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  isSale?: boolean;
  rating: number;
  reviews: number;
  colors: string[];
  category: 'clothing' | 'shoes' | 'tech' | 'accessories';
}

// 2. Data 8 sản phẩm
const allProducts: Product[] = [
  { id: 1, name: 'Premium Wireless Headphone', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', price: 99.99, originalPrice: 149.99, discount: 33, rating: 4.5, reviews: 128, colors: ['#000000', '#FFFFFF', '#FF6B6B'], category: 'tech' },
  { id: 2, name: 'Casual Sport Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', price: 79.99, originalPrice: 99.99, discount: 20, isSale: true, rating: 4.2, reviews: 95, colors: ['#1F1F1F', '#FF8C42', '#4ECDC4'], category: 'tech' },
  { id: 3, name: 'Classic Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', price: 129.99, isNew: true, rating: 4.8, reviews: 56, colors: ['#000000', '#8B4513', '#FFD700'], category: 'accessories' },
  { id: 4, name: 'Leather Backpack', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', price: 189.99, originalPrice: 249.99, discount: 24, rating: 4.6, reviews: 234, colors: ['#1C1C1C', '#654321', '#8B0000'], category: 'accessories' },
  { id: 5, name: 'Elegant Wallet', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', price: 59.99, originalPrice: 79.99, discount: 25, isSale: true, rating: 4.4, reviews: 167, colors: ['#000000', '#FFFFFF', '#8B4513'], category: 'accessories' },
  { id: 6, name: 'Sports Shoes Pro', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', price: 139.99, originalPrice: 179.99, discount: 22, isNew: true, rating: 4.7, reviews: 312, colors: ['#000000', '#FFFFFF', '#FF0000'], category: 'shoes' },
  { id: 7, name: 'Premium Belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', price: 49.99, originalPrice: 69.99, discount: 29, rating: 4.3, reviews: 89, colors: ['#1C1C1C', '#8B4513'], category: 'accessories' },
  { id: 8, name: 'Casual T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', price: 34.99, originalPrice: 49.99, discount: 30, isSale: true, rating: 4.5, reviews: 445, colors: ['#000000', '#FFFFFF', '#4169E1', '#FF69B4'], category: 'clothing' },
];

export const TopCollection: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="container py-12 md:py-16">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Top Collection</h2>
          <p className="text-gray-600 text-sm md:text-base">Discover our premium selection of products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isHovered={hoveredProduct === product.id}
              onHover={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              onAddToCart={onAddToCart}
              onQuickView={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Render Modal Chi tiết sản phẩm */}
      {selectedProduct && (
        <ProductQuickView 
          isOpen={!!selectedProduct} 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

// --- COMPONENT MODAL CHI TIẾT SẢN PHẨM ---
const ProductQuickView: React.FC<{ isOpen: boolean; onClose: () => void; product: Product }> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');

  // Mảng ảnh giả lập để thay đổi khi click thumb
  const thumbnails = [
    product.image,
    product.image + "&sat=-100",
    product.image + "&hue=100",
    product.image + "&sepia=80",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg relative shadow-2xl flex flex-col md:flex-row">
        
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* TRÁI: Ảnh & Thumbnails */}
        <div className="md:w-1/2 p-6 flex flex-col items-center">
          <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
            <img src={thumbnails[selectedColor]} alt={product.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex gap-2 justify-center">
            {thumbnails.map((img, idx) => (
              <button key={idx} onClick={() => setSelectedColor(idx)} className={`w-16 h-16 border-2 rounded overflow-hidden ${selectedColor === idx ? 'border-blue-500' : 'border-gray-200'}`}>
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* PHẢI: Thông tin chi tiết */}
        <div className="md:w-1/2 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
          
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>}
          </div>

          <div className="mb-6">
            <span className="block text-sm font-bold text-gray-700 uppercase mb-3">Color</span>
            <div className="flex gap-3">
              {product.colors.map((color, idx) => (
                <button key={idx} onClick={() => setSelectedColor(idx)} style={{ backgroundColor: color }} className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === idx ? 'border-gray-800 scale-110' : 'border-transparent'}`} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <span className="block text-sm font-bold text-gray-700 uppercase mb-3">Size</span>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`w-10 h-10 flex items-center justify-center border text-sm transition-all ${selectedSize === size ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-200 text-gray-400 hover:border-gray-400'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-auto">
            <div className="flex items-center border border-gray-200 rounded">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 hover:bg-gray-50 border-r border-gray-200">-</button>
              <span className="px-6 font-medium">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 hover:bg-gray-50 border-l border-gray-200">+</button>
            </div>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded flex items-center justify-center gap-2 transition-colors uppercase text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT CARD SẢN PHẨM ---
const ProductCard: React.FC<{
  product: Product;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  onAddToCart: () => void;
  onQuickView: () => void;
}> = ({ product, isHovered, onHover, onHoverEnd, onAddToCart, onQuickView }) => {
  
  const getSizes = (cat: string) => {
    if (cat === 'clothing') return ['S', 'M', 'L', 'XL'];
    if (cat === 'shoes') return ['38', '39', '40', '41'];
    return [];
  };

  const sizes = getSizes(product.category);
  const [activeSize, setActiveSize] = useState(sizes[0] || '');
  const [activeColor, setActiveColor] = useState(product.colors[0]);

  return (
    <div className="flex flex-col h-full group" onMouseEnter={onHover} onMouseLeave={onHoverEnd}>
      <div className="relative aspect-square bg-gray-100 rounded overflow-hidden cursor-pointer mb-4">
        <img src={product.image} alt={product.name} className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} />

        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-[10px] font-bold z-10">-{product.discount}%</div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
          {product.isSale && <span className="bg-orange-500 text-white px-2 py-1 rounded text-[10px] font-bold uppercase">Sale</span>}
          {product.isNew && <span className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold uppercase">New</span>}
        </div>

        <div className={`absolute right-3 bottom-3 flex flex-col gap-1 transition-all duration-500 ease-out z-20 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <button onClick={(e) => { e.stopPropagation(); onAddToCart(); }} title="Add to Cart" className="bg-white text-gray-600 p-2.5 shadow-md hover:bg-blue-600 hover:text-white transition-all border border-gray-100 rounded-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
          <button title="Wishlist" className="bg-white text-gray-600 p-2.5 shadow-md hover:bg-red-500 hover:text-white transition-all border border-gray-100 rounded-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </button>
          <button title="Compare" className="bg-white text-gray-600 p-2.5 shadow-md hover:bg-orange-500 hover:text-white transition-all border border-gray-100 rounded-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          </button>
          {/* Nút Quick View để mở modal */}
          <button onClick={(e) => { e.stopPropagation(); onQuickView(); }} title="Quick View" className="bg-white text-gray-600 p-2.5 shadow-md hover:bg-blue-400 hover:text-white transition-all border border-gray-100 rounded-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          ))}
          <span className="text-[10px] text-gray-500">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</span>
          {product.originalPrice && <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>}
        </div>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div className="flex gap-2">
            {product.colors.map((color, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setActiveColor(color); }} className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center p-[1px] ${activeColor === color ? 'border-blue-600 scale-110 shadow-md' : 'border-transparent hover:border-gray-300'}`}><div className="w-full h-full rounded-full" style={{ backgroundColor: color }} /></button>
            ))}
          </div>
          {sizes.length > 0 && (
            <div className="flex gap-1">
              {sizes.map(s => (
                <button key={s} onClick={(e) => { e.stopPropagation(); setActiveSize(s); }} className={`w-7 h-7 text-[10px] border rounded transition-all font-bold ${activeSize === s ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-200 text-gray-500 hover:border-blue-400'}`}>{s}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};