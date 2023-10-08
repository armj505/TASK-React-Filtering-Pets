import React from "react";
const SearchBar = ({ setQuery }) => {
  const searchPet = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={searchPet}
      />
    </div>
  );
};

export default SearchBar;
