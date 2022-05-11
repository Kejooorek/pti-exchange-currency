import React, { Fragment, useEffect, useMemo, useState } from "react";
import CreditCard from "../../components/CreditCard";
import EuropaMap from "../../components/EuropaMap";
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/react";
import axios from "axios";
import { fetcher } from "../lib/fetcher";
import { APIResponse } from "../../components/CurrenciesStatus";
import useSWR from "swr";
import LoadingCircle from "../../components/LoadingCircle";
import LoginBoard from "../../components/LoginBoard";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
const Curriencies = () => {
  const { data: session, status } = useSession();
  const [wallet, setWallet] = useState([]);
  const [amount, setAmount] = useState(0);
  const [updatedValue, setUpdatedValue] = useState(0);
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const [fromCurrencyCode, setFromCurrencyCode] = useState("");
  const [toCurrencyCode, setToCurrencyCode] = useState("");
  async function getCurrencyExchange() {
    await axios
      .post(`/api/exchange/${fromCurrencyCode}/${toCurrencyCode}`)
      .then((res) => {

        if (amount <= 0 || fromCurrencyCode === toCurrencyCode) {
          alert('Nie mozna wykonac transakcji')
        } else {
          setUpdatedValue(res.data.value * amount);

        }

        // console.log(res.data.value);

      });
    setAmount(0);

    console.log(fromCurrencyCode, toCurrencyCode, amount);
  }

  useMemo(() => {
    fetcher("api/get_codes").then((response) => {
      setCurrencyCodes(response.res);
    });
    fetcher("/api/wallet").then((response) => {
      setWallet(response.wallet);
    });
  }, []);

  // console.log(currencyCodes)/
  // console.table(wallet)

  // if (status === "loading") return <LoadingCircle></LoadingCircle>;
  // if (!session) return <LoginBoard></LoginBoard>;
  return (

    <>
      <Navbar></Navbar>
      <div
        style={{ height: "100vh" }}
        className="flex w-full justify-center items-center flex-col"
      >
        <div className="flex-row">
          <select
            className="m-4"
            name=""
            id=""
            onChange={(e) => setFromCurrencyCode(e.target.value)}
          >
            {wallet.map((w) => {
              return <option value={w.id}>{w.id}</option>;
            })}
          </select>
          <input
            value={amount}
            type="number"
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        <select
          className="m-4 "
          name=""
          id=""
          onChange={(e) => setToCurrencyCode(e.target.value)}
        >
          {currencyCodes.map((currencyCode) => {
            return <option value={currencyCode[0]}>{currencyCode[0]}</option>;
          })}
        </select>
        <button
          onClick={() => {
            setAmount(0)
            setUpdatedValue(0)
          }}
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  mt-4  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Zresetuj wartosci

        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

          onClick={() => getCurrencyExchange()}>Dokonaj przewalutowania!</button>
        <h1 className="text-xl font-medium  mb-4 text-gray-900">
          Przewalutowana wartosc: <span className="text-green-600">
            {updatedValue.toFixed(2)} {toCurrencyCode}

          </span>
        </h1>
      </div>
    </>
  );
};

export default Curriencies;
