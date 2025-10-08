import React from "react";
import Banner from "../../Components/Banner/Banner";
import TrendingApps from "../TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <TrendingApps loadData={loadData}></TrendingApps>
    </div>
  );
};

export default Home;
