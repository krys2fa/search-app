import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./containers/SearchBar/SearchBar";
import SearchResults from "./containers/SearchResults/SearchResults";
import RecentSearches from "./containers/RecentSearches/RecentSearches";
import FavoritesList from "./containers/FavoritesList/FavoritesList";

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
      <FavoritesList />
    </div>
  );
};

export default App;
