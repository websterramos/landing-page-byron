'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

export default function Carrossel() {
    const slides = [
        {
            url: "/assets/img/bird1.png",
            titulo: "exemplo 1",
            texto: "texto 1"
        },
        {
            url: "/assets/img/bird2.png",
            titulo: "exemplo 2",
            texto: "texto 2"
        },
        {
            url: "/assets/img/bird3.png",
            titulo: "exemplo 3",
            texto: "texto 3"
        },
        {
            url: "/assets/img/bird3.png",
            titulo: "exemplo 3",
            texto: "texto 3"
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

        <div className=" h-[780px] w-full n-auto py-16 px-4 relative group">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className=" w-full h-full rounded-2xl bg-center lg:bg-cover bg-contain bg-no-repeat duration-500">
                <h1 className='text-7xl'>{slides[currentIndex].titulo}</h1>
                <p>{slides[currentIndex].texto}</p>
            </div>

            {/* {left arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* {right arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );


}