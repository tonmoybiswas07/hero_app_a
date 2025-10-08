import React from "react";
import appleImg from "../../assets/fi_5977575.png";
import playImg from "../../assets/fi_16076057.png";
import banner from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="mt-10 mx-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          We Build <br />
          <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className=" text-justify md:text-center mt-4 text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-7 mt-7">
          <button className="flex justify-center items-center btn py-6 font-semibold text-[16px] hover:shadow-md hover:bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] hover:text-white">
            <img src={playImg} alt="" />
            Google Play
          </button>
          <button className="flex justify-center items-center btn py-6 font-semibold text-[16px] hover:shadow-md hover:bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] hover:text-white">
            <img src={appleImg} alt="" />
            App Store
          </button>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <img src={banner} alt="" />
        </div>
      </div>
      {/* stage section */}
      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white">
        <h2 className="text-center text-3xl py-10 ">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-center md:gap-20 pb-10 ">
          <div className="card">
            <p>Total Downloads</p>
            <h1 className="text-5xl font-bold my-3">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="card">
            <p> Total Reviews</p>
            <h1 className="text-5xl font-bold my-3">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="card">
            <p>Active Apps</p>
            <h1 className="text-5xl font-bold my-3">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
