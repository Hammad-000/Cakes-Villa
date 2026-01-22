import { useState, useMemo } from "react";
import products from "../data/products";
import CategoryFilter from "../Components/CategoryFilter";
import SearchBox from "../Components/SearchBox";
import ProductsCart from "../Components/ProductsCart";
import PriceRange from "../Components/PriceRange";


function Menu() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const initPriceRange = {
    min: Math.min(...products.map(product => product.price)),
    max: Math.max(...products.map(product => product.price)),
    isApplied: false,
  };

  const [priceRange, setPriceRange] = useState(initPriceRange);

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

  const handleCategoryChange = (category, isChecked) => {
    setSelectedCategories((prevSelected) => {
      if (isChecked) {
        return [...prevSelected, category];
      } else {
        return prevSelected.filter((item) => item !== category);
      }
    });
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1">
        <div className="max-w-9xl mx-auto px-4 py-8 space-x-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full lg:w-72 xl:w-80">
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-sm p-6 border border-gray-200 sticky top-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>
                
                {/* Categories Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">Categories</h3>
                  <CategoryFilter
                    selectedCategories={selectedCategories}
                    onChangeCategory={handleCategoryChange}
                  />
                </div>
                
                {/* Price Range Section */}
                <div className="pt-6 border-t border-gray-300">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">Price Range</h3>
                  <PriceRange 
                    priceRange={priceRange} 
                    initPriceRange={initPriceRange} 
                    setPriceRange={setPriceRange} 
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                      Our Menu
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                    Explore our delicious selection of cakes and pastries. Handcrafted with love and the finest ingredients.
                  </p>
                  
                  {/* Search Box */}
                  <div className="max-w-2xl mx-auto mb-8">
                    <SearchBox 
                      onSearchChange={handleSearchChange} 
                      className="w-full" 
                    />
                  </div>
                </div>

         
                <div className="mb-6">
                  <p className="text-gray-700">
                    Showing <span className="font-bold text-orange-500">{filterProducts.length}</span> of{" "}
                    <span className="font-bold">{products.length}</span> products
                  </p>
                </div>

    
                <ProductsCart filteredProducts={filterProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Menu;