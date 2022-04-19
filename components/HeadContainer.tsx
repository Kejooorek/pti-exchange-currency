import React from "react";
import { User } from "../types/userType";

const HeadContainer = ({ name }: User) => {
  return (
    <>
      <main className="flex flex-col justify-center items-center  h-80 w W-full bg-slate-100  w-full text-center bg-white rounded-lg border shadow-md">
        <h5 className="mb-6 text-6xl font-bold text-gray-900 dark:text-white">
          Witaj,<span className="text-blue-800">{name}</span>!
        </h5>
        <p className="mb-5 text-xl text-gray-500 sm:text-lg dark:text-gray-400">
          Skonfiguruj swoje konto, aby móc wydawać pieniądze, wysyłać i odbierać
          płatności - i nie tylko.
        </p>
      </main>
    </>
  );
};

export default HeadContainer;
