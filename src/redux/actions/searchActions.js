import axios from "axios";

export const searchAction = (word) => {
  const apiUrl = "https://search.torre.co/people/_search";
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl);
      console.log("response", response.data.results);
      dispatch({
        type: "UPDATE_SEARCH_RESULTS",
        payload: response.data.results,
      });
      return;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};

export const updateRecentSearches = (search) => ({
  type: "UPDATE_RECENT_SEARCHES",
  payload: search,
});
