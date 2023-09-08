import React from "react";
import { useSelector } from "react-redux";

const SearchResults = ({ searchTerm }) => {
  console.log("searchterm", searchTerm);

  const searchResults = useSelector((state) => {
    console.log("state", state);
    return state.search.results;
  });

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchTerm.trim().length > 0 &&
          searchResults &&
          searchResults.map((result) => (
            <li key={result.ggId}>{result.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
