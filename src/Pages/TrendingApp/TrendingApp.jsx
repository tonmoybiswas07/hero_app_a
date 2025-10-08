import React from "react";
import dIcon from "../../assets/icon-downloads.png";
import rIcon from "../../assets/icon-ratings.png";

const TrendingApp = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;
  return (
    <div>
      <div className="card bg-base-100 hover:scale-105 hover:shadow-xl  shadow-sm p-5 m-2 md:m-0">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={title}
          />
        </figure>
        <div className="font-bold my-2 text-[20px]">
          <h2>{title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="flex justify-center items-center gap-2 text-lg py-1 px-1 rounded-md bg-gray-200 text-green-700 font-semibold">
            <img className="w-5 h-5" src={dIcon} alt="" />
            {downloads}M
          </h3>
          <h3 className="flex justify-center items-center gap-2 text-lg bg-gray-200 py-1 px-1 rounded-md text-[#FF8811] font-semibold">
            <img className="h-5 w-5" src={rIcon} alt="" />
            {ratingAvg}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TrendingApp;
