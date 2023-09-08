import React from "react";
import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import {
  searchAction,
  updateRecentSearches,
} from "../../redux/actions/searchActions.js";
import SearchBarElement from "../../components/SearchBarElement/SearchBarElement.jsx";

const SearchBar = ({ onSearchTermChange }) => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value;

    onSearchTermChange(query);
    if (query.trim().length > 0) {
      dispatch(searchAction(query));
      dispatch(updateRecentSearches(query));
    }
  };

  const handleChange = debounce(handleSearch, 500);

  return <SearchBarElement handleChange={handleChange} />;
};

export default SearchBar;
