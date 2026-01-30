// import React from 'react';

interface BreadcrumbProps {
  currentPage: string;
}

const Breadcrumb = ({ currentPage }: BreadcrumbProps) => {
  return (
    <div className="bg-gray-50 border-b border-gray-100 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Bên trái: Tên trang hiện tại */}
        <h1 className="text-xl font-medium text-gray-800">{currentPage}</h1>

        {/* Bên phải: Đường dẫn điều hướng */}
        <nav className="text-sm text-gray-500">
          <span className="cursor-pointer">Home</span>
          <span className="mx-2 text-blue-500 cursor-default">»</span>
          <span className="text-blue-500 cursor-default">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;