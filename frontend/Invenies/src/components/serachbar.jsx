import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <form className="mt-6 mb-5 w-full flex justify-center items-center">
      <div className="w-1/3">
        <input
          type="search"
          id="default-search"
          className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-cian-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by name, email, or city..."
          value={searchTerm}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
};

export default Searchbar;
