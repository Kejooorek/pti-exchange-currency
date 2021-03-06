import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import LoginBoard from "../../components/LoginBoard";
import Navbar from "../../components/Navbar";
const MakeTransaction = () => {
  // const { data: session, status } = useSession();

  // if (status === "loading") return <LoadingCircle></LoadingCircle>;
  // if (!session) return <LoginBoard></LoginBoard>;

  return (
    <>
      <Navbar></Navbar>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              PTI EXCHANGE CURRENCY
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Menager Transakcji
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Stworzony z mysla o twoich potrzebach, dzieki czemu twoj komfort
              korzystania z naszych uslug niezmiennie pozostaje na najwyzszym
              poziomie
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Przelew Zwykły
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <Link href="/make_transaction/ordinary_transfer">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Wykonaj
                </button>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Przelew Międzynarodowy
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <Link href="/make_transaction/international_transfer">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Wykonaj
                </button>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-grsay-900 font-medium title-font mb-2">
                Przelew blik
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <Link href="/make_transaction/blik_transfer">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Wykonaj
                </button>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Wypłata gotówki
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <Link href="/make_transaction/cash_withdrawal">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Wykonaj
                </button>
              </Link>
            </div>
          </div>
          <Link href="/">
            <button className="flex mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-16 text-white  border-0 py-4 px-8 focus:outline-none hover:bg-blue-600 rounded-2xl ">
              Powrót
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MakeTransaction;
