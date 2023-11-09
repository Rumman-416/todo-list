import React from "react";
import MainBody from "./components/MainBody";
import { Route, Routes } from "react-router-dom";
import UpdateList from "./components/UpdateList";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="update/:id" element={<UpdateList />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
