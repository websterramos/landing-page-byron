import React from "react";

export const Home = () => {
  return (
    <section id="home" className="pt-16">
      <div className="flex flex-col justify-center items-center">
        <img src="img/fundo.jpg" alt="Edifícios" />

        <div className="flex flex-col gap-5 absolute">
          <h1 className="text-white flex justify-center font-bold text-6xl">
            EMPRESA
          </h1>
        </div>
      </div>
    </section>
  );
};
