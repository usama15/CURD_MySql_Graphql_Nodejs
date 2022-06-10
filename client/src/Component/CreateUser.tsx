import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";

const CreateUser = () => {
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [createUser, { error }] = useMutation(CREATE_USER);

  console.log(error);
  return (
    <div>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          placeholder="name"
        />
        <input
          onChange={(e) => setUserName(e.target.value)}
          type={"text"}
          placeholder="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type={"text"}
          placeholder="password"
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                name: name,
                username: userName,
                password: password,
              },
            });
          }}
        >
          Create user
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
