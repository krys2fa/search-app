import React, { useState } from "react";
import SearchBar from "./containers/SearchBar/SearchBar";
import SearchResults from "./containers/SearchResults/SearchResults";
import RecentSearches from "./containers/RecentSearches/RecentSearches";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  return (
    <div className="App">
      <SearchBar onSearchTermChange={handleSearchTermChange} />
      <SearchResults searchTerm={searchTerm} />
      <RecentSearches />
    </div>
  );
};

export default App;
