import Checkbox from "./Checkbox";
import { categoryTitle } from "../data/category";

function CategoryFilter({ selectedCategories, onChangeCategory }) {
  return (
    <div className="h-65 mt-2 p-4 space-y-2 border border-gray-200 shadow-lg rounded-md">
      <h3 className="font-semibold text-lg">Category Filter</h3>
      {categoryTitle.map((category, index) => (
        <Checkbox
          key={index}
          id={`category-${index}`}
          text={category}
          checked={selectedCategories.includes(category)} // controls checkbox state
          onChange={(e) => onChangeCategory(category, e.target.checked)} // updates selected categories
        />
      ))}
    </div>
  );
}

export default CategoryFilter;
