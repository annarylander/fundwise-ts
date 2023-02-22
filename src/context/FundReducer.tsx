export type FundState = {
  funds: [];
  loading: boolean;
};

export type ReducerAction = {
  type: string;
  payload?: any;
};

const fundReducer = (state: FundState, action: ReducerAction) => {
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
        loading: false,
      };
    default:
      return state;
  }
};

export default fundReducer;
