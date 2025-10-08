import React from "react";
import logoI from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col border-t-2 border-gray-400 mt-10 md:flex-row justify-center md:justify-around items-center pt-6  md:p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="text-center border-base-300 border-t px-10">
        <div className="flex justify-center items-center gap-5 pt-2 flex-col">
          <div>
            <img className="h-20 w-20" src={logoI} alt="" />
          </div>
          <div>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
