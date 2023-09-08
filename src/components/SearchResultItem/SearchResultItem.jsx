import React from "react";
import { FaStar } from "react-icons/fa";

const SearchResultItem = ({
  result,
  isFavorite,
  isDisabled,
  addFavoriteItem,
}) => {
  return (
    <li
      key={result.ggId}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <a
        href={`https://torre.ai/${result.username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center"
      >
        <img
          src={result.imageUrl}
          alt="Profile Pic"
          className="mr-3 rounded-circle"
          style={{ maxWidth: "50px" }}
        />
        <span>{result.name}</span>
      </a>
      <div
        id={result.ggId}
        onClick={() => !isDisabled(result.ggId) && addFavoriteItem(result)}
        style={{ cursor: isDisabled(result.ggId) ? "not-allowed" : "pointer" }}
      >
        <FaStar size={24} color={isFavorite(result.ggId) ? "gold" : "gray"} />
      </div>
    </li>
  );
};

export default SearchResultItem;
