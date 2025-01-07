import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBar = () => {
    setMenuBar(!menuBar);
  };

  const activeLink = "text-white transition ease-in-out duration-700";

  return (
    <nav className="absolute top-0 w-full bg-red">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 py-5 xl:mx-auto flex justify-between items-center text-gray-300">
        <a
          href="/"
          className="text-4xl font-bold tracking-wider w-3/12 font-mono"
        >
          Suganya
        </a>

        <ul className="hidden sm:flex font-medium text-lg w-9/12 justify-end">
          <li className="mr-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? activeLink
                  : "hover:text-white transition-all ease-in-out"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? activeLink
                  : "hover:text-white transition-all ease-in-out "
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="mr-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? activeLink
                  : "hover:text-white transition-all ease-in-out "
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="mr-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? activeLink
                  : "hover:text-white transition-all ease-in-out "
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          onClick={handleMenuBar}
          className="px-4 py-2 mx-3 sm:hidden bg-gray-300  text-red rounded-md  font-semibold"
        >
          <TiThMenu />
        </button>
      </div>

      {menuBar && (
        <div className="absolute top-0 left-0 pb-2 w-[320px] shadow-lg bg-red z-10 transition ease-in-out">
          <div className=" p-5 ">
            <div className="flex justify-between text-gray-300">
              <a href="/" className="text-2xl font-bold tracking-wider ">
                Suganya
              </a>
              <button onClick={handleMenuBar} className=" text-xl font-bold">
                <FaWindowClose />
              </button>
            </div>
            <ul className="mt-5 font-medium text-lg text-gray-300">
              <li className="mr-10 mt-3">
                <a
                  className={({ isActive }) =>
                    isActive
                      ? activeLink
                      : " hover:text-white transition-all ease-in-out"
                  }
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="mr-10 mt-3">
                <a
                  className={({ isActive }) =>
                    isActive
                      ? activeLink
                      : "hover:text-white transition-all ease-in-out"
                  }
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="mr-10 mt-3">
                <a
                  className={({ isActive }) =>
                    isActive
                      ? activeLink
                      : "hover:text-white transition-all ease-in-out"
                  }
                  href="/projects"
                >
                  Projects
                </a>
              </li>
              <li className="mr-10 mt-3">
                <a
                  className={({ isActive }) =>
                    isActive
                      ? activeLink
                      : "hover:text-white transition-all ease-in-out"
                  }
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
