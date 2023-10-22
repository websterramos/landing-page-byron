import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-white">
      <div
        id="footer-div"
        className="flex w-full max-w-7xl flex-col items-center justify-between px-4 py-2 md:flex-row md:gap-6"
      >
        <div
          id="footer-parte-1"
          className="flex max-w-xs flex-col items-center justify-center gap-2 md:items-start md:gap-4"
        >
          <h2 className="text-xl font-bold uppercase">Contato</h2>

          <div className="text-sm font-light">
            <p>+55 (XX) XXXXX-XXXX</p>
            <p>byron@byronsolutions.com</p>
          </div>

          <div className="flex gap-2">
            <a
              className="duration-400 rounded-lg p-1 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
              href="https://www.instagram.com"
              target="__blank"
              rel="noopener"
            >
              <FontAwesomeIcon className="" icon={faInstagram} size="2xl" />
            </a>
            <a
              className="duration-400 rounded-lg p-1 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
              href="https://www.facebook.com"
              target="__blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
            </a>
            <a
              className="duration-400 rounded-lg p-1 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
              href="https://wa.me/55XXXXXXXXXXX"
              target="__blank"
              rel="noopener"
            >
              <FontAwesomeIcon className="" icon={faWhatsapp} size="2xl" />
            </a>
            <a
              className="duration-400 rounded-lg p-1 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
              href="https://www.linkedin.com"
              target="__blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
            </a>
          </div>
        </div>

        <picture id="footer-parte-2">
          <img className="w-48" src="img/logo2.jpg" alt="Logo" />
        </picture>

        <div
          id="footer-parte-3"
          className="flex max-w-xs flex-col items-center justify-center gap-2 md:items-end md:gap-4"
        >
          <h2 className="text-lg font-bold uppercase">Onde nos encontrar</h2>
          <p className="text-center text-sm font-light md:text-end ">
            Av. BPS, 1303, Bairro Pinheirinho - Universidade Federal de Itajubá,
            Itajubá – MG
          </p>
          <a
            className="duration-400 rounded-lg px-2 py-1 font-semibold transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
            href="https://maps.app.goo.gl/KSv62tWjRhyYpuHg9"
            target="__blank"
            rel="noopener"
          >
            Ver no mapa
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
