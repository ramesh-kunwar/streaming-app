"use client";
import MainBoard from "@/components/molecules/MainBoard";
import { Navbar } from "@/components/molecules/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="text-white">
      <Navbar />
      <MainBoard />
    </div>
  );
};

export default Home;
