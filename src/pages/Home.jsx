import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Skills from "./Skills";
const Home = ({setOpenMenu,openMenu}) => {
  const [openContactForm,setOpenContactForm]=useState(true);
  const handleContactForm = () =>{
    setOpenContactForm(!openContactForm)
  }
  return (
    // 
    <>
      <section className="bg-[#121618] bg-cover h-auto">
        <div className="max-w-7xl mx-auto  bg-[#121618] bg-cover h-auto pb-15 relative">
          {/* textonimage */}

          

          <div className="pt-28 z-50 flex flex-col-reverse md:flex-row items-center ">
            <div className="w-full md:w-[50%] px-4">
              <h1
                style={{ fontFamily: "Roboto Mono ,monospace" }}
                className="text-[30px] sm:text-[40px] md:text-[50px] mt-8 md:mt-0 font-[700] tracking-tighter text-white"
              >
                Hi, My
              </h1>
              <h2
                style={{ fontFamily: "Roboto Mono ,monospace" }}
                className="text-[35px] sm:text-[40px] md:text-[50px] tracking-tighter font-[700] text-white "
              >
                name is{" "}
                <span
                  style={{ fontFamily: "Roboto Mono ,monospace" }}
                  className="font-[700] text-[35px] sm:text-[40px] md:text-[50px] text-[#8e22ab] "
                >
                  Keshav Verma
                </span>
              </h2>
              <p
                style={{ fontFamily: "Roboto Mono ,monospace" }}
                className="text-gray-400 font-[400] mt-3 md:mt-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]"
              >
                MERN Stack Developer | DevOps Learner <br /> I specialize in
                building full-stack web applications and managing deployments
                using tools like Docker, CI/CD, and cloud platforms.
              </p>
              <button onClick={()=>setOpenMenu(!openMenu)} class="md:hidden mt-5 group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#750c92] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                <span class="text-lg">Know me</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div class="relative h-full w-10 bg-white/30"></div>
                </div>
              </button>
              <button onClick={()=>window.open("https://wa.me/918171547808?text=Hello%20I%20saw%20your%20portfolio")}   class="hidden md:block mt-5 group/button relative  items-center justify-center overflow-hidden rounded-md bg-[#750c92] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                <span class="text-lg">Know me</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div class="relative h-full w-10 bg-white/30"></div>
                </div>
              </button>
            </div>
            <div className="w-full md:w-[50%] px-4 flex items-center justify-center ">
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]   px-2 py-3  border-3 border-[#750c92] shadow-[0_0_25px_#750c92] rounded-full ">
                <img
                  src="/keshav2.jpeg"
                  className="h-full w-full object-cover object-center  rounded-full "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};

export default Home;
