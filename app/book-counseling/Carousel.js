import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://www.dropbox.com/scl/fi/gclr2p3lsfaqbeg2p7ubt/Slider1.png?rlkey=txj58q47l8na5go28bw85lhoz&st=h7op6rk3&raw=1',
    'https://www.dropbox.com/scl/fi/06j454uijqepr39aszrnz/Slider2.png?rlkey=s36oiocqzewsjs4ekndnnknra&st=ws4d21c1&raw=1',
    'https://www.dropbox.com/scl/fi/tmx7fpe111qnfvkhjm46k/Slider3.png?rlkey=o9ri24dat5l4e2qbcit1esjhc&st=e6xizy6j&raw=1',
    '/docs/images/carousel/carousel-4.svg',
    '/docs/images/carousel/carousel-5.svg',
  ];

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
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
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
