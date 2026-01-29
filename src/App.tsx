import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ImageSlider } from './components/ImageSlider';
import { TopCollection } from './components/TopCollectionSection';

function App() {
  const handleAddToCart = () => {
    console.log('Item added to cart');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ImageSlider />
        <TopCollection onAddToCart={handleAddToCart} />

        {/* Placeholder sections for future content */}
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

        <section id="products" className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Products</h2>
            <p className="text-gray-600 text-lg">Featured products and deals</p>
          </div>
        </section>

        <section id="offers" className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hot Offers</h2>
            <p className="text-gray-600 text-lg">Limited time special deals</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;