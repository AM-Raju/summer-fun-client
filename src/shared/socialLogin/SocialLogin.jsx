import React, { useState } from "react";
import { FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;

        const savedUser = { name: loggedUser.displayName, email: loggedUser.email };

        fetch("http://localhost:5000/students", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("User updated successfully");
            } else {
              console.log(data);
            }
          });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up with Google Done!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
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
      <p>
        <small className="text-red-500">{error}</small>
      </p>
    </div>
  );
};

export default SocialLogin;
