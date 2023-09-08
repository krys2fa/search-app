import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/actions/favoritesActions.js";

const SearchResults = ({ searchTerm }) => {
  const dispatch = useDispatch();
  console.log("searchterm", searchTerm);

  const searchResults = useSelector((state) => {
    console.log("state", state);
    return state.search.results;
  });

  const addFavoriteItem = (item) => {
    console.log("item", item);
    dispatch(addToFavorites(item));
  };

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchTerm.trim().length > 0 &&
          searchResults &&
          searchResults.map((result) => (
            <li key={result.ggId}>
              <span>{result.name}</span>
              <button id={result.ggId} onClick={() => addFavoriteItem(result)}>
                Add to Favorites
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
