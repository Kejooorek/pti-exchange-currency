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
  const { data, error } = useSWR<APIResponse>("/api/get_codes", fetcher);
  const [fromCurrencyCode, setFromCurrencyCode] = useState("");
  const [toCurrencyCode, setToCurrencyCode] = useState("");
  async function getCurrencyExchange() {
    await axios.post(`/api/exchange/${fromCurrencyCode}/${toCurrencyCode}`);
  }

  return (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default Curriencies;
