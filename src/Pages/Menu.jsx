import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import CategoryFilter from "../Components/CategoryFilter";
import SearchBox from "../Components/SearchBox";
import ProductsCart from "../Components/ProductsCart";
import PriceRange from "../Components/PriceRange";
import ProductDetailpg from "./ProductDetailpg";

function Menu() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Initialize price range state
  const initPriceRange = {
    min: Math.min(...products.map(product => product.price)),
    max: Math.max(...products.map(product => product.price)),
    isApplied: false,
  };

  const [priceRange, setPriceRange] = useState(initPriceRange);

  // Filter products based on selected categories, search term, and price range
  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.categoryTitle);

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriceRange =
        product.price >= priceRange.min && product.price <= priceRange.max;

      return matchesCategory && matchesSearch && matchesPriceRange;
    });
  }, [selectedCategories, searchTerm, priceRange]);

  // Handle category change
  const handleCategoryChange = (category, isChecked) => {
    setSelectedCategories((prevSelected) => {
      if (isChecked) {
        return [...prevSelected, category];
      } else {
        return prevSelected.filter((item) => item !== category);
      }
    });
  };

  // Handle search term change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="menu-page flex flex-wrap px-4 py-8 space-x-4">
      <div className="category-sidebar w-full lg:w-64 p-4 bg-border-gray-300 mb-4 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <CategoryFilter
          selectedCategories={selectedCategories}
          onChangeCategory={handleCategoryChange}
        />
        {/* Pass priceRange state and setter to PriceRange component */}
        <PriceRange 
          priceRange={priceRange} 
          initPriceRange={initPriceRange} 
          setPriceRange={setPriceRange} 
        />
      </div>

      <div className="main-content flex-1 p-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Menu</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Explore our delicious selection of cakes and pastries.</p>
        <SearchBox onSearchChange={handleSearchChange} className="w-full lg:w-auto mb-6" />
        <ProductsCart filteredProducts={filterProducts} />
      </div>
    </div>
  );
}

export default Menu;
