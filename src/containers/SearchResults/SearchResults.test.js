import React from "react";
import { render, screen } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import SearchResults from "./SearchResults";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("SearchResults component", () => {
  const dispatch = jest.fn();
  const mockUseDispatch = useDispatch;

  const mockSearchResults = [
    {
      ggId: "1",
      username: "user1",
      imageUrl: "user1-image",
      name: "User 1",
    },
    {
      ggId: "2",
      username: "user2",
      imageUrl: "user2-image",
      name: "User 2",
    },
  ];

  const mockFavorites = [
    {
      ggId: "1",
      username: "user1",
      imageUrl: "user1-image",
      name: "User 1",
    },
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({}));
    mockUseDispatch.mockReturnValue(dispatch);
  });

  it("renders the SearchResults component with results", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        search: {
          results: mockSearchResults,
        },
        favorites: {
          favorites: mockFavorites,
        },
      })
    );

    render(<SearchResults searchTerm="test" />);

    expect(screen.getByText("User 1")).toBeInTheDocument();
    expect(screen.getByText("User 2")).toBeInTheDocument();

    expect(screen.getAllByTestId("star-icon")).toHaveLength(2);
  });

  it("renders the SearchResults component with no results", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        search: {
          results: [],
        },
        favorites: {
          favorites: [],
        },
      })
    );

    render(<SearchResults searchTerm="test" />);

    expect(screen.getByText("No results available")).toBeInTheDocument();
  });
});
