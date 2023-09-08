import React from "react";
import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import {
  searchAction,
  updateRecentSearches,
} from "../../redux/actions/searchActions.js";

const SearchBar = ({ onSearchTermChange }) => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value;
    console.log(query);

    onSearchTermChange(query);
    if (query.trim().length > 0) {
      console.log("q", query.length);
      dispatch(searchAction(query));
      dispatch(updateRecentSearches(query));
    }
  };

  const handleChange = debounce(handleSearch, 500);

  return (
    <div>
      <input type="text" placeholder="Enter name..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
