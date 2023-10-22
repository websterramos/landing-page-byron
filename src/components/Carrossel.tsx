'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

export default function Carrossel() {
    const slides = [
        {
            url: "./img/bird1.png",
            titulo: "Passaro moscão",
            texto: "24h ligeiro com a galera de bobeira do campus."
        },
        {
            url: "./img/bird2.png",
            titulo: "Topetão de fogo",
            texto: "O terror de quem fica de bobeira."
        },
        {
            url: "./img/bird3.png",
            titulo: "Gague da neve",
            texto: "Sempre protegendo uma grade área."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (

        <div className=" max-w-3xl mx-auto py-8 px-4 relative group">
            <div className='flex pb-7 justify-center'><h1 className=' text-3xl font-bold uppercase drop-shadow-lg'>Serviços de monitoramento:</h1></div>


            <div className=" rounded-2xl bg-center bg-cover lg:bg-contain bg-no-repeat duration-500 relative">
                <div className='absolute inset-0 z-10 flex flex-col justify-end items-center py-10 pointer-events-none'>

                    <div className='backdrop-contrast-200 bg-black/30 backdrop-blur rounded-xl px-1 py-0.5 text-center'>
                        <h1 className='text-3xl text-white'>{slides[currentIndex].titulo}</h1>
                        <p className='text-white/80 text-xl'>{slides[currentIndex].texto}</p>
                    </div>

                </div>
                <img className=" object-cover w-full rounded-xl mx-auto h-[350px] lg:h-[400px] " src={slides[currentIndex].url} />
            </div>

            {/* {left arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-blue-600'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* {right arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-blue-600'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 justify-center items-center py-2'>
                <div className=' bg-black/20 text-white rounded-full items-center flex top-4 '>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer hover:text-blue-600'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );


}