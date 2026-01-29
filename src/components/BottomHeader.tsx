import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  submenu?: string[];
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  {
    label: 'CATEGORIES',
    href: '#categories',
    submenu: ['Electronics', 'Fashion', 'Home & Garden', 'Sports']
  },
  {
    label: 'PRODUCTS',
    href: '#products',
    submenu: ['New Arrivals', 'Best Sellers', 'Sale Items', 'Featured']
  },
  {
    label: 'PAGES',
    href: '#pages',
    submenu: ['About Us', 'Contact', 'FAQ', 'Blog']
  },
  {
    label: 'OTHERS',
    href: '#others',
    submenu: ['Gift Cards', 'Shipping Info', 'Returns', 'Track Order']
  },
  {
    label: 'BLOG',
    href: '#blog',
    submenu: ['Latest Posts', 'Travel', 'Lifestyle', 'Reviews']
  },
  {
    label: 'ELEMENTS',
    href: '#elements',
    submenu: ['Buttons', 'Forms', 'Cards', 'Tables']
  },
  { label: 'HOT OFFERS', href: '#offers' },
];

export const BottomHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 relative">
      <div className="container">
        <div className="py-4 flex items-center justify-between gap-4 md:space-between">
          {/* Left - Menu Icon (Mobile only) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className=" text-gray-600 hover:text-gray-900 transition p-1 flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-blue-600 transition py-2 px-2 lg:px-3 whitespace-nowrap"
                >
                  {item.label}
                </a>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                    {item.submenu.map((submenuItem) => (
                      <a
                        key={submenuItem}
                        href={`#${submenuItem.toLowerCase()}`}
                        className="block px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition first:rounded-t last:rounded-b"
                      >
                        {submenuItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right - Sort/Filter Icon (Mobile only) */}
          <button className=" text-gray-600 hover:text-gray-900 transition p-1 flex-shrink-0">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Width Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 z-40 shadow-md">
          <div className="container">
            <nav className="flex flex-col gap-0">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition border-b border-gray-100"
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 flex flex-col gap-0 bg-gray-50">
                      {item.submenu.map((submenuItem) => (
                        <a
                          key={submenuItem}
                          href={`#${submenuItem.toLowerCase()}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition"
                        >
                          {submenuItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};