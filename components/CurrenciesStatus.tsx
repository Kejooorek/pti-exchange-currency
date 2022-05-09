import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../pages/lib/fetcher";
import { CurrencyType } from "../types/currencyType";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
export type APIResponse = Array<{
  rates: Array<CurrencyType>;
}>;

const CurrenciesStatus = () => {
  const { data, error } = useSWR<APIResponse>(
    "https://api.nbp.pl/api/exchangerates/tables/a/last/2/?format=json",
    fetcher
  );
  // console.log(data[0].rates[1].code);
  // console.log(data[0].rates);

  const previousConvertedCurrencies = useMemo<{
    [key: string]: CurrencyType;
  } | null>(() => {
    if (!data || error) {
      return null;
    }
    return data[0].rates.reduce((o, d) => ({ ...o, [d.code]: d }), {});
  }, [data, error]);
  console.log(previousConvertedCurrencies);

  const convertedCurrencies = useMemo<{
    [key: string]: CurrencyType;
  } | null>(() => {
    if (!data || error) {
      return null;
    }
    return data[1].rates.reduce((o, d) => ({ ...o, [d.code]: d }), {});
  }, [data, error]);

  console.log(convertedCurrencies);

  if (!convertedCurrencies || !previousConvertedCurrencies) {
    return null;
  }
  return (
    <div>
      <div className="container max-w-6xl px-5 mx-auto my-28">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">
              {convertedCurrencies["USD"].code}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">
                {convertedCurrencies["USD"].mid.toFixed(2)}PLN
              </div>
              <span
                className={`flex items-center px-2 py-0.5 mx-2 text-sm  ${
                  convertedCurrencies["USD"].mid >
                  previousConvertedCurrencies["USD"].mid
                    ? "text-green-600 bg-green-100"
                    : "text-red-600 bg-red-100"
                }    rounded-full`}
              >
                {convertedCurrencies["USD"].mid >
                previousConvertedCurrencies["USD"].mid ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
                <span>
                  {(
                    ((convertedCurrencies["USD"].mid -
                      previousConvertedCurrencies["USD"].mid) /
                      previousConvertedCurrencies["USD"].mid) *
                    1000
                  ).toFixed(2)}
                  %
                </span>
              </span>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">
              {convertedCurrencies["EUR"].code}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">
                {convertedCurrencies["EUR"].mid.toFixed(2)} PLN
              </div>
              <span
                className={`flex items-center px-2 py-0.5 mx-2 text-sm  ${
                  convertedCurrencies["EUR"].mid >
                  previousConvertedCurrencies["EUR"].mid
                    ? "text-green-600 bg-green-100"
                    : "text-red-600 bg-red-100"
                }    rounded-full`}
              >
                {convertedCurrencies["EUR"].mid >
                previousConvertedCurrencies["EUR"].mid ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
                <span>
                  {(
                    ((convertedCurrencies["EUR"].mid -
                      previousConvertedCurrencies["EUR"].mid) /
                      previousConvertedCurrencies["EUR"].mid) *
                    1000
                  ).toFixed(2)}
                  %
                </span>
              </span>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">
              {convertedCurrencies["GBP"].code}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">
                {convertedCurrencies["GBP"].mid.toFixed(2)} PLN
              </div>
              <span
                className={`flex items-center px-2 py-0.5 mx-2 text-sm  ${
                  convertedCurrencies["GBP"].mid >
                  previousConvertedCurrencies["GBP"].mid
                    ? "text-green-600 bg-green-100"
                    : "text-red-600 bg-red-100"
                }    rounded-full`}
              >
                {convertedCurrencies["GBP"].mid >
                previousConvertedCurrencies["GBP"].mid ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
                <span>
                  {(
                    ((convertedCurrencies["GBP"].mid -
                      previousConvertedCurrencies["GBP"].mid) /
                      previousConvertedCurrencies["GBP"].mid) *
                    1000
                  ).toFixed(2)}
                  %
                </span>
              </span>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="text-base text-gray-400 ">
              {convertedCurrencies["CHF"].code}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-2xl font-bold text-gray-900 ">
                {convertedCurrencies["CHF"].mid.toFixed(2)} PLN
              </div>
              <span
                className={`flex items-center px-2 py-0.5 mx-2 text-sm  ${
                  convertedCurrencies["CHF"].mid >
                  previousConvertedCurrencies["CHF"].mid
                    ? "text-green-600 bg-green-100"
                    : "text-red-600 bg-red-100"
                }    rounded-full`}
              >
                {convertedCurrencies["CHF"].mid >
                previousConvertedCurrencies["CHF"].mid ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
                <span>
                  {(
                    ((convertedCurrencies["CHF"].mid -
                      previousConvertedCurrencies["CHF"].mid) /
                      previousConvertedCurrencies["CHF"].mid) *
                    1000
                  ).toFixed(2)}
                  %
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrenciesStatus;
