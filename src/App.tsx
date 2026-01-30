import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ImageSlider } from './components/ImageSlider';
import { TopCollection } from './components/TopCollectionSection';
import { CartPage } from './components/CartPage';
import { Checkout } from './components/Checkout';

// Tạo một component riêng cho nội dung trang chủ
const HomePage = ({ onAddToCart }: { onAddToCart: () => void }) => (
  <main>
    <ImageSlider />
    <TopCollection onAddToCart={onAddToCart} />
    
    {/* Các section cũ của bạn */}
    <section id="home" className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Ekka Store</h2>
        <p className="text-gray-600 text-lg">Explore our amazing collection of products</p>
      </div>
    </section>

    <section id="categories" className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Categories</h2>
        <p className="text-gray-600 text-lg">Browse our product categories</p>
      </div>
    </section>
  </main>
);

function App() {
  const handleAddToCart = () => {
    console.log('Item added to cart');
  };

  return (
    <Router>
      {/* 1. Header nằm ngoài Routes để luôn hiển thị ở mọi trang */}
      <div className="min-h-screen bg-white font-sans text-[rgb(119,119,119)]">
        <Header /> 
        
        {/* 2. Routes chỉ chứa các Route định nghĩa đường dẫn */}
        <Routes>
          {/* Đường dẫn trang chủ */}
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          
          {/* Đường dẫn trang giỏ hàng */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;