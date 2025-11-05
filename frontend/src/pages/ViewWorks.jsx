import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const ViewWorks = () => {
  const {id}=useParams()

  const { backendUrl } = useContext(AppContext);

  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendUrl}/api/works/${id}`)
      .then((res) => setWork(res.data.work))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  

  useEffect(()=>{
    scrollTo({ top: 0, behavior: "smooth" });
  })

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!work) {
    return <p className="text-center py-10">Work not found!</p>;
  }


  return (
    <div className="bg-primary color-primary">
      <div className="px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary py-10"></div>
      </div>

      <div className="border-t border-primary px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary grid md:grid-cols-[46%50%] gap-[4%] items-center ">
          <p className=" border-r border-b md:border-b-0 border-primary outfit font-bold text-2xl md:text-4xl pl-5 h-full flex items-center py-5  ">
            {work.name}
          </p>
          <p className="border-l border-primary flex items-center px-5 py-5">
            {work.shortDescription}
          </p>
        </div>
      </div>

      <div className="border-t border-b border-primary px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary grid md:grid-cols-[46%50%] gap-[4%]">
          <div className="flex border-r border-b md:border-b-0 border-primary gap-5 px-5 items-center py-5">
            {work.technology.map((tech, index) => (
              <p key={index} className="font-semibold text-lg">
                {tech}
              </p>
            ))}
          </div>
          <NavLink className="border-l py-5 md:py-0 border-primary flex items-center px-5">
            <span className="border border-orange-500 rounded-full px-4 py-1.5 font-bold poppins hover:bg-orange-500 hover:text-white transition-all duration-300">
              Live Preview
            </span>
          </NavLink>
        </div>
      </div>

      <div className="px-2 md:px-10 xl:px-30">
        <div className="p-5 border-l border-r border-primary">
          <img
            className="aspect-3/2 object-cover rounded"
            src={work.image}
            alt=""
          />
        </div>
      </div>

      <div className="border-t border-b border-primary px-2 md:px-10 xl:px-30  ">
        <div className="border-l border-r border-primary grid md:grid-cols-[30%66%] gap-[4%] pb-15 md:pb-0 ">
          <div className="border-b md:border-b-0 md:border-r border-primary h-full flex items-center">
            <p className="px-5 font-bold text-2xl poppins py-5 md:py-0">What’s included</p>
          </div>

          <div className="border-l border-primary flex flex-col gap-10">
            <div className="border-b border-primary">
              <p className="p-5 text-justify poppins">
                {work.longDescription[0].description}
              </p>
            </div>

            <div className="grid md:grid-cols-[49%49%] border-t border-primary gap-[2%] pb-10 pt-5 ">
              {Object.entries(work.longDescription[0])
                .filter(([key]) => key !== "description")
                .map(([key, value]) => (
                  <p key={key} className=" px-2 text-justify poppins text-sm ">
                    <span className="font-bold outfit text-lg">
                      {key.split("_").join(" ")} -{" "}
                    </span>
                    {value}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 md:px-10 xl:px-30 ">
        <div className="border-r border-l border-primary grid md:grid-cols-[30%66%] gap-[4%] py-5 md:py-0">
          <p className="border-r border-primary flex items-center px-5 font-bold text-2xl poppins">
            Screenshots
          </p>
          <div className="border-l border-primary columns-1 md:columns-2 gap-5 p-5">
            {work.screenshots.map((data, index) => (
              <img
              key={index}
                className="mb-5 rounded aspect-3/2 object-cover"
                src={data}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-b border-primary px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary grid md:grid-cols-[30%66%] gap-[4%] py-5 md:py-0">
          <p className="border-r border-primary flex items-center font-bold text-2xl poppins px-5">
            The technology
          </p>
          <div className="border-l border-primary py-5 flex flex-col gap-5">
            <div className="flex items-center ">
              <p className="p-5">
                Our templates are thoughtfully crafted with the latest and
                greatest versions of the tools we love so that they are easy to
                maintain, and actually fun to work on
              </p>
            </div>
            <div className="grid grid-cols-[49%49%] gap-[2%] p-5">
              {
                work.technology.map((tech,i)=>(
                  <p key={i} className='py-2 font-bold outfit'>{tech}</p>
                ))
              }

            </div>
          </div>
        </div>
      </div>

      <div className="px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary py-10"></div>
      </div>
    </div>
  );
}

export default ViewWorks