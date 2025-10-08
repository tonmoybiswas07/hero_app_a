import React from "react";
import TrendingApp from "../TrendingApp/TrendingApp";
import { Link } from "react-router";

const TrendingApps = ({ loadData }) => {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {loadData.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 ">
        <Link to="/AllApps">
          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white font-semibold rounded-md">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
