import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { BiSolidCameraMovie } from "react-icons/bi";

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const resp = show ? "sm:flex-col" : "sm:hidden";

  return (
    <div className="w-full bg-slate-100 fixed">
      <div className="w-11/12 mx-auto outline-blue-500 outline outline-2 flex justify-between items-center p-1">
        <div
          className=" outline-red-500 outline outline-2 self-start flex items-center 
        gap-1 font-bold"
        >
          <BiSolidCameraMovie /> Movie-App
        </div>
        <div className="w-2/3 flex">
          <div
            className={`outline-green-500 outline outline-2 flex msm:flex-row basis-full ${resp} justify-between items-center`}
          >
            <div className="flex-row flex items-center sm:flex-col  gap-3">
              <NavLink>Movies List</NavLink>
              <NavLink>Company Info</NavLink>
            </div>

            <NavLink
              className="bg-blue-400 px-2 py-1 text-white rounded sm:mt-8"
              to="/login"
            >
              Login
            </NavLink>
          </div>
          {show ? (
            <RxCross1
              className="m-1 ms-auto hidden sm:flex cursor-pointer"
              onClick={() => {
                setShow((prev) => !prev);
              }}
            />
          ) : (
            <FaBars
              className="m-1 ms-auto hidden sm:flex cursor-pointer"
              onClick={() => {
                setShow((prev) => !prev);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
