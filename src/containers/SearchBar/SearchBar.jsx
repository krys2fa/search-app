import React from "react";
import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import { searchAction } from "../../redux/actions/searchActions.js";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const word = event.target.value;
    console.log(word);
    dispatch(searchAction(word));
  };

  const handleChange = debounce(handleSearch, 500);
  return (
    <div>
      <input type="text" placeholder="Enter name..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
