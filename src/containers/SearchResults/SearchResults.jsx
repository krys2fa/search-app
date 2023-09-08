import React from "react";
import { useSelector } from "react-redux";

const SearchResults = ({ searchTerm }) => {
  console.log("searchterm", searchTerm);

  const searchResults = useSelector((state) => state.search.results);
  const filteredResults = searchResults.filter((result) =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchTerm.trim().length > 0 &&
          filteredResults.map((result) => (
            <li key={result.ggId}>{result.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
