import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../Utility/storeDB";
import dIcon from "../../assets/icon-downloads.png";
import rIcon from "../../assets/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";

const InstallPage = () => {
  const data = useLoaderData();
  const [installApp, setInstallApp] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedAppData = storedAppData.map((id) => parseInt(id));
    const installApp = data.filter((app) => convertedAppData.includes(app.id));
    setInstallApp(installApp);
  }, []);

  const sortItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installApp].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "size-desc") {
      return [...installApp].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installApp;
    }
  })();
  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installApp")) || [];
    const updatedList = existingList.filter((appId) => appId !== id);

    localStorage.setItem("installApp", JSON.stringify(updatedList));
    const newInstalledApps = installApp.filter((app) => app.id !== id);
    setInstallApp(newInstalledApps);
    toast.success("Apps Uninstall Successfully");
  };
  return (
    <div>
      <div className="title text-center mt-10 ">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <ToastContainer />
      {/* app and dropdown menu */}
      <div>
        <div className="flex justify-between items-center mt-14 max-w-6xl mx-auto">
          <h1 className="font-bold text-2xl">{sortItem.length} Apps Found</h1>

          <label className="form-control w-full max-w-40">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="size-asc">Low-&gt;High</option>
              <option value="size-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
      </div>
      {/* install card */}
      {sortItem.map((app) => (
        <div className="flex justify-between items-center max-w-6xl mx-auto p-6 border-1 border-gray-200 rounded bg-gray-200 my-10">
          <div className="left flex justify-center items-center gap-5">
            <div className="image">
              <img className="h-20 w-20" src={app.image} alt="" />
            </div>
            <div className="content">
              <h3 className="text-2xl text-left font-bold">{app.title}</h3>
              <div className="flex justify-start mt-2 items-start gap-10">
                <div className="flex justify-center items-center text-lg">
                  <img className="h-6 mr-1" src={dIcon} alt="" />
                  <p>{app.downloads}M</p>
                </div>
                <div className="flex justify-center items-center">
                  <img className="h-6" src={rIcon} alt="" />
                  <p>{app.reviews}</p>
                </div>
                <div className="text-center">
                  <p>{app.size} MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <button
              onClick={() => handleRemove(app.id)}
              className="bg-[#00D390] px-4 py-2 font-semibold text-white rounded cursor-pointer"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstallPage;
