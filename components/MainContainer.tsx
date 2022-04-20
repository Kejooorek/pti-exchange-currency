import React from "react";
import { User } from "../types/userType";

const MainContainer = ({ name }: User) => {
  return (
    <>
      <main className="flex w-full h-96">
        <section className="flex w-1/2  justify-center items-center pt-4">
          <div className="w-96 h-56 m-5 bg-red-100 rounded-xl relative text-white shadow-2xl bg-gradient-to-tr from-blue-400 to-blue-600 transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-full px-8 absolute top-8 ">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name</p>

                  <p className="font-medium tracking-widest">{name}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5rem"
                  viewBox="0 0 150 100"
                >
                  <rect
                    x="60.4117"
                    y="25.6968"
                    width="30"
                    height="55"
                    style={{ fill: "#f75b00" }}
                  />
                  <path
                    d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z"
                    transform="translate(-319.79649 -252)"
                    style={{ fill: "#e9172f" }}
                  />
                  <path
                    d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z"
                    transform="translate(-319.79649 -252)"
                    style={{ fill: "#fa9c10" }}
                  />
                  <path
                    d="M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z"
                    transform="translate(-319.79649 -252)"
                    style={{ fill: "#f79e1b" }}
                  />
                </svg>
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">
                  5555&nbsp;&nbsp;&nbsp;5948&nbsp;&nbsp;&nbsp;1234&nbsp;&nbsp;&nbsp;5678
                </p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light text-xs">Valid</p>
                    <p className="font-medium tracking-wider text-sm">11/15</p>
                  </div>
                  <div className="">
                    <p className="font-light text-xs text-xs">Expiry</p>

                    <p className="font-medium tracking-wider text-sm">03/25</p>
                  </div>

                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex  h-96 w-1/2"></div>
      </main>
    </>
  );
};

export default MainContainer;
