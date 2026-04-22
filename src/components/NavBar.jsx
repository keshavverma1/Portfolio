import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHatCowboy } from "react-icons/fa";
import Button from "@mui/material/Button";
import { RiMenu3Fill } from "react-icons/ri";
import { GiTireIronCross } from "react-icons/gi";
const NavBar = ({openMenu,setOpenMenu}) => {
  return (
    <>
      <nav className=" flex flex-row justify-between items-center fixed z-100 top-0 left-0 w-full px-5 py-3 bg-[#121618] ">
        {/* <ul className="list-none flex items-center gap-3 ">
            <li className="text-white font-[600] text-[16px] hover:text-[#750c92]">
              <Link>Our Belief</Link>
            </li>
            <li className="text-white font-[600] text-[16px] hover:text-[#750c92]">
              <Link>Analytics</Link>
            </li>
            <li className="text-white font-[600] text-[16px] hover:text-[#750c92]">
              <Link>Distributons</Link>
            </li>
            <li className="text-white font-[600] text-[16px] hover:text-[#750c92]">
              <Link>Services</Link>
            </li>
          </ul> */}

        <div>
          <ul className="list-none flex items-center gap-2">
            <li className="group">
              <Link
                to={"/"}
                className="flex items-center gap-2 font-[600] text-[25px] w-[60px] h-[60px]  text-white"
              >
                <img
                  src="https://cdn-icons-png.freepik.com/512/11247/11247054.png"
                  alt=""
                  className="w-full h-full"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none  md:items-center  gap-4 hidden md:flex">
            <li className="text-white font-[600] text-[20px] hover:text-[#750c92]">
              <NavLink onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/"}>Home</NavLink>
            </li>
            <li className="text-white font-[600] text-[20px] hover:text-[#750c92]">
               <NavLink  onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/about"}>About</NavLink>
            </li>
            <li className="text-white font-[600] text-[20px] hover:text-[#750c92]">
               <NavLink  onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/skills"}>Skills&Tools</NavLink>
            </li>

            <li className="text-white font-[600] text-[20px] hover:text-[#750c92]">
               <NavLink  onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/contact"}>Contact Us</NavLink>
            </li>
            <li>
             
              <button onClick={()=>window.open("https://wa.me/918171547808?text=Hello%20I%20saw%20your%20portfolio")}   class="  group/button relative  items-center justify-center overflow-hidden rounded-md bg-[#750c92] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                <span class="text-lg">Contact me</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div class="relative h-full w-10 bg-white/30"></div>
                </div>
              </button>
              
              
            </li>
          </ul>
          <ul className="list-none flex items-center gap-2 md:hidden ">
            <li>
              <Link>
               <button onClick={()=>window.open("https://wa.me/918171547808?text=Hello%20I%20saw%20your%20portfolio")}   class="  group/button relative  items-center justify-center overflow-hidden rounded-md bg-[#750c92] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                <span class="text-lg">Contact me</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div class="relative h-full w-10 bg-white/30"></div>
                </div>
              </button>
              </Link>
            </li>
            {openMenu === false ? (
              <Button onClick={()=>setOpenMenu(!openMenu)}>
                <RiMenu3Fill className="bg-[#750c92] z-1000 text-[50px] text-white rounded-full p-2" />
              </Button>
            ) : (
              <Button onClick={()=>setOpenMenu(!openMenu)}>
                <GiTireIronCross className="bg-[#750c92] z-1000 text-[50px] text-white rounded-full p-2" />
              </Button>
            )}

            <div
              className={`absolute top-0 right-0 ${openMenu === true ? "translate-x-0 px-2 w-[80%]" : "translate-x-full"} transform transition-all z-500 duration-500 h-screen text-white bg-[#121618] `}
            >
              <div className="flex items-center justify-center">
                <div class=" profile-card w-full rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-[#121618] flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                  <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
                    <div class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#750c92] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#750c92] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                      <img
                        class="size-36 z-40 border-4 object-cover border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                        id="avatar"
                        src="/keshav2.jpeg"
                        viewBox="0 0 61.8 61.8"
                        xmlns="http://www.w3.org/2000/svg"
                      />
                       
                      
                      <div class="absolute bg-[#750c92] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
                    </div>
                  </div>
                  <div class="headings *:text-center *:leading-4">
                    <p class="text-xl font-serif font-semibold mt-2 text-white">
                      KESHAV VERMA
                    </p>
                    <p class="text-sm pt-2 font-semibold text-white">
                      MERN STACK DEVELOPER  | DEVOPS LEARNER
                    </p>
                  </div>
                  <div class="w-full items-center justify-center flex">
                    <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-white *:border-dotted *:text-xs *:font-semibold *:text-white pb-3">
                      <li>
                        <svg
                          id="phone"
                          viewBox="0 0 24 24"
                          class="fill-white group-hover:fill-[#750c92]"
                          height="15"
                          width="15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                        </svg>
                        <p>+91 8171547808</p>
                      </li>
                      <li>
                        <svg
                          class="fill-white group-hover:fill-[#750c92]"
                          height="15"
                          width="15"
                          id="mail"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                            fill="white"
                          ></path>
                          <path
                            d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                            fill="white"
                          ></path>
                        </svg>
                        <p>kv193111@gmail.com</p>
                      </li>
                      <li>
                        <svg
                          class="fill-white group-hover:fill-[#750c92]"
                          height="15"
                          width="15"
                          id="globe"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g data-name="Layer 2">
                            <path
                              data-name="globe"
                              d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                            ></path>
                          </g>
                        </svg>
                        <p>smkydevelopr.com</p>
                      </li>
                      <li>
                        <svg
                          id="map"
                          viewBox="0 0 16 16"
                          class="fill-white group-hover:fill-[#750c92]"
                          height="15"
                          width="15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
                            fill="white"
                          ></path>
                        </svg>
                        <p>83 ParasNath Ghass Mandi Lohiya Bazzar, Muzaffarnagar</p>
                      </li>
                    </ul>
                  </div>
                  <hr class="w-full group-hover:h-5 h-3 bg-[#750c92] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
                </div>
              </div>
                 <ul className="list-none mt-2 px-3   gap-4 ">
            <li className="text-white font-[600] text-[30px] hover:text-[#750c92]">
              <NavLink  onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/"}>Home</NavLink>
            </li>
            <li className="text-white font-[600] text-[30px] hover:text-[#750c92]">
               <NavLink  onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/about"}>About</NavLink>
            </li>
            <li className="text-white font-[600] text-[30px] hover:text-[#750c92]">
               <NavLink  onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/skills"}>Skills&Tools</NavLink>
            </li>

            <li className="text-white font-[600] text-[30px] hover:text-[#750c92]">
               <NavLink  onClick={()=>setOpenMenu(false)} className={({isActive})=>isActive===true?'text-[#750c92]':'text-white'} to={"/contact"}>Contact Us</NavLink>
            </li>
            <li></li>
            </ul>
              



              
            </div>
          
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
