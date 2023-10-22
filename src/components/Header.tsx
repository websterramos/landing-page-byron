"use client";
import React from "react";
import Menu from "@/components/Menu";

const Header = () => {
  return (
    <nav className=" fixed z-10 w-full bg-white text-sm drop-shadow-lg sm:text-base lg:text-xl">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0">
              <img className="max-h-12" src="img/logo2.jpg" alt="Logo" />
            </a>
            <div className="hidden md:block">
              <div className="sapce-x-4 ml-10 flex items-baseline text-black">
                <a
                  href="#home"
                  className="duration-400 rounded-md px-3 py-2 text-sm font-bold transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
                >
                  Home
                </a>
                <a
                  href="#sobre"
                  className="duration-400 rounded-md px-3 py-2 text-sm font-bold transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
                >
                  Empresa
                </a>
                <a
                  href="#servicos"
                  className="duration-400 rounded-md px-3 py-2 text-sm font-bold transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
                >
                  Serviços
                </a>
                <a
                  href="#contato"
                  className="duration-400 rounded-md px-3 py-2 text-sm font-bold transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              id="menuButtom"
              className="duration-400 inline-flex items-center justify-center rounded-md px-3 py-2 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
              aria-label="Menu"
              aria-aria-expanded="false"
              type="button"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
