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
  const { data, error } = useSWR<APIResponse>("/api/get_codes", fetcher);
  const [fromCurrencyCode, setFromCurrencyCode] = useState("");
  const [toCurrencyCode, setToCurrencyCode] = useState("");
  const getCurrencyExchange = async () => {
    await axios.post(`/api/exchange/${fromCurrencyCode}/${toCurrencyCode}`);
  };

  return (
    <>
      <Navbar></Navbar>value
      <input type="text" />
      {/* <CreditCard name={session!.user!.name}></CreditCard> */}
      <h1>From</h1>
      <select
        name=""
        id=""
        onChange={(e) => setFromCurrencyCode(e.target.value)}
      >
        {data?.res.map((d) => {
          return (
            <option value={d[0]}>
              {d[0]} - {d[1]}
            </option>
          );
        })}
      </select>
      <h1>To</h1>
      <select name="" id="" onChange={(e) => setToCurrencyCode(e.target.value)}>
        {data?.res.map((d) => {
          return (
            <option value={d[0]}>
              {d[0]} - {d[1]}
            </option>
          );
        })}
      </select>
      <button onClick={() => getCurrencyExchange()}>SIU</button>
    </>
  );
};

export default Curriencies;
