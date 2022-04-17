import React from "react";

const MainContainer = () => {
  return (
    <>
      <div className="flex w-full h-96 ">
        <div className="w-1/2 h-full bg-red-500">history</div>
        <div className="w-1/2 h-full bg-blue-500">chart</div>
      </div>
      <div className="bg-pink-500 w-full h-52">1</div>
    </>
  );
};

export default MainContainer;
