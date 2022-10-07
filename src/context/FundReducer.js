const fundReducer = (state, action) => {
  switch (action.type) {
    case "GET_FUNDS":
      return {
        ...state,
        funds: action.payload,
        loading: false,
      };
    case "SEARCH_FUNDS":
      return {
        ...state,
        funds: action.payload,
        loading: false,
      };
    case "CLEAR_FUNDS":
      return {
        ...state,
        funds: [],
      };
    default:
      return state;
  }
};

export default fundReducer;
