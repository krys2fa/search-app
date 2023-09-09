import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavoritesList from "./FavoritesList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";

const mockStore = configureStore([]);

describe("FavoritesList Component", () => {
  it("renders favorite items when available", () => {
    const favoriteItemsData = [
      { ggId: "1", name: "Favorite 1" },
      { ggId: "2", name: "Favorite 2" },
    ];

    const store = mockStore({
      favorites: { favorites: favoriteItemsData },
    });

    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <FavoritesList />
      </Provider>
    );

    expect(getByText("Favorite 1")).toBeInTheDocument();
    expect(getByText("Favorite 2")).toBeInTheDocument();

    const trashIcons = getAllByTestId("trash-icon");
    expect(trashIcons.length).toBe(2);
  });

  it("displays 'No favorites added yet' message", () => {
    const store = mockStore({
      favorites: { favorites: [] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <FavoritesList />
      </Provider>
    );

    expect(getByText("No favorites added yet.")).toBeInTheDocument();
  });

  it("removes a favorite item when the trash icon is clicked", () => {
    const favoriteItemsData = [
      { ggId: "1", name: "Favorite 1" },
      { ggId: "2", name: "Favorite 2" },
    ];

    const store = mockStore({
      favorites: { favorites: favoriteItemsData },
    });

    const { getAllByTestId } = render(
      <Provider store={store}>
        <FavoritesList />
      </Provider>
    );

    const trashIcons = getAllByTestId("trash-icon");
    fireEvent.click(trashIcons[0]);

    const actions = store.getActions();
    expect(actions).toEqual([removeFromFavorites("1")]);
  });
});
