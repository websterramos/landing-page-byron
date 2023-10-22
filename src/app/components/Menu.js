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

export function Menu() {
  useEffect(() => {
    setupMenu();
  }, []);

  return (
    <div id="menu" className="hidden md:hidden">
      <div className="px-2 pt-2 pd-2 sm:px-3">
        <a
          href="#home"
          className="hover:bg-gray-200 block px-3 py-2 rounded-md transition duration-400 ease-in-out focus:bg-gray-300"
        >
          Home
        </a>
        <a
          href="#empresa"
          className="hover:bg-gray-200 block px-3 py-2 rounded-md transition duration-400 ease-in-out focus:bg-gray-300"
        >
          Empresa
        </a>
        <a
          href="#servicos"
          className="hover:bg-gray-200 block px-3 py-2 rounded-md transition duration-400 ease-in-out focus:bg-gray-300"
        >
          Serviços
        </a>
        <a
          href="#contato"
          className="hover:bg-gray-200 block px-3 py-2 rounded-md transition duration-400 ease-in-out focus:bg-gray-300"
        >
          Contato
        </a>
      </div>
    </div>
  );
}
