import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "flowbite";

const Navbar = () => {
  useEffect(() => {
    import("flowbite").then((flowbite) => flowbite.init());
  }, []);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-neutral-50 border-b-1 border-neutral-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-600 dark:text-gray-600">
              Flowbite
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-700 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-200 rounded-full bg-gray-200 focus:ring-green-500 focus:border-green-500 dark:bg-gray-s00  dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search..."
              />
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-600">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-700 rounded-sm md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:text-gray-600 dark:hover:bg-gray-200 dark:hover:text-gray-600 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3 text-gray-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-gray-600 md:dark:hover:text-green-500 dark:hover:bg-gray-200 dark:hover:text-gray-600 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
