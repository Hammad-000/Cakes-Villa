import { useState } from "react";



function SearchBox({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input changes and pass to parent component
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // Update local state
    onSearchChange(e.target.value); // Pass value to parent
  };

  return (
    <div className="mb-4 w-full">
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleInputChange}
        className="border px-4 py-2 w-full rounded"
      />
    </div>
  );
}

export default SearchBox;
