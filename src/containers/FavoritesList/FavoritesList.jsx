import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";
const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const removeFavoriteItem = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites &&
        favorites.map((favorite) => (
          <div key={favorite.ggId}>
            <span>{favorite.name}</span>
            <button onClick={() => removeFavoriteItem(favorite.ggId)}>
              Remove from Favorites
            </button>
          </div>
        ))}
    </div>
  );
};

export default FavoritesList;
