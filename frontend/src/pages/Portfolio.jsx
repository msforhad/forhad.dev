import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';

const Portfolio = () => {
  const navigate=useNavigate()

  const {allWorks}=useContext(AppContext)

  return (
    <div className="bg-primary">
      <div className="mx-2 md:mx-10 xl:mx-30 2xl:40 py-20">
        <div className="columns-1 md:columns-3 gap-5 ">
          <div className="mb-5 grid md:grid-cols-[30%70%] aspect-auto justify-items-start ">
            <div className="color-primary flex md:flex-col gap-5 md:gap-15 justify-center ">
              <p className="md:rotate-90 outfit xl:font-semibold ">My Work</p>
              <p className="border rotate-90"></p>
            </div>

            <div className="color-primary flex flex-col gap-5 ">
              <p className="font-bold outfit text-2xl md:text-3xl">
                See My Works Which Will Amaze You!
              </p>
              <p className="poppins text-justify">
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less effort and time with those
                technologies.
              </p>
            </div>
          </div>

          {allWorks.map((data, index) =>
            (index + 1) % 2 == 0 ? (
              index + 1 == 6 || index + 1 == 8 ? (
                <img
                  onClick={() =>
                    navigate(
                      `/portfolio/${data.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`
                    )
                  }
                  className="aspect-auto object-cover mb-5 rounded cursor-pointer"
                  key={index}
                  src={data.coverImage}
                  alt=""
                />
              ) : (
                <img
                  onClick={() =>
                    navigate(
                      `/portfolio/${data.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`
                    )
                  }
                  className="aspect-auto object-cover mb-5 rounded cursor-pointer"
                  key={index}
                  src={data.coverImage}
                  alt=""
                />
              )
            ) : index + 1 == 3 || index + 1 == 7 ? (
              <img
                onClick={() =>
                  navigate(
                    `/portfolio/${data.name.split(" ").join("-").toLowerCase()}`
                  )
                }
                className="aspect-auto object-cover mb-5 rounded cursor-pointer "
                src={data.coverImage}
                alt=""
              />
            ) : (
              <img
                onClick={() =>
                  navigate(
                    `/portfolio/${data.name.split(" ").join("-").toLowerCase()}`
                  )
                }
                className="aspect-auto object-cover mb-5 rounded cursor-pointer"
                src={data.coverImage}
                alt=""
              />
            )
          )}

          <div className="aspect-auto text-center ">
            <NavLink className="text-indigo-500 border-b border-indigo-500">
              See Work
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
