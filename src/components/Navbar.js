import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBar = () => {
    setMenuBar(!menuBar);
  };

  const activeLink = "text-night-blue";
  const mobileActiveLink = "text-sand-tan";

  return (
    <nav className="bg-sand-tan absolute top-0 w-full">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 py-5 xl:mx-auto flex justify-between">
        <h1 className="text-3xl font-bold tracking-wider w-3/12">Suganya</h1>

        <ul className="hidden sm:flex font-medium text-lg w-9/12 justify-end">
          <li className="mr-10">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : " ")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-10">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : " ")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="mr-10">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : " ")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="mr-10">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : " ")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          onClick={handleMenuBar}
          className="px-4 py-2 mx-3 sm:hidden bg-night-blue rounded-md text-white font-semibold"
        >
          <TiThMenu />
        </button>
      </div>

      {menuBar && (
        <div className="absolute top-0 left-0 pb-2 w-[320px] shadow-lg bg-night-blue z-10 transition ease-in-out">
          <div className=" p-5 ">
            <div className="flex justify-between">
              <div className="text-2xl font-bold tracking-wider ">Suganya</div>
              <button onClick={handleMenuBar} className=" text-xl font-bold">
                <FaWindowClose />
              </button>
            </div>
            <ul className="mt-5 font-medium text-lg">
              <li className="mr-10 mt-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? mobileActiveLink : " "
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="mr-10 mt-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? mobileActiveLink : " "
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="mr-10 mt-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? mobileActiveLink : " "
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="mr-10 mt-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? mobileActiveLink : " "
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
