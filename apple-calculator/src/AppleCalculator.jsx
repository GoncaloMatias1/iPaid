import React, { useState } from 'react';
import { Smartphone, Laptop, Watch, Headphones } from 'lucide-react';

const APPLE_PRODUCTS = {
  iPhone: [
    { name: 'iPhone 15 Pro Max', price: 1449 },
    { name: 'iPhone 15 Pro', price: 1199 },
    { name: 'iPhone 15', price: 949 },
    { name: 'iPhone 15 Plus', price: 1099 },
  ],
  Mac: [
    { name: 'MacBook Air M2', price: 1199 },
    { name: 'MacBook Pro 14"', price: 1999 },
    { name: 'MacBook Pro 16"', price: 2499 },
    { name: 'iMac 24"', price: 1499 },
  ],
  Watch: [
    { name: 'Apple Watch Series 9', price: 449 },
    { name: 'Apple Watch Ultra 2', price: 899 },
    { name: 'Apple Watch SE', price: 279 },
  ],
  Audio: [
    { name: 'AirPods Pro 2', price: 279 },
    { name: 'AirPods Max', price: 549 },
    { name: 'AirPods (3rd gen)', price: 179 },
  ],
};

const CategoryIcon = ({ category }) => {
  switch (category) {
    case 'iPhone': return <Smartphone className="w-6 h-6" />;
    case 'Mac': return <Laptop className="w-6 h-6" />;
    case 'Watch': return <Watch className="w-6 h-6" />;
    case 'Audio': return <Headphones className="w-6 h-6" />;
    default: return null;
  }
};

const AppleCalculator = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const totalValue = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  const toggleProduct = (product) => {
    setSelectedProducts(prev => 
      prev.some(p => p.name === product.name)
        ? prev.filter(p => p.name !== product.name)
        : [...prev, product]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Apple Collection Calculator</h1>
        <p className="text-gray-600">Track the value of your Apple products</p>
      </header>

      {/* Total Value Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-2">Your Collection</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-blue-50 rounded-lg p-4 flex-grow">
            <p className="text-gray-600 mb-1">Total Value</p>
            <p className="text-3xl font-bold text-blue-600">€{totalValue.toLocaleString()}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 flex-grow">
            <p className="text-gray-600 mb-1">Items Selected</p>
            <p className="text-3xl font-bold text-green-600">{selectedProducts.length}</p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(APPLE_PRODUCTS).map(([category, products]) => (
          <div key={category} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CategoryIcon category={category} />
              <h2 className="text-xl font-semibold">{category}</h2>
            </div>
            <div className="space-y-3">
              {products.map(product => (
                <div
                  key={product.name}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">€{product.price}</p>
                  </div>
                  <button
                    onClick={() => toggleProduct(product)}
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${
                      selectedProducts.some(p => p.name === product.name)
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    {selectedProducts.some(p => p.name === product.name) && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleCalculator;