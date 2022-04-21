import React from "react";
import { User } from "../types/userType";
import CreditCard from "./CreditCard";

const MainContainer = ({ name }: User) => {
  return (
    <>
      <main className="flex w-full h-96">
        <section className="flex w-full  justify-center items-center pt-4">
          <CreditCard name={name}></CreditCard>
          <CreditCard name={name}></CreditCard>
          <CreditCard name={name}></CreditCard>

        </section>
      </main>

    </>
  );
};

export default MainContainer;
