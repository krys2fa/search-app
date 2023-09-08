import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/actions/favoritesActions.js";
import SearchResultItem from "../../components/SearchResultItem/SearchResultItem.jsx";

const SearchResults = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.results);
  const favorites = useSelector((state) => state.favorites.favorites);

  const [disabledFavorites, setDisabledFavorites] = useState([]);

  const addFavoriteItem = (item) => {
    dispatch(addToFavorites(item));
    setDisabledFavorites([...disabledFavorites, item.ggId]);
  };

  const isFavorite = (ggId) => favorites.some((item) => item.ggId === ggId);
  const isDisabled = (ggId) => disabledFavorites.includes(ggId);

  return (
    <div>
      {searchTerm.trim().length > 0 &&
      searchResults &&
      searchResults.length > 0 ? (
        <ul className="list-group">
          {searchResults.map((result) => (
            <SearchResultItem
              key={result.ggId}
              result={result}
              isFavorite={isFavorite}
              isDisabled={isDisabled}
              addFavoriteItem={addFavoriteItem}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center">No results available</p>
      )}
    </div>
  );
};

export default SearchResults;
