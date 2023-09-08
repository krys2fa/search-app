import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/actions/favoritesActions.js";
import { FaStar } from "react-icons/fa";

const SearchResults = ({ searchTerm }) => {
  const dispatch = useDispatch();
  console.log("searchterm", searchTerm);

  const searchResults = useSelector((state) => state.search.results);

  const [favorites, setFavorites] = useState([]);
  const [disabledFavorites, setDisabledFavorites] = useState([]);

  const addFavoriteItem = (item) => {
    console.log("item", item);
    dispatch(addToFavorites(item));
    setFavorites([...favorites, item.ggId]);
    setDisabledFavorites([...disabledFavorites, item.ggId]);
  };

  const isFavorite = (ggId) => favorites.includes(ggId);
  const isDisabled = (ggId) => disabledFavorites.includes(ggId);

  return (
    <div>
      <h2>Search Results</h2>
      <ul className="list-group">
        {searchTerm.trim().length > 0 &&
          searchResults &&
          searchResults.map((result) => (
            <li key={result.ggId}>
              <a
                href={`https://torre.ai/${result.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <span>
                  <img
                    src={result.imageUrl}
                    alt="Profile Pic"
                    className="mr-3 rounded-circle"
                    style={{ maxWidth: "40px" }}
                  />
                </span>
                <span>{result.name}</span>
              </a>
              <div
                id={result.ggId}
                onClick={() =>
                  !isDisabled(result.ggId) && addFavoriteItem(result)
                }
                style={{
                  cursor: isDisabled(result.ggId) ? "not-allowed" : "pointer",
                }}
              >
                <FaStar
                  size={24}
                  color={isFavorite(result.ggId) ? "gold" : "gray"}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
