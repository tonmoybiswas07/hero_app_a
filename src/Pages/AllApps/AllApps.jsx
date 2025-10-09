import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router";
import AllApp from "../AllApp/AllApp";
import TrendingApp from "../TrendingApp/TrendingApp";
import { DNA } from "react-loader-spinner";
import Error from "../Error/Error";
import AppsError from "../AppsError/AppsError";

const AllApps = () => {
  const loadApp = useLoaderData();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchApp, setSearchApp] = useState(loadApp);

  useEffect(() => {
    const term = search.trim().toLocaleLowerCase();
    setLoading(true);
    const timer = setTimeout(() => {
      const searchedApps = term
        ? loadApp.filter((app) => app.title.toLocaleLowerCase().includes(term))
        : loadApp;
      setSearchApp(searchedApps);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, loadApp]);
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
          <h2 className="font-bold text-2xl">
            ({searchApp.length}) Apps Found
          </h2>
        </div>
        <div className="flex justify-center items-center relative">
          <CiSearch className="absolute left-2" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-1 rounded"
            type="search"
            name=""
            id=""
          />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-56">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : searchApp.length === 0 ? (
        <AppsError></AppsError>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-white">
          {searchApp.map((app) => (
            <TrendingApp key={app.id} app={app}></TrendingApp>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
