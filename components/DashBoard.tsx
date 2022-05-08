import axios from "axios";
import React, { useState, useEffect } from "react";
import CardsComponents from "../components/CardsComponent";
import CurrenciesStatus from "./CurrenciesStatus";
import { CurrencyType } from "../types/currencyType";

const DashBoard = () => {
  return (
    <main className=" h-screen w-full bg-gray-50 rounded-xl">
      <CardsComponents></CardsComponents>
      <CurrenciesStatus></CurrenciesStatus>
    </main>
  );
};

export default DashBoard;
