import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const Blik = () => {
  const [progress, setProgress] = useState(100);
  const [blikCode, setBlikCode] = useState<string | number>("Loading...");

  const refreshProgres = () => {
    setBlikCode(parseInt(Math.random().toString().substr(2, 6)));
    setProgress(100);
  };

  const progresMenagment = () => {
    if (progress < 0) {
      refreshProgres();
    }
    setProgress((progress) => progress - 0.83);
  };

  useEffect(() => {
    setBlikCode(parseInt(Math.random().toString().substr(2, 6)));
    const progressInterval = setInterval(() => {
      progresMenagment();
      // console.log('leszek')
    }, 1000);
    return () => clearInterval(progressInterval);
  }, []);

  console.log(progress);
  return (
    <>
      <Navbar></Navbar>
      <main className="flex w-full h-screen  justify-center items-center flex-col">
        <section className="mb-12">
          <h5 className="text-8xl font-bold text-blue-800">{blikCode}</h5>
        </section>
        <section className="w-1/2 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </section>
        <div className="flex m-12 ">
          <button
            onClick={() => refreshProgres()}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Odswiez Kod
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Skopiuj Kod
          </button>
        </div>
      </main>
    </>
  );
};

export default Blik;
