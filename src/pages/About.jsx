import React from "react";
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <section className="bg-[#121618] bg-cover h-auto">
        <div className="max-w-7xl mx-auto  bg-[#121618] min-h-[900px]  pb-15">
          <h1 className="px-4 pt-20 text-[40px] text-white font-[700]">
            About me
          </h1>
          <p
            style={{ fontFamily: "Roboto Mono ,monospace" }}
            className="text-gray-400 px-4 font-[400] mt-3 md:mt-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]"
          >
            I’m a passionate and self-motivated developer with a B.Tech in
            Computer Science (2024). I specialize in building modern web
            applications using React, Tailwind CSS, and the MERN stack.
            Currently, I’m exploring cloud technologies like AWS and working
            with tools like Docker and CI/CD. I enjoy creating responsive,
            scalable, and user-friendly applications. I’m always eager to learn
            new technologies and looking for opportunities to grow as a Full
            Stack Developer and DevOps Engineer.
          </p>
          <div className="mt-5">
            <h1 className="px-4 mt-2 text-[40px] text-white font-[700]">
              Get My Resume
            </h1>
            <div className="mt-6 mb-6 px-4">
              <div class="relative duration-300  hover:-rotate-0  -rotate-12 group border border-white border-4  overflow-hidden rounded-2xl relative h-52 w-72 bg-[#750c92] p-5 flex flex-col items-start gap-4">
                <div class="text-gray-50">
                  <span class="font-bold text-5xl">Keshav</span>
                  <p class="text-xs">
                    MERN Stack Developer <br /> & DevOps Engineer
                  </p>
                </div>
                <button class="cursor-pointer duration-300 hover:bg-[#750c92] border hover:text-gray-50 bg-gray-50 font-semibold text-[#750c92] px-3 py-2 flex flex-row items-center gap-3">
                  Dowload CV
                  <svg
                    class="w-6 h-6 fill-current"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <svg
                  class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-[#750c92]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path
                    data-name="layer1"
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                    stroke-miterlimit="10"
                    stroke-width="5"
                  ></path>
                </svg>

                <svg
                  class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-[#460857]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path
                    data-name="layer1"
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </div>

            <h1 className="px-4 mt-9 text-[40px] text-white font-[700]">
              Education
            </h1>
            <div className="px-4 flex gap-3 mt-3">
              <FaRegHandPointRight className="text-white text-[24px] " />
              <p className=" text-gray-400">
                <span className="text-white font-[600] text-[19px]">
                  B.Tech (Computer Science){" "}
                </span>{" "}
                <br />
                S D College of Engineering & Technology • 2024
                <br />
                <span className="text-white font-[600]">CGPA:</span>7.1 <br />
              </p>
            </div>

            <div className="px-4 flex gap-3 mt-3">
              <FaRegHandPointRight className="text-white text-[24px] " />
              <p className=" text-gray-400">
                <span className="text-white font-[600] text-[19px]">
                  Intermediate (12th){" "}
                </span>{" "}
                <br />
                Uttar Pradesh Board • 2020 <br />
                Saraswati Shishu Mandir, Keshavpuri <br />
                <span className="text-white font-[600]">
                  Percentage:
                </span> 61% <br />
              </p>
            </div>

            <div className="px-4 flex gap-3 mt-3">
              <FaRegHandPointRight className="text-white text-[24px] " />
              <p className=" text-gray-400">
                <span className="text-white font-[600] text-[19px]">
                  High School (10th){" "}
                </span>{" "}
                <br />
                Uttar Pradesh Board • 2018 <br />
                Saraswati Shishu Mandir, Keshavpuri <br />
                <span className="text-white font-[600]">
                  Percentage:
                </span> 83% <br />
              </p>
            </div>
            <div className="px-4 ">
              <h1 className="mt-8 text-[40px] text-white font-[700]">
                Certification
              </h1>
              <div className="px-2 mt-3 flex items-center justify-center md:justify-start">
                <div className="h-[300px] w-fit p-2 border-3 border-[#750c92] shadow-[0_0_25px_#750c92] ">
                  <img src="/intern.jpg" className=" h-full" alt="" />
                </div>
              </div>
            </div>
            <div className="px-4 flex gap-3 mt-3">
              <FaRegHandPointRight className="text-white text-[24px] " />
              <p className=" text-gray-400">
                <span className="text-white font-[600] text-[19px]">
                  <a className="hover:text-[#750c92]" href="https://bigbrandmarketing.in/">Big Brand Marketing</a>
                </span>{" "}
                
              </p>
            </div>

             <div className="px-2 mt-3 flex items-center justify-center md:justify-start">
                <div className="h-[500px] w-fit p-2 border-3 border-[#750c92] shadow-[0_0_25px_#750c92] ">
                  <img src="/degree.jpeg" className=" h-full" alt="" />
                </div>
              </div>

            <h1 className="px-4 mt-2 text-[40px] text-white font-[700]">
              Connect with me
            </h1>
            <div className="flex flex-col px-4 ">
              <a
                className="cursor-pointer"
                href="https://linkedin.com/in/keshav-verma-815406347"
              >
                <button className="cursor-pointer group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                  <svg
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    width="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height="100"
                    class="w-8 h-8 shrink-0 fill-neutral-50"
                  >
                    <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                  </svg>
                  <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    Keshav Verma
                  </span>
                </button>
              </a>
              <a
                className="mt-2"
                href="https://www.instagram.com/keshxv_22/?__pwa=1"
              >
                <button class="cursor-pointer group w-12 hover:w-44 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 relative rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-pink-600 before:hover:bg-pink-500 before:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 shrink-0 fill-neutral-50"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    @keshxv_22
                  </span>
                </button>
                <a href="">
                  <button class="cursor-pointer group w-12 hover:w-44 h-12 hover:bg-gray-800 relative bg-gray-900 rounded text-neutral-50 duration-700 before:duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-gray-900 before:hover:bg-gray-800 before:rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 shrink-0 fill-neutral-50"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.1-.76.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.1 0 0 .98-.32 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.6.24 2.8.12 3.1.75.8 1.2 1.82 1.2 3.08 0 4.44-2.7 5.4-5.28 5.68.4.34.76 1.02.76 2.06v3.05c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"></path>
                    </svg>
                    <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                      GitHub
                    </span>
                  </button>
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
