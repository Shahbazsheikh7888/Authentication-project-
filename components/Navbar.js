import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-black fixed pt-16 ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
        <a href="http://localhost:3000/Signin"><button className="text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:from-pink-500 hover:to-yellow-500  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-2xl italic  px-5 py-2.5   text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5 ml-20">Dashboard</button></a>
          <ul className="hidden text-white font-bold md:flex ml-40 pl-40 mx-10 text-xl p-5 md:space-x-8">
            <li className="hover:text-orange-500">
              <Link to="home" smooth={true} duration={500} class="cursor-pointer">
                Home
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="nightlife" smooth={true} offset={-200} duration={500} class="cursor-pointer">
                About
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="restaurants" smooth={true} offset={-50} duration={500} class="cursor-pointer">
                Services
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="greeklife" smooth={true} offset={-100} duration={500} class="cursor-pointer">
                Contact
              </Link>
            </li>
           
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
        <a href="http://localhost:3000/Signin"><button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-2xl italic  px-5 py-2.5 text-black  text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5">Sign In</button></a>
          <a href="http://localhost:3000/Signin"><button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-2xl italic  px-5 py-2.5 text-black  text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5">Sign Up</button></a>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5 bg-white" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute text-black bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500} class="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="nightlife"
            smooth={true}
            offset={-200}
            duration={500}
            class="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="restaurants"
            smooth={true}
            offset={-50}
            duration={500}
            class="cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="greeklife"
            smooth={true}
            offset={-100}
            duration={500}
            class="cursor-pointer"
          >
            Contact 
          </Link>
        </li>
       

        <div className="flex flex-col my-4">
        <a href="http://localhost:3000/Signin"><button className="bg-transparent text-black hover:text-purple-800 px-8 ">
            Sign In
          </button></a>
          <a href="http://localhost:3000/Signup"><button className="bg-transparent text-black hover:text-purple-800 px-8 ">Sign Up</button></a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;