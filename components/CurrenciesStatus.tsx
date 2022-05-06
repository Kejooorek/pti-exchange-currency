import React, { useEffect, useState } from "react";
import { CurrencyType } from "../types/currencyType";

const [currencies, setCurrencies] = useState<CurrencyType[]>([] |);

const getCurrenciesFromApi = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  setCurrencies(data);
};

useEffect(() => {
  getCurrenciesFromApi(
    "http://api.nbp.pl/api/exchangerates/tables/a/?format=json"
  );
}, []);
console.log(currencies);

const CurrenciesStatus = () => {
  return (
    <div>
      <div className="container max-w-6xl px-5 mx-auto my-28">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">{"USD"}</div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">{2138}PLN</div>
              <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>1.8%</span>
              </span>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">USD</div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">4,31 PLN</div>
              <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-red-600 bg-red-100 rounded-full">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>2.5%</span>
              </span>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">GBP</div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">5,53PLN</div>
              <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>5.2%</span>
              </span>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">NIS</div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">1.32PLN</div>
              <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>2.2%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrenciesStatus;
