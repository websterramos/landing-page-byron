'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

export default function Carrossel() {
    const slides = [
        {
            url: "/assets/img/bird1.png",
            texto: "texto 1"
        },
        {
            url: "/assets/img/bird2.png",
            texto: "texto 2"
        },
        {
            url: "/assets/img/bird3.png",
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

    return (

        <div className="max-w-[1400px] h-[780px] w-full n-auto py-16 px-4 relative group">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-ful h-full rounded-2xl bg-center bg-cover duration-500"> {slides[currentIndex].texto}</div>

            {/* {left arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* {right arrow} */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

        </div>
    );


}