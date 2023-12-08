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
      className="flex h-screen items-center justify-center bg-blue-950"
    >
      <div id="contato-div" className="max-7xl">
        <div
          id="contato-content"
          className="flex w-full flex-col items-center justify-between gap-8 px-4 md:flex-row md:gap-80 md:px-0"
        >
          <div
            id="contato-texto"
            className="flex max-w-md flex-col gap-16 text-white"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold">
                Entre em contato conosco!
              </h2>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum, itaque!
              </p>
            </div>
            <div className="flex flex-col gap-8 font-medium">
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon icon={faPhone} size="lg" />
                <span>35 12345-6789</span>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <span>contato@empresa.com</span>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
                <span>
                  Av. BPS, 1303 - Pinheirinho, Itajubá - MG, 37500-903
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon link="https://www.instagram.com/" iconName={faInstagram} />
              <Icon link="https://www.facebook.com/" iconName={faFacebook} />
              <Icon link="https://www.linkedin.com/" iconName={faLinkedinIn} />
            </div>
          </div>

          <div id="contato-form" className="rounded-2xl bg-white">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
