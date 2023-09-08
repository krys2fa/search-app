import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";
import { FaTrashAlt } from "react-icons/fa";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const removeFavoriteItem = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Favorites</h2>
      {favorites && favorites.length > 0 ? (
        <ul className="list-group">
          {favorites.map((favorite) => (
            <li
              key={favorite.ggId}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{favorite.name}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFavoriteItem(favorite.ggId)}
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
