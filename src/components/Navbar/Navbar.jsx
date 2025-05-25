import React from "react";
import Logo1 from "../../assets/logo1.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Electronics",
    link: "/#",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    links: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    links: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    links: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center gap-4">
          {/* Logo */}
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo1} alt="Logo" className="w-10" />
            Fashique
          </a>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-10 py-1 focus:outline-none focus:border-2 focus:border-teal-500 dark:border-gray-700 dark:bg-gray-800"
              />

              <IoMdSearch className="text-gray-500 group-hover:text-tertiary absolute top-1/2 right-3 transform -translate-y-1/2" />
            </div>

            {/* Order Button */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>

              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-secondary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Simple Dropdown and Links */}

          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
