import React from "react";
import debounce from "lodash/debounce";

const handleSearch = (event) => {
  console.log(event.target.value);
};

const handleChange = debounce(handleSearch, 500);

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Enter name..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
