import React, { useState } from "react";
import logo from "../assets/logo_jade_tech.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1190A6] overflow-x-hidden h-[110px]">
      <div className="flex justify-between m-auto pt-4 items-center flex-wrap w-full lg:px-[5%] absolute ">
        <div className="pb-4 pl-5 pt-2 lg:pt-6">
          <img src={logo} alt="logo perusahaan" width="120px" className="" />
        </div>

        <GiHamburgerMenu
          className="text-white  lg:hidden block cursor-pointer text-5xl mr-5 hover:bg-black/10 h-15 w-auto p-2 rounded-2xl "
          onClick={() => setOpen(!open)}
        />

        {!open ? (
          <div
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:gap-7 w-full lg:w-auto text-white  bg-black/20 lg:bg-transparent `}
          >
            <ul className="lg:flex lg:justify-between lg:gap-7 text-lg lg:text-xl ">
              <li className="hover:bg-black/10 block  py-2 cursor-pointer lg:hover:bg-transparent pl-2">
                <button
                  className="lg:hover:text-[#004c9b]"
                  onClick={() => navigate("/")}
                >
                  Profile
                </button>
              </li>
              <li className="hover:bg-black/10 block  py-2 cursor-pointer lg:hover:bg-transparent pl-2">
                <button
                  className="lg:hover:text-[#004c9b]"
                  onClick={() => navigate("/service")}
                >
                  Service
                </button>
              </li>
              <li className="hover:bg-black/10 block  py-2 cursor-pointer lg:hover:bg-transparent pl-2">
                <button className="lg:hover:text-[#004c9b]"
                onClick={() => navigate('/contact')}
                >Contact</button>
              </li>
            </ul>
          </div>
        ) : (
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:gap-7 w-full lg:w-auto text-white  bg-black/20 lg:bg-transparent `}
          >
            <ul className="lg:flex lg:justify-between lg:gap-7 text-lg lg:text-2xl ">
              <li className="hover:bg-black/10 block  py-2 cursor-pointer lg:hover:bg-transparent pl-2">
                <button
                  className="lg:hover:text-[#004c9b]"
                  onClick={() => navigate("/")}
                >
                  Profile
                </button>
              </li>
              <li className="hover:bg-black/10 block  py-2 cursor-pointer lg:hover:bg-transparent pl-2">
                <button
                  className="lg:hover:text-[#004c9b]"
                  onClick={() => navigate("/service")}
                >
                  Service
                </button>
              </li>
              <li className="hover:bg-black/10 block  py-2 cursor-pointer lg:hover:bg-transparent pl-2">
                <button
                  className="lg:hover:text-[#004c9b]"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </button>
              </li>
              
           
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
