const initialState = {
  count: 0,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_RESULTS":
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
