import React, { useEffect, useState } from "react";
import CreditCard from "../../components/CreditCard";
import EuropaMap from "../../components/EuropaMap";
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/react";
import axios from "axios";
import { fetcher } from "../lib/fetcher";
import { APIResponse } from "../../components/CurrenciesStatus";
import useSWR from "swr";
const Curriencies = () => {
  const { data: session, status } = useSession();
  const [wallet, setWallet] = useState([]);
  const [amount, setAmount] = useState(0);
  const [currencyCodes, setCurrencyCodes] = useState([])
  const { data, error } = useSWR<APIResponse>("/api/get_codes", fetcher);
  const [fromCurrencyCode, setFromCurrencyCode] = useState("");
  const [toCurrencyCode, setToCurrencyCode] = useState("");
  async function getCurrencyExchange() {
    await axios.post(`/api/exchange/${fromCurrencyCode}/${toCurrencyCode}`).then(res => {
      console.log(res.data.value * amount)
    })
    console.log(fromCurrencyCode, toCurrencyCode, amount)
  }

  useEffect(() => {
    fetcher('api/get_codes').then(response => {
      setCurrencyCodes(response.res)
    })
    fetcher('/api/wallet').then(response => {
      setWallet(response.wallet)
    })
  }, [])

  // console.log(currencyCodes)/
  // console.table(wallet)

  return (
    <>
      <Navbar></Navbar>
      <div style={{ height: "100vh" }} className="flex w-full justify-center items-center flex-col">

        <div className="flex-row">
          <select className="m-4" name="" id="" onChange={(e) => setFromCurrencyCode(e.target.value)}>
            {wallet.map(w => {
              return <option value={w.id}>{w.id}</option>
            })}
          </select>
          <input value={amount} type="number" onChange={(e) => setAmount(parseInt(e.target.value))} />

        </div>
        <select className="m-4" name="" id="" onChange={(e) => setToCurrencyCode(e.target.value)}>
          {currencyCodes.map(currencyCode => {
            return <option value={currencyCode[0]}>{currencyCode[0]}</option>
          })}
        </select>
        <button onClick={() => getCurrencyExchange()}>make req!</button>
      </div>

    </>
  );
};

export default Curriencies;
