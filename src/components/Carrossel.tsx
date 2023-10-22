'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

export default function Carrossel() {
    const slides = [
        {
            url: "./img/bird1.png",
            titulo: "exemplo 1",
            texto: "texto 1"
        },
        {
            url: "../../img/bird2.png",
            titulo: "exemplo 2",
            texto: "texto 2"
        },
        {
            url: "../../img/bird3.png",
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

        <div className=" max-w-3xl bg-blue-200  mx-auto py-16 px-4 relative group">
            <div className=" bg-red-200 rounded-2xl bg-center bg-cover lg:bg-contain bg-no-repeat duration-500">
                <img className=" object-cover w-full rounded-xl mx-auto h-[350px] lg:h-[400px] " src={slides[currentIndex].url} />
            </div>

            {/* {left arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* {right arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 justify-center items-center py-2'>
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