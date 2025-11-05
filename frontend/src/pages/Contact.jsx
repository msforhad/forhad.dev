import React from 'react'
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter,FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
  

  const onSubmitHandler=async(event)=>{
    event.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:4000/contact/send-message',{name,email,phone,message},{
          withCredentials:true,
          headers:{"Content-Type":"application/json"}
        }
      );

      if(data.success){
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
      
    }

  }
  return (
    <div className="bg-primary">
      <div className="mx-2 md:mx-30 2xl:mx-40 py-20 md:py-30">
        <div className=" grid grid-cols-1 md:grid-cols-[45%48%] gap-10">
          <div className="flex justify-start items-start">
            <div className="color-secondary font-semibold flex flex-col items-center gap-10 mt-8 ">
              <p className="rotate-270 poppins">Contact</p>
              <p className="border h-30"></p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="color-primary text-2xl lg:text-3xl font-bold poppins">
                  Have You Any Project?
                  <br /> Please Drop a Message
                </p>
                <p className="color-secondary text-justify outfit">
                  Get in touch and let me know how i can help. Fill out the form
                  and i’ll be in touch as soon as possible.
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <div>
                  <div className="flex gap-5 items-center">
                    <FaLocationDot className="text-2xl color-primary" />
                    <p className="color-primary font-bold poppins text-lg">
                      Address:
                    </p>
                  </div>
                  <p className="color-secondary text-justify mx-12">
                    Tilagarh, Alurtol Road, Sylhet 3100
                  </p>
                </div>

                <div>
                  <div className="flex gap-5 items-center">
                    <FaPhoneAlt className="text-2xl color-primary" />
                    <p className="color-primary font-bold poppins text-lg">
                      Phone:
                    </p>
                  </div>
                  <p className="color-secondary text-justify mx-12">
                    01793395006 <br />
                    01619565931
                  </p>
                </div>

                <div>
                  <div className="flex gap-5 items-center">
                    <MdEmail className="text-2xl color-primary" />
                    <p className="color-primary font-bold poppins text-lg">
                      Email:
                    </p>
                  </div>
                  <p className="color-secondary text-justify mx-12">
                    forhad.ce.532@gmail.com <br />
                    msforhad717@gmail.com
                  </p>
                </div>

                <div className="flex gap-5 color-primary ">
                  <NavLink
                    className="rounded bg-secondary p-3"
                    to="https://www.facebook.com/fo.rh.ad.754527?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <FaFacebook className="text-2xl bg-primary rounded-full" />
                  </NavLink>

                  <NavLink
                    className="rounded bg-secondary p-3"
                    to="https://wa.me/8801619565931"
                    target="_blank"
                  >
                    <FaWhatsappSquare className="text-2xl bg-primary rounded-full" />
                  </NavLink>

                  <NavLink
                    className="rounded bg-secondary p-3"
                    to="https://www.linkedin.com/in/md-mehedi-hasan-forhad/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-2xl bg-primary rounded-full" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary py-20 px-10 rounded">
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 poppins color-primary">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Name</label>
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    className=" bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g Forhad"
                    name="name"
                    required
                  />
                  <CgProfile className="absolute left-2 top-3 color-secondary" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold">Email</label>
                <div className="flex flex-col relative">
                  <input
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    className="bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g example@gmail.com"
                    name="email"
                    required
                  />
                  <MdEmail className="absolute left-2 top-3 color-secondary" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold">Phone</label>
                <div className="flex flex-col relative">
                  <input
                    type="number"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                    className="bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g +8801700000000"
                    name="phone"
                    required
                  />
                  <FaPhoneAlt className="absolute left-2 top-3 color-secondary" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold">Message</label>
                <div className="flex flex-col relative">
                  <textarea
                  value={message}
                  onChange={e=>setMessage(e.target.value)}
                    className="bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g Enter your message"
                    name="message"
                    required
                    cols="30"
                  />
                  <MdMessage className="absolute left-2 top-3 color-secondary" />
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-500 rounded p-[5px] cursor-pointer text-white font-bold poppins tracking-widest"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact