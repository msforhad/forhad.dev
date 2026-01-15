import React, { useContext } from 'react'
import TechSkilled from "../components/Skills/TechSkilled";
import TechTools from "../components/Skills/TechTools";
import EngSkilled from '../components/Skills/EngSkilled';
import EngTools from '../components/Skills/EngTools';
import { AppContext } from '../context/AppContext';

const Skills = () => {
  const { engSkills, setEngSkills, techSkills, setTechSkills } =
    useContext(AppContext);


  return (
    <div className="bg-primary">
      <div className="mx-2 md:mx-30 2xl:mx-40 flex flex-col justify-between gap-30 py-10 md:py-20">
        {/* 1st section */}
        <div className=" grid grid-cols-1 md:grid-cols-[10%32%55%] gap-10 md:gap-[2%]">
          <div className="hidden md:flex flex-col gap-10 items-center justify-center ">
            <p className="rotate-90 font-bold uppercase color-primary ">
              my skills
            </p>
            <p className="border h-20 w-0 color-primary "></p>
          </div>

          <div className="flex flex-col gap-10 justify-center items-center md:items-start">
            <div className="flex flex-col items-center md:items-start gap-5 font-bold color-primary outfit">
              <p className="text-4xl">What My</p>
              <p className="text-4xl">
                <span className="text-orange-500">Programming</span> Skills
                Included?
              </p>

              <p className="roboto color-secondary text-center md:text-justify">
                I develop simple,intuitive and responsive user interface that
                helps users get thing done with less effort and time with those
                technologies
              </p>
            </div>

            <div className="flex">
              <div className="flex gap-5 items-center  bg-secondary rounded-full py-2.5 px-5 relative justify-center">
                <button
                  onClick={() => setTechSkills("techSkills")}
                  className={`${
                    techSkills === "techSkills" ? "text-white" : ""
                  } font-bold poppins z-10 color-primary`}
                >
                  Skills
                </button>

                <button
                  onClick={() => setTechSkills("techTools")}
                  className={`${
                    techSkills === "techTools" ? "text-white" : ""
                  } font-bold poppins z-10 color-primary `}
                >
                  Tools
                </button>
                <div
                  className={`${
                    techSkills === "techSkills" ? "left-[7px]" : "right-[9px]"
                  } bg-orange-400 px-7 rounded-full py-1 text-orange-400 absolute z-0`}
                >
                  .
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            {techSkills === "techSkills" ? <TechSkilled /> : <TechTools />}
          </div>
        </div>

        {/* 2nd section */}
        <div className=" grid grid-cols-1 md:grid-cols-[50%35%15%] gap-[5%] md:gap-0">
          <div className="hidden md:flex justify-end mr-10">
            {engSkills === "engSkills" ? <EngTools />:<EngSkilled /> }
          </div>

          <div className="flex flex-col gap-10 justify-center items-center md:items-end">
            <div className="flex flex-col items-center md:items-end gap-5 font-bold color-primary outfit">
              <p className="text-4xl">What My</p>
              <p className=" text-4xl text-end">
                <span className="text-orange-500">Academic</span>{" "}
                Skills Included?
              </p>

              <p className="roboto color-secondary text-center md:text-end">
                I develop simple,intuitive and responsive user interface that
                helps users get thing done with less effort and time with those
                technologies
              </p>
            </div>

            <div className="flex">
              <div className="flex gap-5 items-center  bg-secondary rounded-full py-2.5 px-5 relative justify-center">
                <button
                  onClick={() => setEngSkills("engSkills")}
                  className={`${
                    engSkills === "engSkills" ? "text-white" : ""
                  } font-bold poppins z-10 color-primary`}
                >
                  Skills
                </button>

                <button
                  onClick={() => setEngSkills("engTools")}
                  className={`${
                    engSkills === "engTools" ? "text-white" : ""
                  } font-bold poppins z-10 color-primary`}
                >
                  Tools
                </button>
                <div
                  className={`${
                    engSkills === "engSkills" ? "left-[7px]" : "right-[9px]"
                  } bg-orange-400 px-7 rounded-full py-1 text-orange-400 absolute `}
                >
                  .
                </div>
              </div>
            </div>
          </div>

          { <div className="md:hidden justify-end">
            {engSkills === "engSkills" ? <EngTools />: <EngSkilled />}
          </div>}

          <div className="hidden md:flex flex-col gap-15 items-center justify-center">
            <p className="rotate-90 tracking-[3px] font-bold uppercase color-primary ">
              my skills
            </p>
            <p className="border-1 h-20 color-primary"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills