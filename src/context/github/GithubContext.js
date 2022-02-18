import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // In case you want to fetch users for testing and searchUser function is made by modifying this function
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
