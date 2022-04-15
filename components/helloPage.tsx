import React from "react";
import { User } from "../types/userType";

const HelloPage = ({ name, picture, email }: User) => {
  return (
    <>
      <h1>Hi:{name}</h1>
      <p>Email :{email}</p>
      {picture && <img src={picture} alt="photo" />}
      <a href="/api/auth/logout">
        <button>Logout</button>
      </a>
    </>
  );
};

export default HelloPage;
