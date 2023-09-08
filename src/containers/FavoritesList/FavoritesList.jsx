import React from "react";
import { useSelector } from "react-redux";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.search.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
