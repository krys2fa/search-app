import axios from "axios";

const parseData = (response) => {
  const lines = response.data.split("\n");
  const jsonData = [];
  lines.forEach((line) => {
    if (line.trim() !== "") {
      try {
        const parsedData = JSON.parse(line);
        jsonData.push(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  });
  return jsonData;
};

export const searchAction = (query) => {
  const apiUrl = "https://torre.ai/api/entities/_searchStream";
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, {
        limit: 10,
        query: `${query}`,
        excludeContacts: true,
        excludedPeople: [],
        identityType: "person",
        meta: false,
        torreGgId: "949798",
      });
      const payload = parseData(response);

      dispatch({
        type: "UPDATE_SEARCH_RESULTS",
        payload,
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
