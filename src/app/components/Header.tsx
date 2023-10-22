"use client";
import React from "react";
import { Menu } from "@/app/components/Menu"; //Importando efeito do <Menu>

export const Header = () => {
  return (
    <nav className=" bg-white drop-shadow-lg text-sm sm:text-base lg:text-xl fixed w-full z-10">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0">
              <img className="max-h-12" src="img/logo2.jpg" alt="Logo" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline sapce-x-4 text-black">
                <a
                  href="#home"
                  className="hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-bold transition duration-400 ease-in-out focus:bg-gray-300"
                >
                  Home
                </a>
                <a
                  href="#empresa"
                  className="hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-bold transition duration-400 ease-in-out focus:bg-gray-300"
                >
                  Empresa
                </a>
                <a
                  href="#servicos"
                  className="hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-bold transition duration-400 ease-in-out focus:bg-gray-300"
                >
                  Serviços
                </a>
                <a
                  href="#contato"
                  className="hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-bold transition duration-400 ease-in-out focus:bg-gray-300"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              id="menuButtom"
              className="hover:bg-gray-200 px-3 py-2 rounded-md inline-flex items-center justify-center transition duration-400 ease-in-out focus:bg-gray-300"
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
      <Menu></Menu>
    </nav>
  );
};
