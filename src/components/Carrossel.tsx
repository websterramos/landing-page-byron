"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carrossel() {
  const slides = [
    {
      url: "./img/bird1.png",
      titulo: "Passaro moscão",
      texto: "24h ligeiro com a galera de bobeira do campus.",
    },
    {
      url: "./img/bird2.png",
      titulo: "Topetão de fogo",
      texto: "O terror de quem fica de bobeira.",
    },
    {
      url: "./img/bird3.png",
      titulo: "Gague da neve",
      texto: "Sempre protegendo uma grade área.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" group relative mx-auto max-w-3xl px-4 py-8">
      <div className="flex justify-center pb-7">
        <h1 className=" text-3xl font-bold uppercase drop-shadow-lg">
          Serviços de monitoramento:
        </h1>
      </div>

      <div className=" relative rounded-2xl bg-cover bg-center bg-no-repeat duration-500 lg:bg-contain">
        <div className="pointer-events-none absolute inset-0 z-9 flex flex-col items-center justify-end py-10">
          <div className="rounded-xl bg-black/30 px-1 py-0.5 text-center backdrop-blur backdrop-contrast-200">
            <h1 className="text-3xl text-white">
              {slides[currentIndex].titulo}
            </h1>
            <p className="text-xl text-white/80">
              {slides[currentIndex].texto}
            </p>
          </div>
        </div>
        <img
          className=" mx-auto h-[350px] w-full rounded-xl object-cover lg:h-[400px] "
          src={slides[currentIndex].url}
        />
      </div>

      {/* {flecha esquerda} */}
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white hover:text-blue-600 group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* {flecha direita} */}
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white hover:text-blue-600 group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="top-4 flex items-center justify-center py-2">
        <div className=" top-4 flex items-center rounded-full bg-black/20 text-white ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer text-2xl hover:text-blue-600"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
