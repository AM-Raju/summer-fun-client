import React from "react";

import logo from "../../assets/Logo.png";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <footer className=" p-10 bg-[#1A58A3] text-white mt-10">
        <div className="flex justify-between items-center">
          {/* Email */}
          <div>
            <p className="text-xl">Send Email</p>
            <p className="text-2xl font-semibold">info@phero.com</p>
          </div>
          {/* Logo */}
          <img className="w-36" src={logo} alt="" />
          {/* Contact number */}
          <div>
            <p className="text-xl">Call Us</p>
            <p className="text-2xl font-semibold">01720 00 01 02</p>
          </div>
        </div>
        {/* divider */}
        <div className="h-[1px] bg-white mt-5 mb-8"></div>
        {/* Lower footer part*/}
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <h3 className="footer-title">About Us</h3>
            <p>
              Have you road-tripped to all 50 states including Hawaii? Is your boat named after an
              inside joke that only you understand? If this sounds like you.
            </p>
            {/* Social Icon */}
            <div className="flex gap-5 text-xl mt-5">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaPinterest></FaPinterest>
            </div>
          </div>
          <div className="flex justify-around col-span-4">
            <div className="flex flex-col">
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div className="flex flex-col">
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div className="flex flex-col">
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
            <div className="flex flex-col">
              <span className="footer-title">Subscribe</span>
              <input className="px-5 py-3" type="text" name="" id="" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
