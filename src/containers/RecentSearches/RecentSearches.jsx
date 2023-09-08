import React from "react";
import { useSelector } from "react-redux";

const RecentSearches = () => {
  const recentSearches = useSelector((state) => state.search.recentSearches);

  return (
    <div>
      <h2>Recent Searches</h2>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
