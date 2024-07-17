import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    'https://www.dropbox.com/scl/fi/gclr2p3lsfaqbeg2p7ubt/Slider1.png?rlkey=txj58q47l8na5go28bw85lhoz&st=h7op6rk3&raw=1',
    'https://www.dropbox.com/scl/fi/06j454uijqepr39aszrnz/Slider2.png?rlkey=s36oiocqzewsjs4ekndnnknra&st=ws4d21c1&raw=1',
    'https://www.dropbox.com/scl/fi/tmx7fpe111qnfvkhjm46k/Slider3.png?rlkey=o9ri24dat5l4e2qbcit1esjhc&st=e6xizy6j&raw=1',
    'https://www.dropbox.com/scl/fi/juev4aavnn7na63nz38we/Slider4.png?rlkey=xq9mx0ir7a5jrehidmh2wi9lv&st=3ltspfru&raw=1',
    'https://www.dropbox.com/scl/fi/xxoe92rmc32phe9uin5zu/Slider5.png?rlkey=ruw42bzpge5njdwpodf89sz6b&st=ebdfj5db&raw=1',
  ];

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 2000); // Change slide every 2 seconds
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [paused, slides.length]);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000); // Pause for 10 seconds
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      {loading && (
        <div className="h-full w-64 md:w-96 bg-gray-300 animate-pulse rounded-lg mx-auto absolute inset-0 z-10"></div>
      )}
      <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-lg md:h-96 md:w-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item={index === currentSlide ? 'active' : ''}
          >
            <img
              src={slide}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
              onLoad={index === 0 ? handleImageLoad : undefined}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-300' : 'bg-gray-400'}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
