import React from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router";
import AllApp from "../AllApp/AllApp";
import TrendingApp from "../TrendingApp/TrendingApp";

const AllApps = () => {
  const loadApp = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto ">
      <div>
        <h1 className="font-bold text-4xl text-center mt-20">
          Our All Applications
        </h1>
        <p className="text-lg text-gray-500 text-center my-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-2xl">({loadApp.length}) Apps Found</h2>
        </div>
        <div className="flex justify-center items-center relative">
          <CiSearch className="absolute left-2" />
          <input className="border-1 rounded" type="search" name="" id="" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-white">
        {loadApp.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
