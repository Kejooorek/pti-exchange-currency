import React from "react";

interface Person {
  name?: string | null;
  picture?: string | null;
  email?: string | null;
}

const HelloPage = ({ name, picture, email }: Person) => {
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
