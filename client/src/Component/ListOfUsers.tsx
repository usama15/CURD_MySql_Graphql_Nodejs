import React, { useEffect } from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_USER } from "../Graphql/Mutation";

const ListOfUsers = () => {
  const { data, error } = useQuery(GET_ALL_USERS);
  useEffect(() => {}, [data]);
  const [deleteUser] = useMutation(DELETE_USER);

  const deleteUsers = (id: any): void => {
    deleteUser({ variables: { id: id } });
  };
  return (
    <div>
      {data
        ? data.getAllUsers.map((user: any) => (
            <div>
              {user.name} / {user.username}
              <button
                onClick={(e) => {
                  deleteUsers(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          ))
        : console.warn(error)}
    </div>
  );
};

export default ListOfUsers;
