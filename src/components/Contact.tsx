import React from "react";
import {
  faInstagram,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/Icon";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section
      id="contato"
      className="bg-gradient flex h-full items-center justify-center bg-gradient-to-r from-[#185083] to-[#0FA3E3] px-4 py-8 lg:px-40 lg:py-24"
    >
      <div id="contato-div" className="max-7xl">
        <div
          id="contato-content"
          className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-36"
        >
          <div
            id="contato-texto"
            className="flex max-w-md flex-col gap-6 text-[#DCF4FF] lg:w-[527px] lg:gap-12"
          >
            <div id="texto-parte1" className="flex flex-col gap-4">
              <h5 className="text-2xl uppercase leading-8">Contato</h5>

              <div className="flex flex-col gap-4 lg:gap-6">
                <h4 className="text-4xl leading-[49px]">
                  Vamos trabalhar juntos.
                </h4>
                <p className="leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam massa dolor, fermentum vitae ante eget, eleifend
                  fermentum orci.
                </p>
              </div>
            </div>

            <div id="texto-parte2" className="flex flex-col gap-5">
              <div className="flex items-center justify-start gap-3">
                <FontAwesomeIcon icon={faPhone} size="lg" />
                <span>35 12345-6789</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <span>contato@empresa.com</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
                <span>
                  Av. BPS, 1303 - Pinheirinho, Itajubá - MG, 37500-903
                </span>
              </div>
            </div>

            <div className="flex gap-8 lg:gap-4">
              <Icon link="https://www.instagram.com/" iconName={faInstagram} />
              <Icon link="https://www.facebook.com/" iconName={faFacebook} />
              <Icon link="https://www.linkedin.com/" iconName={faLinkedinIn} />
            </div>
          </div>

          <div
            id="contato-form"
            className="w-full rounded-lg bg-white lg:w-[450px]"
          >
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
