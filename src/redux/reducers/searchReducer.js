const initialState = {
  results: [],
  recentSearches: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_RESULTS":
      return { ...state, results: action.payload };
    case "UPDATE_RECENT_SEARCHES":
      return {
        ...state,
        recentSearches: [action.payload, ...state.recentSearches.slice(0, 9)],
      };
    default:
      return state;
  }
};

export default searchReducer;
