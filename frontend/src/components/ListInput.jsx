import axios from "axios";
import React, { useState } from "react";

const ListInput = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  function add(e) {
    e.preventDefault();
    const data = {
      task: task,
      description: description,
    };

    axios.post("http://localhost:4000/lists", data).then((res) => {
      location.reload();
    });
  }
  return (
    <div>
      <form className="flex flex-col items-center">
        <input
          className="border border-blue-600 rounded px-5 py-2 m-3 focus:outline-none focus:ring focus:border-blue-600 w-10/12"
          type="text"
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="border border-blue-600 rounded px-5 py-2 m-3 focus:outline-none focus:ring focus:border-blue-600 w-10/12 "
          type="text"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="h-10 w-40 border rounded-2xl border-blue-600 hover:bg-blue-500 hover:text-white"
          onClick={add}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default ListInput;
