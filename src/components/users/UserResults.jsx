import React from "react";
import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItems from "./UserItems";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, isLoading, fetchUsers } = useContext(GithubContext);

  
  return (
    <>
      {isLoading && (
        <div>
          <h3 className="text-8xl text-center font-bold mb-8">Loading...</h3>
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItems key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserResults;
