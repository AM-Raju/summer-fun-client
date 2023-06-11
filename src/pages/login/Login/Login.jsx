import React, { useState } from "react";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import SocialLogin from "../../../shared/socialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  //state
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  // State for show and hide password
  const [show, setShow] = useState(false);
  //React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then(() => {
        reset();
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className=" bg-[#BCEDED] py-20">
      <div className=" p-20 w-[600px] mx-auto border border-[#1A58A3]">
        <h2 className="text-5xl text-center font-semibold mb-10">Login Here</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 mx-auto text-lg">
          {/* input block */}
          <div>
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
          {/* Submit */}
          <button className="bg-[#FCE07A] w-full py-3 mt-5">
            <input type="submit" value="Login" />
          </button>
          <p>
            <small>
              Not registered yet? Please{" "}
              <Link to="/signup" className="text-[#1A58A3]">
                register
              </Link>
            </small>
          </p>
          <p className="text-red-500">
            <small>{error}</small>
          </p>
        </form>
        {/* Social Login */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
