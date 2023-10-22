"use client";
//Arquivo: Efeito do Menu (Navbar)
import React, { useEffect } from "react";

export function setupMenu() {
  const btn = document.getElementById("menuButtom");
  const menu = document.getElementById("menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

const Menu = () => {
  useEffect(() => {
    setupMenu();
  }, []);

  return (
    <div id="menu" className="hidden md:hidden">
      <div className="pd-2 px-2 pt-2 sm:px-3">
        <a
          href="#home"
          className="duration-400 block rounded-md px-3 py-2 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
        >
          Home
        </a>
        <a
          href="#empresa"
          className="duration-400 block rounded-md px-3 py-2 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
        >
          Empresa
        </a>
        <a
          href="#servicos"
          className="duration-400 block rounded-md px-3 py-2 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
        >
          Serviços
        </a>
        <a
          href="#contato"
          className="duration-400 block rounded-md px-3 py-2 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300"
        >
          Contato
        </a>
      </div>
    </div>
  );
};

export default Menu;
