import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
    'https://media.istockphoto.com/id/1280715716/photo/germany-stuttgart-magical-orange-sunset-sky-above-ripe-grain-field-nature-landscape-in-summer.jpg?s=612x612&w=0&k=20&c=TukToGq-LkmpxvEXEomC3d11prf_hDRSwA7pYsLYG50=',
    'https://media.istockphoto.com/id/1401722160/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=evvmxmpiRM6sbnk59z876swwplz8mQN_ZxQWIO2eKA8=',
    'https://www.theindiaforum.in/sites/default/files/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg'
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="gallery">
            <div className="gallery__container">
                <div className="gallery__container__image">
                    <img src={images[currentIndex]} alt="gallery" />
                </div>
                <div className="gallery__container__buttons">
                    <button onClick={prevImage}>Prev</button>
                    <button onClick={nextImage}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;