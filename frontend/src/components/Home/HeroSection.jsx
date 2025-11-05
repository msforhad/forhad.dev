import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";

import assets from "../../assets/image/logo-2xl.png";

import { FaLinkedin } from "react-icons/fa";
import { AppContext } from '../../context/AppContext';
import { FaGithub } from "react-icons/fa6";



const HeroSection = () => {
  const{mode}=useContext(AppContext)
  return (
    <div className="mx-2 md:mx-30 2xl:mx-40 ">
      <div className="flex justify-between items-center py-10 md:py-20 gap-5">
        {/* first section */}
        <div className="hidden md:flex">
          <ul className="flex flex-col items-center justify-center gap-3 color-primary">
            <li className="text-2xl">
              <NavLink
                to="https://www.facebook.com/fo.rh.ad.754527?mibextid=ZbWKwL"
                target="_blank"
              >
                <IoLogoFacebook />
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="https://wa.me/8801619565931" target="_blank">
                <FaWhatsappSquare />
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink
                to="https://www.linkedin.com/in/md-mehedi-hasan-forhad/"
                target="_blank"
              >
                <FaLinkedin />
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="https://github.com/msforhad" target="_blank">
                <FaGithub />
              </NavLink>
            </li>
            <li className="border w-0 h-20"></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[37%60%] gap-[3%] color-primary ">
          <img className="aspect-auto" src={assets} alt="" />
          <div className=" flex flex-col justify-center items-center md:items-start md:pl-10">
            <p className="poppins text-4xl font-bold">
              Md. Mehedi Hasan Forhad
            </p>
            <p className="outfit font-light text-gray-500">
              Civil Engineer | Full-Stack Web Developer
            </p>
            <p className="outfit text-xl  py-5 color-secondary text-center md:text-justify">
              We Design & Build Creative Products that combine innovation,
              functionality, and aesthetics to deliver meaningful user
              experiences.
            </p>
            <NavLink
              className={` border rounded font-bold py-1.5 px-4 max-w-40 flex justify-center  ${
                mode === "light"
                  ? "text-black hover:bg-black hover:text-white"
                  : "text-white hover:bg-white hover:text-black"
              } transition-all duration-700 ease-in-out`}
              to="/Contact"
            >
              GET IN TOUCH
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex">
          <ul className="flex flex-col items-center justify-center gap-11">
            <li className="rotate-90 stencil tracking-[6px]">
              <p className="color-primary">FORHAD</p>
            </li>
            <li>
              <p className=" border-1 h-20 color-primary"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection