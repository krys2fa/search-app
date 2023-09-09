import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchResultItem from "./SearchResultItem";

describe("SearchResultItem component", () => {
  const result = {
    ggId: "123",
    username: "testuser",
    imageUrl: "test-image-url",
    name: "Test User",
  };

  const isFavorite = (ggId) => ggId === "123";
  const isDisabled = (ggId) => false;
  const addFavoriteItem = jest.fn();

  it("renders the SearchResultItem component correctly", () => {
    render(
      <SearchResultItem
        result={result}
        isFavorite={isFavorite}
        isDisabled={isDisabled}
        addFavoriteItem={addFavoriteItem}
      />
    );

    expect(screen.getByText("Test User")).toBeInTheDocument();

    expect(screen.getByTestId("star-icon")).toBeInTheDocument();
  });

  it("calls addFavoriteItem when the star icon is clicked", () => {
    render(
      <SearchResultItem
        result={result}
        isFavorite={isFavorite}
        isDisabled={isDisabled}
        addFavoriteItem={addFavoriteItem}
      />
    );

    const starIcon = screen.getByTestId("star-icon");
    fireEvent.click(starIcon);

    expect(addFavoriteItem).toHaveBeenCalledWith(result);
  });
});
