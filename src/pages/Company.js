import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";

function Company() {
  return (
    <div className=" w-11/12 flex  flex-col gap-10 justify-center items-center pt-16 pb-10">
      <h1 className=" text-6xl sm:text-4xl flex justify-center gap-1 text-gray-500 font-bold">
        <BiSolidCameraMovie /> Movie App
      </h1>
      <div
        className="w-4/5 mx-auto bg-slate-100 py-6 rounded flex flex-col gap-2 items-center 
      text-2xl sm:text-sm sm:w-11/12 mb-10"
      >
        <p>
          <span className="font-bold ">Company:</span> Geeksynergy Technologies
          Pvt Ltd
        </p>
        <p>
          <span className="font-bold ">Address:</span> Sanjayanagar,
          Bengaluru-56
        </p>
        <p>
          <sapn className="font-bold ">Phone:</sapn> 1234567809
        </p>
        <p>
          <sapn className="font-bold ">Email:</sapn> Geeksynergy@email.com
        </p>
      </div>
    </div>
  );
}

export default Company;
