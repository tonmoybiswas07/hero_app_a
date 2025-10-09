import React from "react";
import appErrorImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppsError = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center my-16">
        <img src={appErrorImg} alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center">OPPS!! APP NOT FOUND</h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          The App you are requesting is not found on our system. please try
          another apps
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
    </div>
  );
};

export default AppsError;
