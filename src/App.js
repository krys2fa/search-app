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

  const appStyle = {
    backgroundColor: "#27292d",
    minHeight: "100vh",
    padding: "20px",
    color: "#fff",
    fontFamily: "'Mulish', Helvetica, sans-serif",
  };

  return (
    <div className="App" style={appStyle}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <SearchBar onSearchTermChange={handleSearchTermChange} />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <SearchResults searchTerm={searchTerm} />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <RecentSearches />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FavoritesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
