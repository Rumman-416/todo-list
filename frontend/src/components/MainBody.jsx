import React from "react";
import Listcalling from "./Listcalling";
import ListInput from "./ListInput";

const MainBody = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-blue-700 text-6xl ">To Do List</h1>
      </div>
      <ListInput />
      <Listcalling />
    </>
  );
};

export default MainBody;
