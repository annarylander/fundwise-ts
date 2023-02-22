import { createContext, useReducer } from "react";
import fundReducer from "./FundReducer";

interface Props {
  children: React.ReactNode;
}

interface FundContextProps {
  funds: [];
  loading: boolean;
  searchFunds: (query: string) => void;
  clearResults: () => void;
  fetchFunds: () => void;
}

export const FundContext = createContext({} as FundContextProps);

export const FundProvider = ({ children }: Props) => {
  const defaultState = {
    funds: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(fundReducer, defaultState);

  const searchFunds = async (query: string) => {
    const payload = { query };
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/fund/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    dispatch({
      type: "GET_FUNDS",
      payload: data.results,
    });
  };

  const fetchFunds = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/fund/`);
    const data = await res.json();

    dispatch({
      type: "GET_FUNDS",
      payload: data.data,
    });
  };

  const clearResults = () => dispatch({ type: "CLEAR_FUNDS" });

  return (
    <FundContext.Provider
      value={{
        searchFunds,
        funds: state.funds,
        loading: state.loading,
        fetchFunds,
        clearResults,
      }}
    >
      {children}
    </FundContext.Provider>
  );
};

export default FundContext;
