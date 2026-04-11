import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0e1113] text-white pt-10 w-[100%] h-fit   ">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Name */}
          <h2 className="text-2xl font-bold text-[#8e22ab]">
            Keshav Verma
          </h2>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-gray-300">
            <li className="hover:text-[#8e22ab] cursor-pointer transition"><Link to={"/"}>Home</Link> </li>
            <li className="hover:text-[#8e22ab] cursor-pointer transition"><Link to={"/about"}>About</Link></li>
            <li className="hover:text-[#8e22ab] cursor-pointer transition"><Link to={"/skills"}>Skills & Tools</Link></li>
            <li className="hover:text-[#8e22ab] cursor-pointer transition"><Link to={"/contact"}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Keshav Verma. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;