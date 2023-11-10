import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { BiSolidCameraMovie } from "react-icons/bi";

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");

  const logoHandler = () => {
    if (auth) {
      navigate("/movies");
    } else {
      navigate("/login");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const resp = show ? "sm:flex-col" : "sm:hidden";

  return (
    <div className="w-full bg-slate-100 fixed">
      <div className="w-11/12 mx-auto flex justify-between items-center p-1">
        <div
          className="  self-start flex items-center 
        gap-1 font-bold cursor-pointer"
          onClick={logoHandler}
        >
          <BiSolidCameraMovie /> Movie-App
        </div>
        <div className="w-2/3 flex">
          <div
            className={` flex msm:flex-row basis-full ${resp} justify-between items-center sm:mt-2`}
          >
            {auth && (
              <div className="flex-row flex items-center sm:flex-col  gap-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black px-2 py-1 text-white rounded"
                      : " text-black bg-transparent"
                  }
                  to="/movies"
                >
                  Movies List
                </NavLink>
                <NavLink
                  to="/company"
                  className={({ isActive }) =>
                    isActive ? "bg-black px-2 py-1 text-white rounded" : " "
                  }
                >
                  Company Info
                </NavLink>
              </div>
            )}

            {auth ? (
              <button
                className="bg-red-500 px-1 py-1 text-white rounded sm:mt-8 sm:mb-2  ms-auto sm:ms-0"
                onClick={logoutHandler}
              >
                Logout
              </button>
            ) : (
              <NavLink
                className="bg-blue-400 px-2 py-1 text-white rounded sm:mt-8  sm:mb-2 ms-auto sm:ms-0"
                to="/login"
              >
                Login
              </NavLink>
            )}
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
