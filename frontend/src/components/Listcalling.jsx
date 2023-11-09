import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import UpdateList from "./UpdateList";

const Listcalling = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/lists")
      .then((res) => {
        setLists(res.data.todo);
      })
      .catch((err) => {
        console.log(err);
        window.alert("Error: " + err);
      });
  }, []);

  const deleteList = (itemId) => {
    axios
      .delete(`http://localhost:4000/lists/${itemId}`)
      .then(() => {
        const updatedList = lists.filter((list) => list._id !== itemId);
        setLists(updatedList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul>
        {lists.map((list, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
          >
            <li className="text-black border my-5 mx-5 w-10/12 max-w-10/12 shadow-lg drop-shadow-xl break-all p-2">
              {list.task}
              <br />
              {list.description}
            </li>

            <Link to={`update/${list._id}`}>
              <BsPencilFill className="text-yellow-300 text-2xl my-2 cursor-pointer m-2" />
            </Link>
            <BsFillTrash3Fill
              className="text-red-700 text-2xl my-2 cursor-pointer m-2"
              onClick={() => deleteList(list._id)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Listcalling;
