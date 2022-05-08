import React from "react";
import useSWR from "swr";
import EuropaMap from "../../components/EuropaMap";
import Navbar from "../../components/Navbar";
import { fetcher } from "../lib/fetcher";

const Curriencies = () => {
  const { data, error } = useSWR(
    "https://api.nbp.pl/api/exchangerates/tables/a/?format=json",
    fetcher
  );
  console.log(data);
  return (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default Curriencies;
