import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import RegisterList from "../components/RegisterList";
import SuccessList from "../components/SuccessList";
import FormDetail from "./FormDetail";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <div className="flex h-full">
        <div className="w-1/6">
          <SideBar />
        </div>
        <div className="flex flex-col items-center w-5/6 overflow-scroll">
          <Routes>
            <Route path="/*" element={<Landing />}></Route>
            <Route path="/register-list" element={<RegisterList />}></Route>
            <Route path="/success-form" element={<SuccessList />}></Route>
            <Route path="/form-detail/:id" element={<FormDetail />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;