import Breadcrumb from "./Breadcrumb";

const Checkout = () => {
  return (
    <div>
      <Breadcrumb currentPage="Checkout" />
      <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CỘT BÊN TRÁI (Chiếm 2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. New & Returning Customer - Đã chỉnh grid-cols-1 để nằm dọc */}
            <div className="grid grid-cols-1 gap-10 p-6 border border-gray-100-lg bg-white shadow-sm">
              {/* New Customer */}
              <div className="pb-4">
                {" "}
                {/* Thêm border-b để ngăn cách 2 phần */}
                <h3 className="text-xl font-bold mb-4">New Customer</h3>
                <p className="text-sm text-gray-500 mb-4 font-semibold tracking-tight">
                  Checkout Options
                </p>
                <div className="flex flex-row items-center gap-8 mb-6">
                  {" "}
                  {/* Thay space-y-3 bằng flex flex-row và gap */}
                  <label className="flex items-center gap-3 cursor-pointer text-sm font-medium text-gray-600">
                    <input
                      type="radio"
                      name="checkout_option"
                      className="w-4 h-4 text-blue-600 focus:ring-0"
                      defaultChecked
                    />
                    Register Account
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer text-sm font-medium text-gray-600">
                    <input
                      type="radio"
                      name="checkout_option"
                      className="w-4 h-4 text-blue-600 focus:ring-0"
                    />
                    Guest Account
                  </label>
                </div>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
                  By creating an account you will be able to shop faster, be up
                  to date on an order's status, and keep track of the orders you
                  have previously made.
                </p>
                <button className="bg-blue-600 text-white px-10 py-2.5 font-bold hover:bg-blue-700 transition uppercase text-sm tracking-wider">
                  CONTINUE
                </button>
              </div>

              {/* Returning Customer */}
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-6">
                  Returning Customer
                </h3>
                <div className="space-y-5">
                  {" "}
                  {/* Giới hạn chiều rộng để form không bị quá dài */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700  mb-2 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full p-3.5 border-gray-200-md border text-sm transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700  mb-2 ml-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full p-3.5 border-gray-200-md border transition-all outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-8 pt-2">
                    <button className="bg-blue-600 text-white px-12 py-2.5 font-bold hover:bg-black transition uppercase text-sm tracking-wider shadow-md">
                      LOGIN
                    </button>
                    <a
                      href="#"
                      className="text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors underline underline-offset-4"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/* 2. Billing Details */}
            <div className="p-6 border border-gray-100-lg">
              <h3 className="text-lg font-semibold pb-4">Billing Details</h3>

              <div className="space-y-3 mb-8">
                <p className="text-sm text-gray-500 mb-4 font-semibold tracking-tight">
                  Checkout Options
                </p>
                <div className="flex flex-row items-center gap-8 mb-6">
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="address_option"
                      className="text-blue-600 focus:ring-0"
                      defaultChecked
                    />{" "}
                    I want to use an existing address
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="address_option"
                      className="text-blue-600 focus:ring-0"
                    />{" "}
                    I want to use a new address
                  </label>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full p-3 border-gray-200-md text-sm border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full p-3 border-gray-200-md text-sm border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="w-full p-3 border-gray-200-md text-sm border"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text- font-semibold text-gray-700 mb-1">
                      City
                    </label>
                    <select className="w-full p-3 border-gray-200-md text-sm border">
                      <option>City</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text- font-semibold text-gray-700 mb-1">
                      Postcode
                    </label>
                    <input
                      type="text"
                      placeholder="Post Code"
                      className="w-full p-3 border-gray-200-md text-sm border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text- font-semibold text-gray-700 mb-1">
                      Country
                    </label>
                    <select className="w-full p-3 border-gray-200-md text-sm border">
                      <option>Country</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text- font-semibold text-gray-700 mb-1">
                      Region/State
                    </label>
                    <select className="w-full p-3 border-gray-200-md text-sm border">
                      <option>Select Region</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              <button className="bg-blue-600 text-white px-12 py-2.5 font-bold hover:bg-black transition uppercase text-sm tracking-wider shadow-md">
                Place Order
              </button>
            </div>
          </div>

          {/* CỘT BÊN PHẢI (Chiếm 1/3) */}
          <div className="space-y-8">
            {/* 3. Summary & Delivery Method */}
            <div className="p-6 border border-gray-100-lg shadow-sm">
              <h3 className="text-lg font-bold mb-6 pb-2">Summary</h3>

              {/* Total Price Section */}
              <div className="space-y-3 mb-6 pb-6 border-gray-100">
                <div className="flex justify-between text-sm">
                  <span>Sub-Total</span>
                  <span className="font-bold">$80.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Charges</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Coupan Discount</span>
                  <button className="text-red-500 font-semibold">
                    Apply Coupan
                  </button>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t mt-2">
                  <span>Total Amount</span>
                  <span className="text-blue-600">$80.00</span>
                </div>
              </div>
              <div className="mt-8 space-y-6">
                {[
                  {
                    id: 1,
                    name: "Baby toy teddy bear",
                    price: 60.0,
                    oldPrice: 80.0,
                    image: "https://via.placeholder.com/100",
                    rating: 4,
                  },
                  {
                    id: 2,
                    name: "Smart I watch 2GB",
                    price: 45.0,
                    oldPrice: 58.0,
                    image: "https://via.placeholder.com/100",
                    rating: 4,
                  },
                ].map((product) => (
                  <div key={product.id} className="flex gap-4 items-start">
                    {/* Ảnh sản phẩm */}
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-50 border border-gray-100 rounded-md overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-700 leading-tight mb-1">
                        {product.name}
                      </h4>

                      {/* Rating Stars (Dùng SVG đơn giản) */}
                      <div className="flex gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${i < product.rating ? "text-orange-400" : "text-gray-200"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Giá tiền */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                        <span className="text-sm font-bold text-gray-800">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Màu sắc mẫu (Dots) */}
                      <div className="flex gap-1.5 mt-2">
                        <span className="w-3 h-3 rounded-full bg-[#8D7B68]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#FFB1D1]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#A0E9FF]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#90F1CC]"></span>
                      </div>

                      {/* Size mẫu */}
                      <div className="flex gap-1 mt-2">
                        {["S", "M", "X", "XL"].map((size) => (
                          <span
                            key={size}
                            className={`text-[10px] px-1.5 py-0.5 border rounded ${size === "X" ? "bg-gray-700 text-white border-gray-700" : "text-gray-400 border-gray-100"}`}
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-gray-100-lg shadow-sm">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 uppercase text-gray-700 tracking-wider">
                  Delivery Method
                </h4>
                <span className="text-sm text-gray-400">
                  Please select the preferred delivery method to use on this
                  order
                </span>

                {/* Container bọc ngoài dùng flex-row để xoay ngang các option */}
                <div className="flex flex-row gap-8 mt-2">
                  {/* Option 1: Free Shipping */}
                  <label className="flex flex-col gap-2 cursor-pointer group">
                    <span className="text-sm font-bold text-gray-500">
                      Free Shipping
                    </span>
                    <div className="flex items-center gap-2">
                      {/* Ẩn input radio mặc định bằng opacity-0 và absolute */}
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="delivery"
                          className="peer opacity-0 absolute w-5 h-5 cursor-pointer"
                          defaultChecked
                        />
                        {/* Vòng tròn custom thay thế cho radio mặc định */}
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-600 flex items-center justify-center transition-all">
                          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">
                        Rate - $0.00
                      </span>
                    </div>
                  </label>

                  {/* Option 2: Flat Rate */}
                  <label className="flex flex-col gap-2 cursor-pointer group">
                    <span className="text-sm font-bold text-gray-500">
                      Flat Rate
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="delivery"
                          className="peer opacity-0 absolute w-5 h-5 cursor-pointer"
                        />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-600 flex items-center justify-center transition-all">
                          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">
                        Rate - $5.00
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              {/* Comments */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Add Comments About Your Order
                </label>
                <textarea
                  placeholder="Comments"
                  className="w-full p-3 border-gray-200-md border text-sm focus:ring-0 focus:border-blue-500"
                  rows={3}
                ></textarea>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white">
              {/* Payment Method Header */}
              <h4 className="text-sm font-bold mb-2 uppercase text-gray-800 tracking-wider">
                Payment Method
              </h4>
              <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">
                Please select the preferred delivery method to use on this order
              </p>

              <div className="space-y-4 mb-8">
                {/* Option: Cash On Delivery */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  {/* Container Custom Radio Circle */}
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      type="radio"
                      name="payment_method"
                      className="peer opacity-0 absolute w-full h-full cursor-pointer z-10"
                      defaultChecked
                    />
                    {/* Vòng tròn bên ngoài */}
                    <div className="absolute w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-600 transition-all"></div>
                    {/* Chấm tròn xanh bên trong */}
                    <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                  </div>

                  {/* Text hiển thị */}
                  <span className="text-sm text-gray-400 ">
                    Cash On Delivery
                  </span>
                </label>
              </div>
              {/* Comments */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Add Comments About Your Order
                </label>
                <textarea
                  placeholder="Comments"
                  className="w-full p-3 border-gray-200-md border text-sm focus:ring-0 focus:border-blue-500"
                  rows={3}
                ></textarea>
              </div>

              {/* Agree Terms */}
              <div className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-0 cursor-pointer"
                  id="terms"
                />
                <label
                  htmlFor="terms"
                  className="text-[13px] text-gray-500 leading-tight cursor-pointer"
                >
                  I have read and agree to the{" "}
                  <span className="text-blue-600 font-bold hover:underline">
                    Terms & Conditions
                  </span>
                </label>
              </div>

              {/* Payment Icons */}
              <div className="flex justify-center items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="visa"
                  className="h-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="paypal"
                  className="h-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="mastercard"
                  className="h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Checkout };
