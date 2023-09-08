import React from "react";
import { FaStar } from "react-icons/fa";

const SearchResultItem = ({
  result,
  isFavorite,
  isDisabled,
  addFavoriteItem,
}) => {
  if (!result) {
    return (
      <li style={{ padding: "10px", color: "#333" }}>
        <span>No results available</span>
      </li>
    );
  }

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    textDecoration: "none",
    color: "#333",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    marginLeft: "20px",
  };

  const starStyle = {
    cursor: isDisabled(result.ggId) ? "not-allowed" : "pointer",
    color: isFavorite(result.ggId) ? "gold" : "gray",
  };

  return (
    <li key={result.ggId} style={itemStyle}>
      <a
        href={`https://torre.ai/${result.username}`}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <img
          src={result.imageUrl}
          alt="Profile Pic"
          className="mr-3 rounded-circle"
          style={{ maxWidth: "50px" }}
        />
        <span style={{ marginLeft: "20px" }}>{result.name}</span>
      </a>
      <div
        id={result.ggId}
        onClick={() => !isDisabled(result.ggId) && addFavoriteItem(result)}
        style={starStyle}
      >
        <FaStar size={24} />
      </div>
    </li>
  );
};

export default SearchResultItem;
