import React from "react";
import { useSelector } from "react-redux";

const RecentSearches = () => {
  const recentSearches = useSelector((state) => state.search.recentSearches);

  return (
    <div className="recent-searches-container">
      <h2 className="mb-4 text-center">Recent Searches</h2>
      {recentSearches && recentSearches.length > 0 ? (
        <ul className="list-group">
          {recentSearches.map((search, index) => (
            <li key={index} className="list-group-item">
              {search}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No recent searches available.</p>
      )}
    </div>
  );
};

export default RecentSearches;
