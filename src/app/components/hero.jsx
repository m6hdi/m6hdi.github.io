"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    '/images/banner1.jpg',
    '/images/banner2.png',
    '/images/banner1.jpg',
    '/images/banner4.jpg',
];

const topSordas = [
    {
        name: "النهائيات",
        rating: 4.5,
        exams: [
            { name: "الفصل الأول", date: "2022/1/7" },
            { name: "الفصل الثاني", date: "2024/6/24" }
        ],
        image: '/images/ziad.png',
        category: 'Manga'
    }
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getStarRatingWidth = (rating) => {
        return `${(rating / 5) * 100}%`;
    };

    return (
        <div className='bg-sorda-white'>
            <div className="relative w-full h-[60vh] overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={images[currentIndex]}
                        alt={`Hero Image ${currentIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-opacity duration-1000 ease-in-out"
                    />
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-sorda-orange' : 'bg-sorda-white'} transition-colors duration-300`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full text-center lg:text-right  mt-5'>
                <button className='border-2 p-[10px] px-[25px] text-2xl text-sorda-orange font-sorda rounded-full lg:mr-10 border-sorda-orange'>
                    أبرز السوردات
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {topSordas.map((sorda, sordaIndex) => (
    <div key={sordaIndex} className="p-2 text-center lg:text-right">
        <div className="relative w-full h-60 lg:h-[400px]">
            <Image 
                src={sorda.image} 
                alt={sorda.name} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
        <h2 className="font-sorda font-bold text-sorda-orange mt-4 lg:text-6xl text-4xl">{sorda.name}</h2>
        
        {/* Updated Star Rating Section */}
        <div className="star-rating mt-2 flex justify-center lg:justify-end">
            <div className="stars-outer relative inline-block text-gray-300">
                <div className="stars-inner absolute top-0 left-0 overflow-hidden whitespace-nowrap" style={{ width: getStarRatingWidth(sorda.rating) }}>
                    <span className="text-yellow-500 text-3xl lg:text-4xl">★ ★ ★ ★ ★</span>
                </div>
                <span className="text-gray-300 text-3xl lg:text-4xl">★ ★ ★ ★ ★</span>
            </div>
        </div>

        <ul className="mt-2"> 
            {sorda.exams.map((exam, examIndex) => (
                <li 
                    key={examIndex} 
                    className="font-sorda mt-1 border-2 border-yellow-100 p-2 rounded-3xl"
                >
                    <span className="font-semibold text-sorda-orange text-xl">{exam.name}</span>
                    <span className='text-gray-500 mr-3'>{exam.date}</span>
                    <br className='text-sorda-orange' />
                </li>
            ))}
        </ul>
    </div>
))}

            </div>
        </div>
    );
}
