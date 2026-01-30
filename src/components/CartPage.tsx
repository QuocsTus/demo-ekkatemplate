import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

// Định nghĩa kiểu dữ liệu sản phẩm trong giỏ hàng
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export const CartPage: React.FC = () => {
  // Dữ liệu mẫu khởi tạo dựa theo ảnh
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Stylish Baby Shoes",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=100",
      price: 56.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Unisex Fully Solid Hoodie",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100",
      price: 75.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Beautiful T-shirt For Women",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100",
      price: 48.0,
      quantity: 1,
    },
    {
      id: 4,
      name: "Wool Hat For Men",
      image:
        "https://images.unsplash.com/photo-1533055646279-f327b5a19671?w=100",
      price: 95.0,
      quantity: 1,
    },
  ]);

  // Logic cập nhật số lượng
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  // Logic xóa sản phẩm
  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Tính toán tiền bạc
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryCharges = 80.0;
  const totalAmount = subTotal + deliveryCharges;

  return (
    <div>
      <Breadcrumb currentPage="Cart" />
      <div className="min-h-screen py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* CỘT TRÁI: DANH SÁCH SẢN PHẨM */}
            <div className="lg:w-2/3 bg-white">
              <div className="overflow-x-auto py-4 bg-white shadow-sm border border-gray-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b text-sm font-bold text-gray-700">
                      <th className="pl-4 pb-4 w-1/2">Product</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4 text-center">Quantity</th>
                      <th className="pb-4">Total</th>
                      <th className="pb-4 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="group">
                        <td className="py-6 flex items-center gap-4 pl-4">
                          <div className="w-16 h-16 bg-gray-100 border rounded p-1">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            {item.name}
                          </span>
                        </td>
                        <td className="py-6 text-sm text-gray-600">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="py-6">
                          <div className="flex items-center justify-center border w-24 mx-auto rounded">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 py-1 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              readOnly
                              value={item.quantity}
                              className="w-10 text-center text-sm border-none focus:ring-0"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-6 text-sm font-bold text-gray-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-6 text-right pr-2">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button className="text-sm font-bold text-gray-800 underline hover:text-blue-600">
                  <Link
                    to="/"
                    className="text-sm font-bold text-gray-800 underline hover:text-blue-600"
                  >
                    Continue Shopping
                  </Link>
                </button>
                <Link
                  to="/checkout"
                  className="bg-blue-600 text-white px-8 py-3 rounded-sm font-medium uppercase text-sm hover:bg-blue-700 transition-colors"
                >
                  Check out
                </Link>
              </div>
            </div>

            {/* CỘT PHẢI: SUMMARY */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                <h3 className="text-xl text-gray-800 mb-2">Summary</h3>

                {/* Mục Estimate Shipping */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4 py-4 cursor-pointer border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">
                      Estimate Shipping
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <span className="block">
                      Enter your destination to get a shipping estimate
                    </span>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select className="w-full text-sm border border-gray-200 p-3">
                        <option>United States</option>
                        <option>Vietnam</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State/Province
                      </label>
                      <select className="w-full text-sm border border-gray-200 p-3">
                        <option>Please Select a region, state</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Zip/Postal Code
                      </label>
                      <input
                        type="text"
                        placeholder="Zip/Postal Code"
                        className="w-full text-sm border border-gray-200 p-3 pl-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Chi tiết giá tiền */}
                <div className="pt-4 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sub-Total</span>
                    <span className="font-medium text-gray-800">
                      ${subTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Charges</span>
                    <span className="font-medium text-gray-800">
                      ${deliveryCharges.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Coupan Discount</span>
                    <button className="text-red-500 font-semibold">
                      Apply Coupan
                    </button>
                  </div>

                  <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-4 mt-2">
                    <span>Total amount</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
