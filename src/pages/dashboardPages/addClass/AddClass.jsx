import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";

const AddClass = () => {
  const { student } = useAuth();

  //React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Setting default value on react hook form
  useEffect(() => {
    let defaultValues = {};
    defaultValues.instructorName = student?.displayName;
    defaultValues.instructorEmail = student?.email;
    reset({ ...defaultValues });
  }, []);
  const onSubmit = (data) => {
    console.log(data, "Data from add a class");
    const { className, imageURL, instructorEmail, instructorName, price, seats } = data;
  };
  return (
    <div>
      <h3 className="text-center uppercase text-3xl font-semibold my-10">Add a Class</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[1000px] mx-auto border border-[#1A58A3] p-10 space-y-8 "
      >
        {/* Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Block */}
          <div>
            <label htmlFor="">Class Name</label>
            <input
              type="text"
              placeholder="Class Name"
              className="px-4 py-3 bg-gray-100 w-full mt-2 outline-none"
              {...register("className")}
            />
          </div>
          {/* Block */}
          <div>
            <label htmlFor="">Class Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              className="px-4 py-3 bg-gray-100 w-full mt-2 outline-none"
              {...register("imageURL")}
            />
          </div>
        </div>
        {/* Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Block */}
          <div>
            <label htmlFor="">Instructor Name</label>
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 bg-gray-100 w-full mt-2 outline-none"
              {...register("instructorName")}
              readOnly
            />
          </div>
          {/* Block */}
          <div>
            <label htmlFor="">Instructor Email</label>
            <input
              type="text"
              placeholder="Email"
              className="px-4 py-3 bg-gray-100 w-full mt-2 outline-none"
              {...register("instructorEmail")}
              readOnly
            />
          </div>
        </div>
        {/* Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Block */}
          <div>
            <label htmlFor="">Available Seats</label>
            <input
              type="text"
              placeholder="Available Seats"
              className="px-4 py-3 bg-gray-100 w-full mt-2 outline-none"
              {...register("seats")}
              defaultValue={10}
            />
          </div>
          {/* Block */}
          <div>
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Price"
              className="px-4 py-3 bg-gray-100 w-full mt-2 outline-none"
              {...register("price")}
              defaultValue={100}
            />
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <input
            type="submit"
            value="Add A Class"
            className="bg-[#FCE07A] hover:bg-[#fcc708] w-full font-semibold py-3 mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
