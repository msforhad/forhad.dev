import  { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { AppContext } from '../../context/AppContext.jsx';
import { IoMenu } from "react-icons/io5";





const Navbar = () => {
  let [menuBtn,setMenuBtn]=useState(false)
  const {mode,setMode} =useContext(AppContext)
  return (
    <>
      <header className="py-5 sticky top-0 bg-secondary z-10">
        <div className="mx-2 md:mx-30 2xl:mx-40 flex justify-between items-center">
          {/* navbar logo */}
          <div>
            <NavLink to="/" className="stencil text-4xl color-primary">
              FORHAD<span className="text-orange-500">.</span>
            </NavLink>
          </div>

          {/* navbar link */}
          <div className="hidden md:flex">
            <ul className="flex gap-8">
              {["home", "about", "skills", "portfolio", "contact"].map(
                (nav, index) => (
                  <li
                    className="poppins uppercase font-bold  color-primary"
                    key={index}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : ""}`
                      }
                      to={nav === "home" ? "/" : `/${nav}`}
                    >
                      {nav}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* language, mode,menu */}
          <div className="flex gap-4 justify-end items-center">

            {/* mode button */}
            <button className="bg-primary rounded-full flex justify-center items-center gap-3 px-1 py-1 relative ">
              <span
                className={`${
                  mode === "dark" ? "left-10" : "left-1"
                } transition-all duration-700 ease-in-out  absolute rounded-full h-6 w-6 z-10 bg-secondary`}
              ></span>
              <CiLight
                onClick={() => setMode("light")}
                className="z-20 cursor-pointer text-2xl p-1 rounded-full color-primary"
              />
              <MdOutlineDarkMode
                onClick={() => setMode("dark")}
                className={` z-20 cursor-pointer text-2xl p-1 rounded-full color-primary`}
              />
            </button>

            <button
              onClick={() => setMenuBtn(!menuBtn)}
              className="text-2xl color-primary md:hidden"
            >
              <IoMenu />
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`${
            menuBtn ? "translate-x-0" : "-translate-x-full"
          } absolute justify-center bg-secondary  h-screen w-3/4 top-0 z-50`}
        >
          <ul className=" color-primary flex flex-col mt-60 gap-5 items-center w-full ">
            <li
              className={`border-b ${
                mode === "light" ? "border-gray-900" : "border-gray-100"
              } w-full flex justify-center mb-5`}
            >
              {" "}
              <NavLink to="/" className="stencil text-4xl color-primary">
                FORHAD<span className="text-orange-500">.</span>
              </NavLink>
            </li>

            {["home", "about", "skills", "portfolio", "contact"].map(
              (nav, index) => (
                <li
                  className="poppins uppercase font-bold text-xl color-primary w-full flex justify-center"
                  key={index}
                >
                  <NavLink
                    onClick={() => setMenuBtn(!menuBtn)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-primary border-r-5 border-orange-500"
                          : ""
                      } text-center w-full py-1.5`
                    }
                    to={nav === "home" ? "/" : `/${nav}`}
                  >
                    {nav}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar