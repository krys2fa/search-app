import React from "react";
import { render } from "@testing-library/react";
import RecentSearches from "./RecentSearches";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("RecentSearches Component", () => {
  it("renders recent searches when available", () => {
    // Mock the recent searches data
    const recentSearchesData = ["Akin", "Delu"];

    // Render the component with mocked data
    const { getByText } = render(
      <Provider
        store={mockStore({ search: { recentSearches: recentSearchesData } })}
      >
        <RecentSearches />
      </Provider>
    );

    expect(getByText("Akin")).toBeInTheDocument();
    expect(getByText("Delu")).toBeInTheDocument();
  });

  it("displays 'No recent searches available' message", () => {
    const { getByText } = render(
      <Provider store={mockStore({ search: { recentSearches: [] } })}>
        <RecentSearches />
      </Provider>
    );

    expect(getByText("No recent searches available.")).toBeInTheDocument();
  });
});
