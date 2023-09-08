import React from "react";

const handleChange = (event) => {
  console.log(event.target.value);
};

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Enter name..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
