import React from "react";
import { Link, useRouteError } from "react-router-dom";
import bg from "../../assets/bg404.jpg";

const Error404 = () => {
  const { error, status } = useRouteError();
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="flex items-center h-screen bg-cover p-16 bg-gray-100 text-gray-900"
    >
      <div className=" p-10 bg-yellow-300 w-[600px] mx-auto container flex flex-col items-center justify-center mt-96">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-7xl text-red-500 ">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl bg-yellow-300 p-3 font-semibold md:text-4xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 border-b-4 border-green-500 text-green-500 rounded w-full mt-4 text-lg tracking-wider"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
