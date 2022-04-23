import React from "react";
import CardsComponents from "../components/CardsComponent";
import CurrenciesStatus from "./CurrenciesStatus";
const DashBoard = () => {
  return (
    <main className=" h-screen w-full bg-gray-50 rounded-xl">
      <CardsComponents></CardsComponents>
      <CurrenciesStatus></CurrenciesStatus>
    </main>
  );
};

export default DashBoard;
  