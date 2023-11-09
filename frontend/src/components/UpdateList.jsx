import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateList = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    const data = {
      task: task,
      description: description,
    };

    axios
      .put(`http://localhost:4000/lists/${id}`, data)
      .then(() => {
        console.log("updated");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        className="bg-blue-600 text-white h-10 w-32 rounded-2xl m-5 text-2xl relative left-0"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div className="flex items-center flex-col">
        <h1 className="text-5xl text-blue-500 ">Update List</h1>
        <form className="flex flex-col items-center">
          <input
            className="border border-blue-600 rounded px-5 py-2 m-3 focus:outline-none focus:ring focus:border-blue-600 w-11/12"
            type="text"
            value={task}
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            className="border border-blue-600 rounded px-5 py-2 m-3 focus:outline-none focus:ring focus:border-blue-600 w-11/12 "
            type="text"
            value={description}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="h-10 w-40 border rounded-2xl border-blue-600 hover:bg-blue-500 hover:text-white"
            onClick={update}
          >
            UPDATE
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateList;
