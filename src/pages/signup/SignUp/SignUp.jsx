import React, { useState } from "react";
import { FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const handleGoogleLogin = () => {
    console.log("Clicked");
  };
  return (
    <div className=" bg-[#BCEDED] py-20">
      <div className=" p-20 w-[600px] mx-auto border border-[#1A58A3]">
        <h2 className="text-5xl text-center font-semibold mb-10">Sign Up Here</h2>
        <form className="w-96 mx-auto text-lg">
          {/* input block */}
          <div>
            <label htmlFor="">Name</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="text"
              placeholder="Name"
            />
          </div>

          {/* input block */}
          <div className="mt-5">
            <label htmlFor="">Email</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
          {/* input block */}
          <div className="mt-5">
            <label htmlFor="">Password</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="text"
              placeholder="Password"
            />
          </div>
          {/* input block */}
          <div className="mt-5">
            <label htmlFor="">Confirm Password</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="text"
              placeholder="Password"
            />
          </div>
          {/* input block */}
          <div className="mt-5">
            <label htmlFor="">Photo URL</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="text"
              placeholder="Photo URL"
            />
          </div>
          {/* Submit */}
          <button className="bg-[#FCE07A] w-full py-3 mt-5">
            <input type="submit" value="Login" />
          </button>
          <p>
            <small>
              Not registered yet? Please{" "}
              <Link to="/login" className="text-[#1A58A3]">
                login
              </Link>
            </small>
          </p>
          <p className="text-red-500">
            <small>{error}</small>
          </p>
        </form>
        {/* Social Login */}
        <div className="w-96 mx-auto">
          <div className="divider w-full mt-10">Social Login</div>
          <div className="flex">
            <button onClick={handleGoogleLogin} className="w-1/4">
              <FaGoogle className="text-2xl bg-gray-500 hover:bg-[#4081EC] h-16 w-24 p-5 text-[#4081EC] hover:text-white  border-r-2 hover:border-0"></FaGoogle>
            </button>
            <button className="w-1/4">
              <FaPinterest className="text-2xl bg-gray-500 h-16 w-24 p-5 text-white border-r-2 "></FaPinterest>
            </button>
            <button className="w-1/4">
              <FaTwitter className="text-2xl bg-gray-500 h-16 w-24 p-5 text-white border-r-2"></FaTwitter>
            </button>
            <button className="w-1/4">
              <FaInstagram className="text-2xl bg-gray-500 h-16 w-24 p-5 text-white border-r-2"></FaInstagram>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
