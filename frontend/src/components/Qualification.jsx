import React from 'react'

import { PiStudentFill } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";



const Qualification = () => {
  return (
    <div className="flex flex-col gap-10 items-center mx-2 md:mx-30 2xl:mx-40 color-primary pb-20 ">
      <div className="flex flex-col items-center gap-5">
        <p className="font-bold text-4xl poppins">Qualification</p>
        <p className="flex items-center gap-2 text-lg color-secondary outfit font-bold">
          <PiStudentFill />
          <span>My Learning Journey</span>
        </p>
      </div>

      <div className="flex gap-5 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-end gap-1 poppins">
            <p className="font-bold">SSC in Science</p>
            <p className="color-secondary poppins ">
              Purnamati Mansur Ahmed High School
            </p>
            <p className="flex items-center color-secondary gap-2">
              <MdOutlineCalendarMonth />
              <span>2014 - 2019</span>
            </p>
          </div>

          <div className="flex flex-col items-end gap-1 poppins mt-28">
            <p className="font-bold">HSC in Science</p>
            <p className="color-secondary">
              Paruara Abdul Mation Khasru College
            </p>
            <p className="flex items-center gap-2 color-secondary">
              <MdOutlineCalendarMonth />
              <span>2019 - 2021</span>
            </p>
          </div>

          <div className="flex flex-col items-end gap-1 poppins mt-28">
            <p className="font-bold">B.Sc. in Civil Engineering</p>
            <p className="color-secondary">Sylhet Engineering College</p>
            <p className="flex items-center gap-2 color-secondary">
              <MdOutlineCalendarMonth />
              <span>2023 - Present</span>
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
        </div>

        <div className="flex flex-col gap-10 mt-28">
          <div className="flex flex-col gap-1 poppins">
            <p className="font-bold">Web Development</p>
            <p className="color-secondary">Self learning</p>
            <p className="flex items-center gap-2 color-secondary">
              <MdOutlineCalendarMonth />
              <span>12|02|2024 - 24|08|2024</span>
            </p>
          </div>

          <div className="flex flex-col gap-1 poppins mt-28">
            <p className="font-bold">Front End Development</p>
            <p className="color-secondary">Self learning</p>
            <p className="flex items-center gap-2 color-secondary">
              <MdOutlineCalendarMonth />
              <span>24|08|2024 - 18|03|2025</span>
            </p>
          </div>

          <div className="flex flex-col gap-1 poppins mt-28">
            <p className="font-bold">Back End Development</p>
            <p className="color-secondary">Self learning</p>
            <p className="flex items-center gap-2 color-secondary">
              <MdOutlineCalendarMonth />
              <span>18|03|2025 - Present</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification