import React from "react";

const About = () => {
  return (
    <section
      id="sobre"
      className="flex h-screen items-center justify-center bg-white"
    >
      <div id="sobre-div" className="max-w-7xl">
        <div
          id="sobre-content"
          className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16 md:px-0"
        >
          <div id="sobre-foto" className="max-w-xl">
            <img className="rounded-2xl shadow-md" src="img/equipe.jpg" />
          </div>
          <div
            id="sobre-texto"
            className="flex max-w-md flex-col items-start justify-center gap-2 font-semibold leading-relaxed"
          >
            <h4 className="text-lg uppercase text-blue-600">Sobre nós</h4>
            <h2 className="text-4xl">
              We grow your business with full potential by innovation
            </h2>
            <p className="font-normal md:py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              earum quae aperiam, minus sed, sint error, vero animi laudantium
              aspernatur optio non eius nobis cupiditate! Qui impedit non neque
              cupiditate error modi voluptatum odio cum quibusdam eum libero
              consectetur veniam doloribus, dignissimos nesciunt, similique sunt
              nobis rerum. Voluptatum, provident at?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
