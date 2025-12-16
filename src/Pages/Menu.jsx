import { useState } from "react";
import { Link } from 'react-router-dom';
import products from "../data/products";
import CategoryFilter from "../Components/CategoryFilter";

function Menu() {
  const [selectedCategories, setSelectedCategories] = useState([]);

 
  const handleCategoryChange = (category, isChecked) => {
    setSelectedCategories((prevSelected) => {
      if (isChecked) {
        return [...prevSelected, category]; 
      } else {
        return prevSelected.filter(item => item !== category); 
      }
    });
  };

  const filteredProducts = products.filter(product =>
    selectedCategories.length === 0 || selectedCategories.includes(product.categoryTitle)
  );

  return (
    <div className="menu-page px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Our Menu</h1>
      <p className="text-lg text-center text-gray-600 mb-8">Explore our delicious selection of cakes and pastries.</p>
      
 
      <CategoryFilter 
        selectedCategories={selectedCategories} 
        onChangeCategory={handleCategoryChange} 
      />

      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card bg-white border border-gray-200 rounded-lg shadow-md p-4">
        
            <img 
              src={product.image || "/path/to/default-image.jpg"} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-md mb-4"
              onError={(e) => e.target.src = "/path/to/default-image.jpg"} r
            />
            
            <h2 className="product-name text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="product-description text-gray-500 text-sm mb-2">{product.description}</p>
            <p className="product-price text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
 
            <Link to={`/product/${product.id}`} className="product-link mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md text-center hover:bg-blue-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
