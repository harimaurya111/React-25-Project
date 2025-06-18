import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <p className="mt-2 text-green-600 font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
