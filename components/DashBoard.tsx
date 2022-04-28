import axios from "axios";
import React, { useState, useEffect } from "react";
import CardsComponents from "../components/CardsComponent";
import CurrenciesStatus from "./CurrenciesStatus";
import { CurrencyType } from "../types/currencyType"
const DashBoard = () => {
  const [currenciesList, setCurrenciesList] = useState<CurrencyType[]>([]);

  const fetchCurrency = async () => {
    const url = 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json';
    const res = await axios.get(url);
    const data = await res.data;
    setCurrenciesList(data[0].rates)
  }

  useEffect(() => {
    fetchCurrency()

  }, [])
  console.log(currenciesList)
  return (
    <main className=" h-screen w-full bg-gray-50 rounded-xl">
      <CardsComponents></CardsComponents>
      <CurrenciesStatus ></CurrenciesStatus>
    </main>
  );
};

export default DashBoard;
