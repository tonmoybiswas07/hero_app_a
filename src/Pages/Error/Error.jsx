import React from "react";
import ErrorImg from "../../assets/error-404.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center items-center my-16">
        <img src={ErrorImg} alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center">
          Oops, page not found!
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          The page you are looking for is not available.
        </p>
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white font-semibold rounded-md"
          >
            Go Back!
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
