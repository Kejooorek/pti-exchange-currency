import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import LoadingCircle from "../../components/LoadingCircle";
import LoginBoard from "../../components/LoginBoard";
import Navbar from "../../components/Navbar";

const Blik = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <LoadingCircle></LoadingCircle>;
  if (!session) return <LoginBoard></LoginBoard>;






  const [progress, setProgress] = useState(100);
  const [blikCode, setBlikCode] = useState<string>("Loading...");
  const [seconds, setSeconds] = useState(120);
  const [color, setColor] = useState('text-green-700');
  const refreshProgres = () => {
    setBlikCode(Math.random().toString().substr(2, 6));
    setProgress(100);
    setColor('text-green-700');
    setSeconds(120);
  };

  const progresMenagment = () => {
    if (progress < 0) {
      refreshProgres();
    }
    setProgress((progress) => progress - 0.83);
  };


  if (seconds <= 0) {
    refreshProgres();
  }


  const secondsMenagment = () => {
    setSeconds((seconds) => seconds - 1);

  }

  const copyBlikCode = () => {
    navigator.clipboard.writeText(blikCode)
  }

  useEffect(() => {
    setBlikCode(Math.random().toString().substr(2, 6));
    const progressInterval = setInterval(() => {
      secondsMenagment();
      progresMenagment();
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
            onClick={() => copyBlikCode()}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Skopiuj Kod
          </button>
        </div>
        <h5 className={`${seconds < 60 ? "text-red-700" : color} font-bold`}>{seconds}s</h5>
      </main>
    </>
  );
};

export default Blik;
