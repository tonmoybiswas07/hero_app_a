import React from "react";
import { useLoaderData, useParams } from "react-router";
import dImg from "../../assets/icon-downloads.png";
import rImg from "../../assets/icon-ratings.png";
import reImg from "../../assets/icon-review.png";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { addTOStoreDB, getStoredApp } from "../../Utility/storeDB";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const loadAppDetails = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);
  const singleApp = loadAppDetails.find((app) => app.id === appId);

  const {
    image,
    title,
    companyName,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
    description,
  } = singleApp;

  useEffect(() => {
    const storedApps = getStoredApp();
    const isAppInstalled = storedApps.includes(appId);
    setIsInstalled(isAppInstalled);
  }, [appId]);

  const handleInstall = (id) => {
    const success = addTOStoreDB(id);
    if (success) {
      toast.success("Apps Install Successfully");
      setIsInstalled(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-start items-center flex-col md:flex-row mt-10 gap-10">
        <div className="image ">
          <img
            className="w-52 h-52 md:w-96 md:h-[300px]"
            src={image}
            alt={title}
          />
        </div>
        <ToastContainer />
        {/* contain */}
        <div className="contain">
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="font-lg text-gray-600 my-2">
            Developed by
            <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <div className="divider"></div>
          <div className="card-container flex justify-around  md:justify-between items-center gap-10">
            {/* card 1 */}
            <div className="card">
              <div className="image">
                <img src={dImg} alt="" />
              </div>
              <p className="text-gray-600">Downloads</p>
              <h2 className=" text-2xl md:text-4xl font-bold">
                {downloads}
                <span>M</span>
              </h2>
            </div>
            {/* card 2 */}
            <div className="card">
              <div className="image">
                <img src={rImg} alt="" />
              </div>
              <p className="text-gray-600">Average Ratings</p>
              <h2 className="text-2xl md:text-4xl font-bold">{ratingAvg}</h2>
            </div>
            {/* card 3 */}
            <div className="card">
              <div className="image">
                <img src={reImg} alt="" />
              </div>
              <p className="text-gray-600">Total Reviews</p>
              <h2 className="text-2xl md:text-4xl font-bold">
                {reviews}
                <span>K</span>
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={() => handleInstall(appId)}
              disabled={isInstalled}
              className={`py-3 px-3 rounded-md border-2 font-semibold ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#00D390] text-white"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 divider"></div>
      <div className="flex justify-start items-start  flex-col">
        <div>
          <h2 className=" hidden md:flex text-2xl font-bold ml-5">Ratings</h2>
        </div>
        <div className="flex w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings} layout="vertical">
              <XAxis type="count" dataKey="count"></XAxis>
              <YAxis type="category" dataKey="name"></YAxis>
              <Bar dataKey="count" fill="#FF8811"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="description">
          <h2 className="font-bold text-lg">Description</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
