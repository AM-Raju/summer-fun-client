import React, { useState } from "react";
import {
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaRegEye,
  FaRegEyeSlash,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../../shared/socialLogin/SocialLogin";

// TO DO : Disable sign up button until the password match
// TO DO : Password validation

const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const navigate = useNavigate();
  // State for firebase error and success
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State for show and hide password
  const [show, setShow] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  //React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, "Form data of sign up field");
    const { name, email, password, confirmPassword, photoURL } = data;
    setSuccess("");
    setError("");
    createUser(email, password)
      .then((result) => {
        const signedUpUser = result.user;
        updateUserProfile(name, photoURL)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Sign Up and Profile Update Done!",
              timer: 1500,
            });
          })
          .catch((error) => console.log(error.message));
        // Logout after sign up
        logOut()
          .then(() => {
            navigate("/login");
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className=" bg-[#BCEDED] py-20">
      <div className=" p-20 w-[600px] mx-auto border border-[#1A58A3]">
        <h2 className="text-5xl text-center font-semibold mb-10">Sign Up Here</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 mx-auto text-lg">
          {/* input block */}
          <div>
            <label htmlFor="">Name</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
          </div>

          {/* input block */}
          <div className="mt-5">
            <label htmlFor="">Email</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          {/* input block */}
          <div className="mt-5 relative">
            <label htmlFor="">Password</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type={show ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            {/* eye icon condition */}
            <div className="absolute right-5 top-14">
              {show ? (
                <p>
                  <FaRegEyeSlash
                    onClick={() => {
                      setShow(!show);
                    }}
                  ></FaRegEyeSlash>
                </p>
              ) : (
                <p>
                  <FaRegEye
                    onClick={() => {
                      setShow(!show);
                    }}
                  ></FaRegEye>
                </p>
              )}
            </div>
          </div>
          {/* input block */}
          <div className="mt-5 relative">
            <label htmlFor="">Confirm Password</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type={showConfirmPass ? "text" : "password"}
              placeholder="Password"
              {...register("confirmPassword")}
            />
            {/* eye icon condition */}
            <div className="absolute right-5 top-14">
              {showConfirmPass ? (
                <p>
                  <FaRegEyeSlash
                    onClick={() => {
                      setShowConfirmPass(!showConfirmPass);
                    }}
                  ></FaRegEyeSlash>
                </p>
              ) : (
                <p>
                  <FaRegEye
                    onClick={() => {
                      setShowConfirmPass(!showConfirmPass);
                    }}
                  ></FaRegEye>
                </p>
              )}
            </div>
          </div>
          {/* input block */}
          <div className="mt-5">
            <label htmlFor="">Photo URL</label>
            <input
              className="bg-gray-100 w-full px-3 py-3 mt-2 outline-none"
              type="text"
              placeholder="Photo URL"
              {...register("photoURL")}
            />
          </div>
          {/* Submit */}
          <input
            className="bg-[#FCE07A] hover:bg-[#fcc708]  w-full py-3 mt-5"
            type="submit"
            value="Sign Up"
          />

          <p>
            <small>
              Not registered yet? Please{" "}
              <Link to="/login" className="text-[#1A58A3]">
                login
              </Link>
            </small>
          </p>
          <p className="text-blue-500">
            <small>{success}</small>
          </p>
          <p className="text-red-500">
            <small>{error}</small>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
